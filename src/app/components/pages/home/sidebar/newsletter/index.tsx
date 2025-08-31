"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Mail, CheckCircle, Sparkles } from "lucide-react";
import Container from "../../../../shared/container";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-6 relative overflow-hidden rounded-xl" dir="rtl">
      {/* Light neutral gradient background */}
      <div className="absolute inset-0 bg-secondary/5"></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-secondary-400 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">به‌روز بمانید</span>
            </div>

            <h2 className="text-5xl py-2 font-bold mb-6 bg-gradient-to-r from-secondary-300 via-secondary to-secondary-300 bg-clip-text text-transparent">
              هرگز خبری را از دست ندهید
            </h2>

            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              آخرین اخبار فوری، مصاحبه‌های اختصاصی و تحلیل‌های عمیق را مستقیماً
              هر صبح در ایمیل خود دریافت کنید.
            </p>
          </div>

          {/* Newsletter form */}
          <div className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="bg-secondary-600/20 backdrop-blur-sm border border-secondary-500/40 rounded-xl p-6 animate-in zoom-in duration-500">
                <CheckCircle className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  خوش آمدید!
                </h3>
                <p className="text-secondary-200">
                  اولین خبرنامه شما فردا صبح ارسال خواهد شد.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                {/* Main icon on the left side */}

                <div className="relative">
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary w-6 h-6 z-[1]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <Input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ps-12 pr-4 py-4 text-lg bg-transparent border border-secondary  text-gray-700 placeholder:text-gray-500 rounded-xl focus:!ring-secondary"
                    required
                  />
                </div>

                <Button
                  variant={"secondary"}
                  type="submit"
                  size="lg"
                  className="w-full py-4 text-lg font-semibold  hover:from-secondary-600 hover:to-secondary-600 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/25"
                >
                  ثبت‌نام در خبرنامه
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-500 mt-4">
              به جمع ۵۰,۰۰۰+ خواننده بپیوندید. امکان لغو اشتراک در هر زمان وجود
              دارد.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
