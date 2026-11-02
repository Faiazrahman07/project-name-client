import CategoryCard from "@/components/Homepage/CategoryCard";
import FeaturedStudios from "@/components/Homepage/FeaturedStudios";
import HeroSlider from "@/components/Homepage/Heroslider";
import HostGuarantee from "@/components/Homepage/HostGuarantee";
import HowBookingWorks from "@/components/Homepage/HowBookingWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <FeaturedStudios></FeaturedStudios>
      <CategoryCard></CategoryCard>
      <HowBookingWorks></HowBookingWorks>
      <HostGuarantee></HostGuarantee>
    </div>
    );
}
