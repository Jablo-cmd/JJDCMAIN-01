/**
 * Site chrome that reacts to scrolling: the sticky header's solid state and the
 * mobile action bar's hide-on-scroll-down behaviour.
 *
 * Both live here on purpose — they share a single throttled scroll listener, so
 * the page only does this work once per frame.
 */
import { $, rafThrottle } from "../utils.js";

const SOLID_AFTER = 32; // px scrolled before the header gains a background
const BAR_HIDE_AFTER = 240; // px before the action bar starts auto-hiding
const BAR_DELTA = 8; // ignore scroll jitter below this

export function initChrome() {
  const header = $("[data-header]");
  const actionBar = $("[data-action-bar]");
  if (!header && !actionBar) return;

  let lastY = window.scrollY;

  const update = () => {
    const y = window.scrollY;

    if (header) header.classList.toggle("is-solid", y > SOLID_AFTER);

    if (actionBar) {
      const delta = y - lastY;
      if (Math.abs(delta) > BAR_DELTA) {
        const scrollingDown = delta > 0;
        actionBar.classList.toggle("is-hidden", scrollingDown && y > BAR_HIDE_AFTER);
      }
    }

    lastY = y;
  };

  update();
  window.addEventListener("scroll", rafThrottle(update), { passive: true });
}