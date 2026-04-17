"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SVGClient } from "../shared";

const Footer = () => {
  const pathname = usePathname();

  const isActiveLink = (url: string) => {
    if (!url) return false;
    return pathname === url || pathname.startsWith(url + "/");
  };

  const isAbsoluteUrl = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const renderLink = (link: { label: string; url: string }) => {
    if (!link.url) {
      return (
        <span className="text-gray-400 cursor-not-allowed">{link.label}</span>
      );
    }

    const isActive = isActiveLink(link.url);
    const baseClasses = "transition-colors block";
    const activeClasses = isActive
      ? "text-blue-600 font-medium"
      : "text-black hover:text-blue-600";

    if (isAbsoluteUrl(link.url)) {
      return (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${activeClasses}`}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link href={link.url} className={`${baseClasses} ${activeClasses}`}>
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="px-6 lg:px-20 bg-[url(/images/texture-bg-full.png)] bg-[#0A74EF33] bg-blend-overlay bg-center bg-cover pt-20 md:pt-30">
      <div className="max-w-350 mx-auto border border-b-0 border-[#0A74EF33] py-6 px-2 md:p-6 lg:p-[2.5rem_2.5rem_3.125rem_2.5rem] rounded-t-[1.25rem]">
        <div className="flex flex-col lg:flex-row items-start justify-between pb-10 lg:pb-15 border-b-[1.2px] border-[#0A74EF33] gap-8 lg:gap-0">
          <div className="mx-auto lg:min-w-90 lg:mx-0">
            <SVGClient className="hidden md:block" src="/svg/wid-logo-2.svg" />
            <SVGClient className="md:hidden" src="/svg/wid-logo-4.svg" />
          </div>
          <div className="flex-1 lg:pt-6 flex-row w-full flex justify-around md:justify-between">
            {[
              {
                title: "Summit",
                links: [
                  { label: "Speakers", url: "/2026/speakers" },
                  { label: "Schedule", url: "" },
                  { label: "Register", url: "?register=true" },
                ],
              },
              {
                title: "Get Involved",
                links: [
                  {
                    label: "Become a Sponsor",
                    url: "https://drive.google.com/file/d/1v3qNuBCze0xZtmDwomDu5-tkL23BGye_/view?usp=drivesdk",
                  },

                  {
                    label: "Volunteer",
                    url: "https://forms.gle/Bm8fu4BYkGcPQn917",
                  },
                ],
              },
              {
                title: "About WID",
                links: [
                  { label: "About Us", url: "https://womenindefi.org/about" },
                  {
                    label: "Our Programs",
                    url: "https://womenindefi.org/programs/academy",
                  },
                  { label: "Contact Us", url: "mailto:info@womenindefi.org" },
                ],
              },
            ].map((section, sectionIndex) => (
              <div key={sectionIndex} className="text-center lg:text-left">
                <h3 className="font-semibold text-[0.875rem] md:text-[1.25rem] mb-3 text-black">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {section.links.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      className="text-[0.625rem] md:text-[1rem]"
                    >
                      {renderLink(link)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-5 relative w-full flex flex-col lg:flex-row gap-6 lg:gap-0 items-center">
          <span className="flex gap-1 text-[0.625rem] md:text-[1rem] font-normal text-black items-center w-fit mx-auto order-2 lg:order-1">
            <Icon
              color="#141B340"
              height="0.75rem"
              width="0.75rem"
              icon="hugeicons:copyright"
              className="lg:w-6 lg:h-6"
            />
            {new Date().getFullYear()} Women In DeFi. All Rights Reserved
          </span>
          <div className="lg:absolute lg:bottom-0 flex gap-4 lg:gap-6 items-center lg:right-0 order-1 lg:order-2">
            {[
              {
                url: "https://twitter.com/womenindefi_org",
                icon: "hugeicons:new-twitter-rectangle",
              },
              {
                url: "https://www.instagram.com/womenindefi_org/",
                icon: "hugeicons:instagram",
              },
              {
                url: "https://www.linkedin.com/company/womenindefi/",
                icon: "hugeicons:linkedin-01",
              },
              {
                url: "https://youtube.com/@womenindefi_org",
                icon: "hugeicons:youtube",
              },
              {
                url: "https://www.facebook.com/womenindefi",
                icon: "hugeicons:facebook-01",
              },
              { url: "mailto:info@womenindefi.org", icon: "hugeicons:mail-01" },
            ]?.map((socials, index) => (
              <a
                key={`__social__link__${index}`}
                href={socials?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Icon
                  icon={socials?.icon}
                  height="0.75rem"
                  width="0.75rem"
                  color="#0A74EF"
                  className="md:w-6 md:h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
