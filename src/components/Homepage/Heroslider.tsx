"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
{
id: 1,
title: "Find the Perfect Space for Your Creativity",
subtitle:
"Discover professional photo studios, podcast rooms, and creative spaces for your next project.",
image:
"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85",
},
{
id: 2,
title: "Bring Your Creative Vision to Life",
subtitle:
"Explore inspiring studios equipped with everything you need to create something amazing.",
image:
"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920&q=85",
},
{
id: 3,
title: "Turn Your Space Into an Opportunity",
subtitle:
"List your creative space on StudioSpace and connect with creators looking for the perfect studio.",
image:
"https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=85",
},
];

export default function HeroSlider() {
return ( 
<section className="w-full">
<Swiper
modules={[Autoplay, Pagination, Navigation, EffectFade]}
effect="fade"
loop={true}
speed={1000}
autoplay={{
delay: 4000,
disableOnInteraction: false,
}}
pagination={{ clickable: true }}
navigation={true}
className="h-[500px] md:h-[600px]"
>
{slides.map((slide) => ( <SwiperSlide key={slide.id}>
<div
className="relative flex h-full items-center bg-cover bg-center"
style={{ backgroundImage: `url(${slide.image})` }}
>
 <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-white md:px-12">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
                {slide.title}
              </h1>

              <p className="mb-8 max-w-xl text-base text-gray-200 md:text-lg">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/studios"
                  className="rounded-lg bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200"
                >
                  Explore Studios
                </Link>

                <Link
                  href="/studios"
                  className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Host Your Space
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

);
}
