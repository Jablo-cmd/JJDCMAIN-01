/**
 * Filter pills, shared by the gallery categories and the timetable's dance
 * styles.
 *
 * Markup contract:
 *   <div data-filter-group="gallery">
 *     <button data-filter="all" aria-pressed="true">All</button>
 *     <button data-filter="competitions" aria-pressed="false">Competitions</button>
 *   </div>
 *   <div data-filter-target="gallery">
 *     <figure data-categories="competitions performances">…</figure>
 *   </div>
 *
 * Without JavaScript every item is visible, which is the correct fallback.
 * Results are announced through an optional `data-filter-status` live region.
 * An optional `data-filter-empty` element (matched to the group name the same
 * way) is un-hidden when a filter matches zero items, so a thin category
 * (e.g. one awaiting real photography) shows a graceful message instead of a
 * blank grid.
 */
import { $, $$ } from "../utils.js";

export function initFilters() {
  $$("[data-filter-group]").forEach((group) => {
    const name = group.dataset.filterGroup;
    const target = $(`[data-filter-target="${name}"]`);
    if (!target) return;

    const status = $(`[data-filter-status="${name}"]`);
    const empty = $(`[data-filter-empty="${name}"]`);
    const items = $$("[data-categories]", target);
    const buttons = $$("[data-filter]", group);

    const apply = (value) => {
      let shown = 0;
      items.forEach((item) => {
        const categories = item.dataset.categories.split(/\s+/);
        const match = value === "all" || categories.includes(value);
        item.hidden = !match;
        if (match) shown += 1;
      });

      buttons.forEach((button) =>
        button.setAttribute("aria-pressed", String(button.dataset.filter === value))
      );

      if (empty) empty.hidden = shown > 0;

      if (status) {
        const label = buttons.find((b) => b.dataset.filter === value)?.textContent.trim();
        status.textContent =
          value === "all"
            ? `Showing all ${shown} items.`
            : `Showing ${shown} ${shown === 1 ? "item" : "items"} in ${label}.`;
      }
    };

    group.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) apply(button.dataset.filter);
    });
  });
}