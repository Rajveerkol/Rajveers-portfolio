/**
 * splitHelpers.ts
 * Lightweight replacement for gsap-trial/SplitText.
 * Splits element text into individual <span> elements for GSAP animations.
 */

/** Wraps every word in a <span>. Returns the list of span elements. */
export function splitIntoWords(el: Element): HTMLElement[] {
  const original = el.innerHTML;
  el.setAttribute("data-split-original", original);

  const words = original.split(/\s+/).filter(Boolean);
  el.innerHTML = words
    .map((w) => `<span class="split-word" style="display:inline-block;">${w}</span>`)
    .join(" ");

  return Array.from(el.querySelectorAll<HTMLElement>(".split-word"));
}

/** Wraps every character in a <span>. Returns the list of span elements. */
export function splitIntoChars(el: Element): HTMLElement[] {
  const original = el.textContent ?? "";
  el.setAttribute("data-split-original", el.innerHTML);

  el.innerHTML = original
    .split("")
    .map((ch) =>
      ch === " "
        ? `<span class="split-char" style="display:inline-block;">&nbsp;</span>`
        : `<span class="split-char" style="display:inline-block;">${ch}</span>`
    )
    .join("");

  return Array.from(el.querySelectorAll<HTMLElement>(".split-char"));
}

/** Reverts an element that was split with splitIntoWords or splitIntoChars. */
export function revertSplit(el: Element): void {
  const original = el.getAttribute("data-split-original");
  if (original != null) {
    el.innerHTML = original;
    el.removeAttribute("data-split-original");
  }
}
