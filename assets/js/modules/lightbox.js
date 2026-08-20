/**
 * Gallery lightbox.
 *
 * Progressive enhancement: each gallery tile is a real <button> that does
 * nothing without JavaScript, and the images are already visible on the page —
 * the lightbox only offers a larger view.
 *
 * Supports keyboard (arrows, Home/End, Escape), touch swipe and focus trapping.
 */
import { $, $$, trapFocus, lockScroll } from "../utils.js";

const SWIPE_THRESHOLD = 48; // px

export function initLightbox() {
  const gallery = $("[data-gallery]");
  const lightbox = $("[data-lightbox]");
  if (!gallery || !lightbox) return;

  const image = $("[data-lightbox-image]", lightbox);
  const caption = $("[data-lightbox-caption]", lightbox);
  const counter = $("[data-lightbox-counter]", lightbox);

  let items = [];
  let index = 0;
  let releaseFocus = null;
  let releaseScroll = null;

  /** Only tiles currently on screen take part, so filtering stays consistent. */
  const collectItems = () =>
    $$("[data-gallery-item]", gallery).filter((el) => !el.hidden);

  const render = () => {
    const item = items[index];
    if (!item) return;
    const source = item.dataset.full || $("img", item)?.src;
    const text = item.dataset.caption || $("img", item)?.alt || "";

    image.src = source;
    image.alt = text;
    caption.textContent = text;
    counter.textContent = `${index + 1} of ${items.length}`;
  };

  const go = (delta) => {
    if (items.length === 0) return;
    index = (index + delta + items.length) % items.length;
    render();
  };

  const open = (trigger) => {
    items = collectItems();
    index = Math.max(0, items.indexOf(trigger));
    render();

    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
    releaseScroll = lockScroll();
    releaseFocus = trapFocus(lightbox);
    $("[data-lightbox-close]", lightbox)?.focus({ preventScroll: true });
  };

  const close = () => {
    if (lightbox.hidden) return;
    lightbox.classList.remove("is-open");
    releaseScroll?.();
    releaseScroll = null;
    releaseFocus?.();
    releaseFocus = null;

    const finish = () => {
      lightbox.hidden = true;
      image.removeAttribute("src");
    };
    lightbox.addEventListener("transitionend", finish, { once: true });
    setTimeout(finish, 400);
  };

  gallery.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-gallery-item]");
    if (trigger) open(trigger);
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target.closest("[data-lightbox-close]")) return close();
    if (event.target.closest("[data-lightbox-prev]")) return go(-1);
    if (event.target.closest("[data-lightbox-next]")) return go(1);
    // Clicking the backdrop — but not the image or controls — closes.
    if (event.target === lightbox || event.target.matches("[data-lightbox-stage]")) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    switch (event.key) {
      case "Escape":
        close();
        break;
      case "ArrowLeft":
        go(-1);
        break;
      case "ArrowRight":
        go(1);
        break;
      case "Home":
        event.preventDefault();
        index = 0;
        render();
        break;
      case "End":
        event.preventDefault();
        index = items.length - 1;
        render();
        break;
    }
  });

  let touchStartX = null;
  lightbox.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const delta = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
    },
    { passive: true }
  );
}