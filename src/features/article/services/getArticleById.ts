import { IArticle } from "@/types/article";

export async function getArticleById(id: string): Promise<IArticle | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${id}`, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to fetch article");

    return (await res.json()) as IArticle;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}
