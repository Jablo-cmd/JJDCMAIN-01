/**
 * Entry point.
 *
 * Loaded as a module, so it is deferred by default and never blocks rendering.
 * Every module below is defensive: if the markup it looks for is not on the
 * page, it returns immediately. That keeps one script working across all pages
 * without per-page bundles.
 */
import { $ } from "./utils.js";
import { initChrome } from "./modules/chrome.js";
import { initMobileNav } from "./modules/mobile-nav.js";

const features = [
  ["[data-reveal]", () => import("./modules/reveal.js"), "initReveal"],
  ["[data-disclosure]", () => import("./modules/disclosure.js"), "initDisclosures"],
  ["[data-gallery]", () => import("./modules/lightbox.js"), "initLightbox"],
  ["[data-filter-group]", () => import("./modules/filter.js"), "initFilters"],
  ["[data-form]", () => import("./modules/form.js"), "initForms"],
  ["[data-timetable]", () => import("./modules/timetable.js"), "initTimetable"],
  ["[data-print-trigger]", () => import("./modules/print.js"), "initPrint"],
  ["[data-testimonials]", () => import("./modules/testimonials.js"), "initTestimonials"],
];

/** Fills any element marked `data-current-year` — used by the footer. */
function initCurrentYear() {
  const target = $("[data-current-year]");
  if (target) target.textContent = String(new Date().getFullYear());
}

function initFeature([selector, load, exportName]) {
  if (!document.querySelector(selector)) return;
  load()
    .then((module) => module[exportName]())
    .catch(() => {
      // Optional enhancements must never affect the core page experience.
    });
}

function init() {
  initChrome();
  initMobileNav();
  initCurrentYear();
  features.forEach(initFeature);
}

// One failing feature must never take the rest of the page down with it.
try {
  init();
} catch {
  // Fail closed: keep the page usable even if an optional module throws.
}
