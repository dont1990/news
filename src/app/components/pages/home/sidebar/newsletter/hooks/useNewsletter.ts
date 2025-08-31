import { useState } from "react";

export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const subscribe = async () => {
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "خطا در ثبت نام خبرنامه");
      }

      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("خطا در ثبت نام خبرنامه");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isSubscribed,
    loading,
    error,
    subscribe,
  };
}
