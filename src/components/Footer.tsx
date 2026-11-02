import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiX,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "All Studios", path: "/studios" },
  { name: "My Bookings", path: "/my-bookings" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const categories = [
  "Photo Studios",
  "Sound Stages",
  "Podcast Rooms",
  "Music Suites",
  "Art Workshops",
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

       
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-2">
              <img
                src="/logo.png"
                alt="StudioSpace"
                className="h-10 w-10 rounded-lg object-contain"
              />

              <span className="text-2xl font-bold text-white">
                Studio<span className="text-primary">Space</span>
              </span>
            </Link>

            <p className="mb-6 max-w-xs text-sm leading-7 text-zinc-400">
              Connecting creators with inspiring spaces to bring
              their creative ideas to life. Find your perfect studio
              and start creating today.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://facebook.com" aria-label="Facebook"
                className="transition hover:text-primary">
                <SiFacebook size={20} />
              </a>

              <a href="https://instagram.com" aria-label="Instagram"
                className="transition hover:text-primary">
                <SiInstagram size={20} />
              </a>

              <a href="https://linkedin.com" aria-label="LinkedIn"
                className="transition hover:text-primary">
                <FaLinkedinIn size={20} />
              </a>

              <a href="https://x.com" aria-label="X"
                className="transition hover:text-primary">
                <SiX size={20} />
              </a>
            </div>
          </div>

      
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-zinc-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="transition hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

   
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Popular Categories
            </h3>

            <ul className="space-y-4 text-sm text-zinc-400">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/studios?category=${encodeURIComponent(category)}`}
                    className="transition hover:text-primary"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

     
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Stay Updated!
            </h3>

            <p className="mb-5 text-sm leading-7 text-zinc-400">
              Subscribe to our newsletter to receive the latest
              studio updates and special offers.
            </p>

            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
              />

              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

      
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-zinc-800 pt-7 text-center text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} StudioSpace.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>

            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
