import FeaturedStudios from "@/components/Homepage/FeaturedStudios";
import HeroSlider from "@/components/Homepage/Heroslider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <FeaturedStudios></FeaturedStudios>
    </div>
    );
}
