"use client";

import { Badge } from "@/app/components/ui/badge";
import { Search } from "lucide-react";
import Container from "../../shared/container";

type Props = {
  query: string;
  total: number;
};

export function SearchPageHeader({ query, total }: Props) {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-b border-border">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="h-6 w-6 text-primary" />
            <Badge
              variant="outline"
              className="bg-background/50 text-primary border-primary/20"
            >
              نتایج جستجو
            </Badge>
          </div>
          <p className="text-4xl md:text-5xl mb-6 text-foreground">
            {query ? `نتایج برای "${query}"` : "جستجوی اخبار"}
          </p>
          {query && (
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {total} مقاله یافت شد که با جستجوی شما مطابقت دارد
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
