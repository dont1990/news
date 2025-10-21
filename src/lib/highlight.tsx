import React from "react";

/**
 * Highlights all occurrences of `query` inside `text`.
 * Returns an array of strings and <mark> elements.
 *
 * @param text The original text to highlight
 * @param query The keyword to highlight
 */
export function highlightText(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");

  return text.split(regex).map((part, idx) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={idx} className="bg-yellow-200 dark:bg-yellow-600/50">
        {part}
      </mark>
    ) : (
      part
    )
  );
}
