"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
Avatar,
AvatarFallback,
AvatarImage,
} from "@/components/ui/avatar";

import studioSpaceLogo from "@/asset/Studio_Space_logo.jpg";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth-client";

import {
Popover,
PopoverContent,
PopoverHeader,
PopoverTitle,
PopoverDescription,
PopoverTrigger,
} from "@/components/ui/popover";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "Explore Studios", href: "/studios" },
{ label: "How It Works", href: "/how-it-works" },
{ label: "About Us", href: "/about" },
];

const dashboardLinks = [
{ label: "Dashboard", href: "/dashboard" },
{ label: "Add New Studio", href: "/add-studio" },
{ label: "My Studio Listings", href: "/my-listings" },
{ label: "My Bookings", href: "/my-bookings" },
];

export default function Navbar() {
const { data: session } = useSession();
const user = session?.user;

const pathname = usePathname();
const router = useRouter();

const handleSignOut = async () => {
await signOut();
router.push("/");
};

return ( <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black"> <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
    
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

    {user ? (
      <Popover>
        <PopoverTrigger
          render={
            <button
              className="rounded-full outline-none ring-offset-2 transition hover:ring-2 hover:ring-white"
              aria-label="Open profile menu"
            >
              <Avatar className="h-10 w-10 cursor-pointer">
                <AvatarImage src={user.image || ""} />
                <AvatarFallback>
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </button>
          }
        />

        <PopoverContent className="w-64 p-3" align="end">

      
          <PopoverHeader className="border-b pb-3">
            <PopoverTitle>{user.name}</PopoverTitle>
            <PopoverDescription>
              {user.email}
            </PopoverDescription>
          </PopoverHeader>

        
          <div className="flex flex-col gap-1 py-3">
            {dashboardLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

         
          <div className="border-t pt-3">
            <Button
              onClick={handleSignOut}
              variant="destructive"
              className="w-full"
            >
              Logout
            </Button>
          </div>

        </PopoverContent>
      </Popover>
    ) : (
      
      <div className="flex shrink-0 items-center gap-3">
        <Button
          variant="ghost"
          size="lg"
          className="font-semibold text-white hover:bg-gray-800 hover:text-white"
          render={<Link href="/Login" />}
        >
          Login
        </Button>

        <Button
          size="lg"
          className="rounded-xl px-6 font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          render={<Link href="/Signup" />}
        >
          Register
        </Button>
      </div>
    )}

  </div>
</header>

);
}
