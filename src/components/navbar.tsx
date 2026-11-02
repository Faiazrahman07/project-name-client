"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import studioSpaceLogo from "@/asset/Studio_Space_logo.jpg";
import { Button } from "@/components/ui/button";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "Explore Studios", href: "/studios" },
{ label: "How It Works", href: "/how-it-works" },
{ label: "About Us", href: "/about" },
];

export default function Navbar() {
const pathname = usePathname();

return ( 
<header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black"> <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">


    <Link
      href="/"
      className="flex shrink-0 items-center transition-opacity hover:opacity-80"
      aria-label="StudioSpace Home"
    >
      <Image
        src={studioSpaceLogo}
        alt="StudioSpace Logo"
        height={42}
        className="h-10 w-auto object-contain"
        priority
      />
    </Link>

    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "text-white"
                : "text-white hover:text-gray-300"
            }`}
          >
            {link.label}

            {isActive && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-white" />
            )}
          </Link>
        );
      })}
    </nav>

    <div className="flex shrink-0 items-center gap-3">
      <Button
        variant="ghost"
        size="lg"
        className="font-semibold text-white hover:bg-gray-800 hover:text-white"
        render={<Link href="/login" />}
      >
        Login
      </Button>

      <Button
        size="lg"
        className="rounded-xl px-6 font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        render={<Link href="/register" />}
      >
       Register
      </Button>
    </div>

  </div>
</header>

);
}
