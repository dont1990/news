import CategoryBadge from "@/app/components/shared/category-badge";
import { Button } from "@/app/components/ui/button";
import { Article } from "@/app/types/types";
import Link from "next/link";
import Image from "next/image";

const FeaturedStory = ({ article }: { article: Article }) => {
  return (
    <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 min-h-[400px] md:min-h-[500px] xl:min-h-[600px]">
      <div className="absolute inset-0">
        <Image
          src={article.imageUrl || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-end text-right">
        <CategoryBadge title={article.category} className="mb-4" />

        <Link
          href={`/article/${article.id}`}
          className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-white text-balance hover:text-primary transition-colors w-fit"
        >
          {article.title}
        </Link>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
          {article.description}
        </p>

        <Link href={`/article/${article.id}`}>
          <Button
            size="default"
            className="bg-white text-black hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 w-fit"
          >
            ادامه مطلب
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedStory;
