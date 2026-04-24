"use client";

import { useState, useEffect } from "react";
import { Button, SVGClient } from "../shared";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (url?: string) => {
    if (url) {
      return pathname === url;
    }
    return false;
  };

  const navItems = [
    {
      name: "Speakers",
      url: "/2026/speakers",
    },
    {
      name: "Volunteer",
      url: "https://forms.gle/Bm8fu4BYkGcPQn917",
    },
    {
      name: "Schedule",
      url: "/2026/schedule",
    },
  ];

  return (
    <header
      style={{ boxShadow: "0 2px 6px 0 rgba(10, 116, 239, 0.12)" }}
      className={cn(
        "bg-[#FFFFFF] lg:rounded-none fixed top-0 w-full px-6 lg:px-20 z-50 transition-all duration-300",
        isMobileMenuOpen ? "rounded-b-[1.25rem]" : "",
      )}
    >
      <div
        className={cn(
          "flex justify-between max-w-350 mx-auto items-center transition-all duration-300",
          isScrolled ? "lg:py-4 py-3" : "py-6 lg:py-12",
        )}
      >
        <Link href={"/2026"}>
          <SVGClient className="hidden md:block" src="/svg/wid-logo.svg" />

          <SVGClient className="md:hidden" src="/svg/wid-logo-3.svg" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <nav className="w-full">
            <ul className="flex gap-3">
              {navItems?.map(({ name, url }, index) => (
                <li className="p-2.5 relative" key={`__nav__item__${index}`}>
                  <Link
                    className={cn(
                      "hover:text-[#0A74EF] transition-colors duration-300 text-[1rem] flex items-center gap-1",
                      isActive(url) ? "text-[#0A74EF]" : "text-[#000000]",
                    )}
                    href={url}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button target="_self" url="?register=true">
            Get Your Ticket
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1 w-fit items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.75 bg-[#0A74EF] rounded-[1.25rem] transition-all duration-300",
              isMobileMenuOpen && "rotate-45 translate-y-1.75",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.75 bg-[#0A74EF] rounded-[1.25rem] transition-all duration-300",
              isMobileMenuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.75 bg-[#0A74EF] rounded-[1.25rem] transition-all duration-300",
              isMobileMenuOpen && "-rotate-45 -translate-y-1.75",
            )}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100"
            : "max-h-0 opacity-0",
        )}
      >
        <ul className="md:px-6 pb-10">
          {navItems?.map(({ name, url }, index) => (
            <li
              key={`__mobile__nav__item__${index}`}
              className="border-b-[.5px] border-[#0A74EF33] last:border-b-0"
            >
              <Link
                className={cn(
                  "block py-5 text-[1rem] transition-colors duration-300",
                  isActive(url)
                    ? "text-[#0A74EF]"
                    : "text-[#000000] hover:text-[#0A74EF]",
                )}
                href={url}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Button
              url="?register=true"
              target="_self"
              className="w-full text-center"
            >
              Register Now
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
