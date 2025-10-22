"use client";
import React from "react";
import { useHeroNews } from "./hooks/useHeroNews";
import { BreakingNews } from "../breaking-news";
import Container from "@/components/shared/container";
import LiveStatCard from "../live-rates/card";
import { useRates } from "../live-rates/hooks/useRates";
import { mapLiveStats } from "../live-rates/utils/mapLiveStats";
import IranWeatherSlider from "../sidebar/weather/slider";
import WorldClockSlider from "../sidebar/world-clock/slider";
import { ArticleCard } from "@/components/shared/article-card";

const HeroTest = () => {
  const { data: articles, isLoading, error } = useHeroNews();
  const { data: ratesData } = useRates();

  const liveStats = ratesData ? mapLiveStats(ratesData) : [];

  if (isLoading) return <p>در حال بارگذاری اخبار مهم...</p>;
  if (error) return <p>خطا در بارگذاری اخبار: {error.message}</p>;
  if (!articles || articles.length === 0) return <p>هیچ خبری موجود نیست.</p>;

  return (
    <Container>
      <BreakingNews />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-6">
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          {articles.slice(0, 2).map((item) => {
            return <ArticleCard key={item.id} article={item} type="overlay"/>;
          })}
        </div>
        <div className="md:col-span-2 flex flex-col gap-6">
          <IranWeatherSlider variant="vertical" />
          <WorldClockSlider variant="vertical" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-6">
        {liveStats.map((stat) => (
          <LiveStatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </Container>
  );
};

export default HeroTest;
