import { Article } from "@/app/types/types";

export async function getArticleById(id: string): Promise<Article | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${id}`, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to fetch article");

    return (await res.json()) as Article;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}
