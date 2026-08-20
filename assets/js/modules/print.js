/**
 * Print trigger — used by the Timetable page's "Print / Save as PDF" button.
 * The browser's native print-to-PDF is the actual PDF export; see the print
 * stylesheet in main.css for what changes when this fires.
 */
import { $$ } from "../utils.js";

export function initPrint() {
  $$("[data-print-trigger]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
}
