import Image from "next/image";
import studioSpaceLogo from "@/asset/Studio_Space_logo.jpg";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-background">
      <Image
        src={studioSpaceLogo}
        alt="StudioSpace"
        width={180}
        height={60}
        className="h-12 w-auto object-contain"
        priority
      />

      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black dark:border-gray-700 dark:border-t-white" />

      <p className="text-sm font-medium text-muted-foreground">
        Preparing your creative space...
      </p>
    </div>
  );
}