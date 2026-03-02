"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

const newsItems = [
  {
    id: 1,
    emoji: "🚀",
    title: "Formation Complète CI/CD – 80 Heures",
    date: new Date().toLocaleDateString(),
    subtitle: "Animée par un Senior DevOps Engineer Américain 🇺🇸",
    description:
      "Vous souhaitez maîtriser les pipelines CI/CD et travailler comme un vrai DevOps professionnel ? Nous lançons une formation intensive de 80 heures dédiée à la mise en place de pipelines CI/CD modernes, animée par un Senior DevOps Engineer basé aux États-Unis, avec une expérience réelle en entreprise internationale.",
  },
  {
    id: 2,
    emoji: "🎓",
    title: "Nouvelle Formation Cloud AWS – 60 Heures",
    date: new Date().toLocaleDateString(),
    subtitle: "Certifiez-vous AWS Solutions Architect ☁️",
    description:
      "Préparez-vous à la certification AWS Solutions Architect avec notre nouvelle formation de 60 heures. Apprenez à concevoir des architectures cloud scalables et sécurisées avec les services AWS les plus demandés sur le marché.",
  },
  {
    id: 3,
    emoji: "💡",
    title: "Bootcamp Python & Data Science – 40 Heures",
    date: new Date().toLocaleDateString(),
    subtitle: "Du débutant au professionnel en Data 📊",
    description:
      "Maîtrisez Python, Pandas, NumPy et les bases du Machine Learning avec notre bootcamp intensif. Une formation pratique axée sur des projets réels pour vous préparer aux métiers de la data.",
  },
];

export default function News() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
      setIsAnimating(false);
    }, 400);
  };

  const goTo = (index: number) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 400);
  };

  const news = newsItems[current];

  return (
    <div className="w-full bg-gradient-to-r from-[#0d4f4f] to-[#1fa6a6] text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* News label */}
      <div className="flex items-center gap-0">
        <div className="bg-[#ff4d4d] text-white text-xs font-bold px-4 py-2 uppercase tracking-widest shrink-0">
          📢 Actualité
        </div>
        <div className="h-px flex-1 bg-white/20" />
      </div>

      {/* Sliding content */}
      <div
        className="px-6 py-4 md:px-10"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-2xl">{news.emoji}</span>
            <div>
              <p className="font-bold text-base md:text-lg leading-tight">
                {news.title}
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/30" />

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-sm font-semibold text-[#a8edea]">
              {news.subtitle}
            </p>
            <p className="text-white/80 text-sm line-clamp-2">
              {news.description}
            </p>
            <div className="flex justify-end mt-2">
              <Button className="w-sm mt-2 px-3 py-1 text-sm bg-[#0d4f4f] hover:bg-[#0d4f4f]/90 text-white transition-colors duration-300">
                Inscrivez-vous maintenant avant le {news.date} 
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 pb-3">
        {newsItems.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`News ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}