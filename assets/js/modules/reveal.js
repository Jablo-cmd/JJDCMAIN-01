/**
 * Reveals sections as they enter the viewport.
 *
 * Elements marked `data-reveal` in the markup start hidden in CSS and are shown
 * once seen. If the observer is unavailable, or the visitor prefers reduced
 * motion, everything is shown immediately — content never depends on the effect.
 *
 * A container marked `data-stagger` gives its `data-reveal` children an
 * increasing delay so they cascade. The attribute must be present in the markup
 * (not added by JS) or the elements would flash before being hidden.
 */
import { $$, prefersReducedMotion } from "../utils.js";

const STAGGER_STEP = 80; // ms between siblings
const MAX_STAGGER = 6; // beyond this the wait stops feeling responsive

export function initReveal() {
  const targets = $$("[data-reveal]");
  if (targets.length === 0) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  $$("[data-stagger]").forEach((group) => {
    $$(":scope > [data-reveal]", group).forEach((child, index) => {
      child.style.setProperty(
        "--reveal-delay",
        `${Math.min(index, MAX_STAGGER) * STAGGER_STEP}ms`
      );
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
}