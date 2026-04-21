"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const slidesData = [
  {
    title: `<span class="text-primary">Bienvenue</span> 
             dans l’univers de luxe 
             <span class="text-primary">LMB</span>`,
    description:
      "Découvrez une large gamme d'appareils électroménagers modernes, performants et adaptés à tous vos besoins. Notre mission est de vous offrir des solutions fiables pour simplifier votre quotidien et améliorer votre confort à la maison.",
    image: "/images/lmb-hero1.webp",
  },
  {
    title: `Des appareils de qualité supérieure, <span class="text-primary">hyper économiques et puissants, rapide, très efficace fiable</span> pour une vie plus simple.`,
    description:
      "Découvrez une large gamme d'appareils électroménagers modernes, performants et adaptés à tous vos besoins. Notre mission est de vous offrir des solutions fiables pour simplifier votre quotidien et améliorer votre confort à la maison.",
    image: "/images/lmb-hero2.webp",
  },
  {
    title: `Équipez votre maison en toute <span class="text-primary">sécurité</span> et en toute <span class="text-primary">confiance</span> avec le top des électroménagers chez <span class="text-primary">LMB</span>`,
    description:
      "Découvrez une large gamme d'appareils électroménagers modernes, performants et adaptés à tous vos besoins. Notre mission est de vous offrir des solutions fiables pour simplifier votre quotidien et améliorer votre confort à la maison.",
    image: "/images/lmb-hero3.webp",
  },
];

export default function HeroCarousel() {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay Effect
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);

  // Pause on hover
  const onMouseEnter = useCallback(() => setIsPlaying(false), []);
  const onMouseLeave = useCallback(() => setIsPlaying(true), []);

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex">
        {slidesData.map((item, index) => (
          <div key={index} className="min-w-full relative h-[90vh] lg:h-screen">
            {/* Image */}
            <Image
              src={item.image}
              alt=""
              className="object-cover object-center"
              fill
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center">
              {/* Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_30%,transparent_60%)]"></div>

              {/* Circle */}
              <div className=" absolute md:top-10 top:20 w-62.5 h-62.5 md:w-100 md:h-100  lg:w-137.5 lg:h-137.5 -left-20 md:-left-25 bg-white/40 rounded-full border border-white/30"></div>

              {/* CONTENT */}
              <div className="relative px-6 md:px-16 max-w-xl md:max-w-3xl">
                <h2
                  className="text-3xl md:text-5xl font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                <p className="mb-6 text-black font-semibold">
                  {item.description}
                </p>

                <button
                  onClick={() => router.push("/products")}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition"
                >
                  Voir nos produits →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
