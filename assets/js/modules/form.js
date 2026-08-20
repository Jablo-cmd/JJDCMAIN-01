/**
 * Enquiry form: friendly validation, spam trap, and background submission.
 *
 * Without JavaScript the form still posts normally to its `action`, and the
 * browser's own constraint validation still applies — this module only makes
 * the experience calmer: inline messages in plain language, focus moved to the
 * first problem, and no full page reload on success.
 */
import { $, $$ } from "../utils.js";

/** Plain-language messages, in preference to the browser's default wording. */
const MESSAGES = {
  valueMissing: (label) => `Please add ${label.toLowerCase()}.`,
  typeMismatch: () => "Please check this looks like a valid email address.",
  tooShort: (label) => `${label} is a little short — please add a bit more.`,
  patternMismatch: () => "Please check this number — digits, spaces and + only.",
  default: () => "Please check this field.",
};

const labelFor = (field) => {
  const label = field.closest(".field")?.querySelector(".field__label");
  return (label?.childNodes[0]?.textContent || field.name || "this field").trim();
};

function messageFor(field) {
  const { validity } = field;
  const label = labelFor(field);
  if (validity.valueMissing) return MESSAGES.valueMissing(label);
  if (validity.typeMismatch) return MESSAGES.typeMismatch(label);
  if (validity.tooShort) return MESSAGES.tooShort(label);
  if (validity.patternMismatch) return MESSAGES.patternMismatch(label);
  return MESSAGES.default(label);
}

function showError(field, message) {
  const wrapper = field.closest(".field");
  const output = wrapper?.querySelector("[data-error-for]");
  field.setAttribute("aria-invalid", "true");
  if (output) output.textContent = message;
}

function clearError(field) {
  const wrapper = field.closest(".field");
  const output = wrapper?.querySelector("[data-error-for]");
  field.removeAttribute("aria-invalid");
  if (output) output.textContent = "";
}

function validate(field) {
  if (field.checkValidity()) {
    clearError(field);
    return true;
  }
  showError(field, messageFor(field));
  return false;
}

function setStatus(status, type, title, body) {
  if (!status) return;
  status.className = `form__status form__status--${type}`;
  status.innerHTML = "";
  const heading = document.createElement("strong");
  heading.className = "form__status-title";
  heading.textContent = title;
  const text = document.createElement("span");
  text.textContent = body;
  status.append(heading, text);
}

export function initForms() {
  $$("[data-form]").forEach((form) => {
    const status = $("[data-form-status]", form);
    const submitButton = $("[type='submit']", form);
    const fields = $$("input, select, textarea", form).filter(
      (field) => !field.closest(".form__trap") && field.type !== "hidden"
    );

    // Let the browser's built-in bubbles stay out of the way; we render our own.
    form.setAttribute("novalidate", "");

    fields.forEach((field) => {
      // Validate on blur, then live once a field is already marked invalid.
      field.addEventListener("blur", () => {
        if (field.value.trim() !== "" || field.required) validate(field);
      });
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") validate(field);
      });
    });

    form.addEventListener("submit", async (event) => {
      const invalid = fields.filter((field) => !validate(field));

      if (invalid.length > 0) {
        event.preventDefault();
        setStatus(
          status,
          "error",
          "Almost there",
          `Please check ${invalid.length === 1 ? "the highlighted field" : `the ${invalid.length} highlighted fields`} and send again.`
        );
        invalid[0].focus();
        return;
      }

      // A bot filled the hidden field — pretend everything is fine and drop it.
      const trap = $("[data-form-trap]", form);
      if (trap && trap.value !== "") {
        event.preventDefault();
        setStatus(status, "success", "Thank you", "Your message has been sent.");
        return;
      }

      // No endpoint configured yet: keep the page as it is and say so plainly,
      // rather than pretending the message went somewhere.
      const endpoint = form.getAttribute("action");
      if (!endpoint || endpoint.includes("FORMSPREE_ID")) {
        event.preventDefault();
        setStatus(
          status,
          "error",
          "Form not connected yet",
          "This form is not connected yet. In the meantime, please call or WhatsApp the studio on 082 925 4377."
        );
        return;
      }

      event.preventDefault();
      submitButton.disabled = true;
      const originalLabel = submitButton.textContent;
      submitButton.textContent = "Sending…";

      try {
        const response = await fetch(endpoint, {
          method: form.method || "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        form.reset();
        fields.forEach(clearError);
        setStatus(
          status,
          "success",
          "Thank you — your enquiry is on its way",
          "Jo will be in touch shortly. If you would like a faster reply, WhatsApp the studio on 082 925 4377."
        );
      } catch {
        setStatus(
          status,
          "error",
          "That didn't send",
          "Something went wrong on the way. Please try again, or call the studio on 082 925 4377."
        );
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    });
  });
}