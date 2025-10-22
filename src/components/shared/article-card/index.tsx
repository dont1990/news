"use client";

import { ArticleCardProps } from "./types/article-card-types";
import { BottomOverlayCard } from "./variants/bottom-overlay";
import { DefaultCard } from "./variants/default";
import { HorizontalCard } from "./variants/horizontal";
import { OverlayCard } from "./variants/overlay";

export function ArticleCard({
  article,
  type = "default",
  highlightQuery,
}: ArticleCardProps) {
  switch (type) {
    case "horizontal":
      return (
        <HorizontalCard article={article} highlightQuery={highlightQuery} />
      );
    case "overlay":
      return <OverlayCard article={article} highlightQuery={highlightQuery} />;
    case "bottomOverlay":
      return (
        <BottomOverlayCard article={article} highlightQuery={highlightQuery} />
      );
    default:
      return <DefaultCard article={article} highlightQuery={highlightQuery} />;
  }
}
