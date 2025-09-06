import Container from "@/app/components/shared/container";
import React from "react";

const HomePageIntro = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/5 border-b border-border">
      <Container>
        <div className="text-center mb-8">
          <p className="text-4xl md:text-5xl text-foreground mb-4">
            با اخبار جهانی همراه باشید
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            آخرین اخبار فوری، تحلیل‌های عمیق و داستان‌های پرطرفدار از سراسر جهان
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HomePageIntro;
