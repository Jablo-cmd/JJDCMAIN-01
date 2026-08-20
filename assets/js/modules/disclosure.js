/**
 * Generic show/hide disclosure, used by both the FAQ accordions and the
 * timetable's day panels. One implementation, two consumers.
 *
 * Markup contract:
 *   <button aria-expanded="true" aria-controls="panel-id" data-disclosure>…</button>
 *   <div id="panel-id" data-open>…</div>
 *
 * Panels are expanded in the markup so everything is readable without
 * JavaScript. The height animation is pure CSS (grid-template-rows 0fr → 1fr),
 * so this module only manages state.
 *
 * Add `data-disclosure-exclusive` to a wrapper to make its panels behave as a
 * classic accordion where opening one closes the others.
 */
import { $, $$ } from "../utils.js";

const panelFor = (trigger) => {
  const id = trigger.getAttribute("aria-controls");
  return id ? document.getElementById(id) : null;
};

export function setDisclosure(trigger, open) {
  const panel = panelFor(trigger);
  if (!panel) return;
  trigger.setAttribute("aria-expanded", String(open));
  panel.toggleAttribute("data-open", open);
}

export function initDisclosures(root = document) {
  const triggers = $$("[data-disclosure]", root);
  if (triggers.length === 0) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") !== "true";

      const group = trigger.closest("[data-disclosure-exclusive]");
      if (group && open) {
        $$("[data-disclosure]", group)
          .filter((other) => other !== trigger)
          .forEach((other) => setDisclosure(other, false));
      }

      setDisclosure(trigger, open);
    });
  });
}

/** Opens or closes every disclosure inside a container. */
export function setAllDisclosures(container, open) {
  $$("[data-disclosure]", container).forEach((trigger) => setDisclosure(trigger, open));
}

/** Collapses all but the trigger matching `selector` (used for mobile timetable). */
export function collapseAllExcept(container, selector) {
  const keep = selector ? $(selector, container) : null;
  $$("[data-disclosure]", container).forEach((trigger) =>
    setDisclosure(trigger, trigger === keep)
  );
}