import { testimonials } from "../testimonials.js";
import { $$ } from "../utils.js";

function testimonialCard({ quote, author }) {
  const figure = document.createElement("figure");
  figure.className = "testimonial";

  const blockquote = document.createElement("blockquote");
  blockquote.className = "testimonial__quote";
  const paragraph = document.createElement("p");
  paragraph.textContent = `“${quote}”`;
  blockquote.append(paragraph);

  const caption = document.createElement("figcaption");
  caption.className = "testimonial__author";
  caption.textContent = author;

  figure.append(blockquote, caption);
  return figure;
}

/** Renders the approved testimonial data wherever a testimonial list appears. */
export function initTestimonials() {
  $$('[data-testimonials]').forEach((container) => {
    container.replaceChildren(...testimonials.map(testimonialCard));
  });
}