"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryCarouselProps {
images: string[];
}

const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
const [currentIndex, setCurrentIndex] = useState(0);

if (!images || images.length === 0) {
return <p>No gallery images available.</p>;
}

const nextImage = () => {
setCurrentIndex((prev) => (prev + 1) % images.length);
};

const prevImage = () => {
setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
};

return ( <div className="w-full space-y-4"> <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
<Image
src={images[currentIndex]}
alt={`Gallery image ${currentIndex + 1}`}
fill
unoptimized
className="object-cover"
/>
    <button
      onClick={prevImage}
      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white"
    >
      Previous
    </button>

    <button
      onClick={nextImage}
      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white"
    >
      Next
    </button>
  </div>

  <div className="flex gap-3 overflow-x-auto">
    {images.map((image, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${
          currentIndex === index ? "border-green-500" : "border-transparent"
        }`}
      >
        <Image
          src={image}
          alt={`Thumbnail ${index + 1}`}
          fill
          unoptimized
          className="object-cover"
        />
      </button>
    ))}
  </div>
</div>

);
};

export default GalleryCarousel;
