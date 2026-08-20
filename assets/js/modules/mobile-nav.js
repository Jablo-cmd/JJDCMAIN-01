/**
 * Full-screen mobile navigation panel.
 *
 * The panel is in the markup and simply hidden, so navigation still works with
 * JavaScript disabled (the links are reachable via the footer in that case).
 * When JS is available it becomes a proper modal: focus is trapped, Escape
 * closes, background scrolling is locked, and focus returns to the toggle.
 */
import { $, $$, trapFocus, lockScroll } from "../utils.js";

const DESKTOP = "(min-width: 62em)";

export function initMobileNav() {
  const toggle = $("[data-nav-toggle]");
  const panel = $("[data-mobile-nav]");
  if (!toggle || !panel) return;

  let releaseFocus = null;
  let releaseScroll = null;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const open = () => {
    toggle.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    panel.setAttribute("aria-hidden", "false");
    // Next frame, so the opacity transition has a starting state to animate
    // from rather than snapping straight to open.
    requestAnimationFrame(() => panel.classList.add("is-open"));
    releaseScroll = lockScroll();
    releaseFocus = trapFocus(panel);
    const firstLink = $$(".mobile-nav__link", panel)[0];
    firstLink?.focus({ preventScroll: true });
  };

  const close = ({ restoreFocus = true } = {}) => {
    if (!isOpen()) return;
    toggle.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    panel.classList.remove("is-open");

    releaseScroll?.();
    releaseScroll = null;

    releaseFocus?.(restoreFocus);
    releaseFocus = null;

    const finish = () => {
      panel.hidden = true;
    };
    panel.addEventListener("transitionend", finish, { once: true });
    // Safety net if the transition never fires (reduced motion, hidden tab).
    setTimeout(finish, 400);
  };

  toggle.addEventListener("click", () => (isOpen() ? close() : open()));

  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) close({ restoreFocus: false });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) close();
  });

  // Growing past the breakpoint reveals the desktop nav; the panel must go.
  window.matchMedia(DESKTOP).addEventListener("change", (event) => {
    if (event.matches) close({ restoreFocus: false });
  });
}