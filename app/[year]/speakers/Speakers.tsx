/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface Speaker {
  name: string;
  image: string;
  xUrl: string;
  role?: string;
}

const speakers: Speaker[] = [
  {
    name: "Akintola Oluwapelumi",
    role: "Host",
    xUrl: "https://x.com/flame_s__?s=20",
    image: "/images/Akintola.jpg",
  },
  {
    name: "Ayomide Junaid",
    role: "Compliance Officer, OAPay",
    xUrl: "http://x.com/theirregulargal",
    image: "/images/Ayomide-speaker.jpg",
  },
  {
    name: "Jennifer Chinelo Ojiaku",
    role: "Director of Waga Coffee Nigeria",
    xUrl: "https://x.com/OjiakuJennifer?s=20",
    image: "/images/Jennifer.jpeg",
  },
  {
    name: "Favour Nduka",
    role: "Founder, Tennex Academy",
    xUrl: "https://x.com/onlyfayze?s=20",
    image: "/images/Favour.jpeg",
  },
  {
    name: "Faith Njah",
    role: "Software Developer/Technology Advocate, ALGO Coding Experts",
    xUrl: "https://x.com/FaithNjah?s=20",
    image: "/images/Faith-speaker.jpg",
  },
  {
    name: "Progress Ochuko Eyaadah",
    role: "Co-founder, Choppaddi",
    xUrl: "https://x.com/koxy_dev?s=21",
    image: "/images/Progress.jpg",
  },
  {
    name: "Chisom Edwin",
    role: "Founder, Peaches Academy",
    xUrl: "https://x.com/1CryptoMama?s=20",
    image: "/images/Chisom.jpg",
  },
  {
    name: "Toria Dickson",
    role: "Founder, ToriaX | Marketing Agency (Moderator)",
    xUrl: "https://x.com/toria_dickson?s=21",
    image: "/images/Toria.jpg",
  },
  {
    name: "Amarachi Ugwu",
    role: "Co-founder, Digitpay",
    xUrl: "https://x.com/amarachiugwu_?s=20",
    image: "/images/Amarachi-speaker.png",
  },
  {
    name: "Vivian Adeniyi",
    role: "Content Specialist (Moderator)",
    xUrl: "https://x.com/queenxrypt",
    image: "/images/Vivian-Moderator.jpg",
  },
  {
    name: "Ayomide Oluwashinabajo",
    role: "Business developer, VelaFinance",
    xUrl: "https://x.com/ayomide_bajo?s=20",
    image: "/images/Bekka.png",
  },
  {
    name: "Sarah Wahinya",
    role: "Stellar East Africa President",
    xUrl: "https://x.com/SarahWahinya",
    image: "/images/Sarahspeaker-headshot.jpeg",
  },
  {
    name: "Tejumade Tejuoso",
    role: "Governance & Sustainability Manager, Sahara Group",
    xUrl: "#",
    image: "/images/Tejumade.jpg",
  },
  {
    name: "Beatrice Eneje",
    role: "Managing Director, Kora & Hive Communications",
    xUrl: "https://x.com/bibi_eneje?s=20",
    image: "/images/Beatrice-Speaker.jpg",
  },
  {
    name: "Nkechi Enebeli",
    role: "Community Builder",
    xUrl: "https://x.com/__iamcharis?s=20",
    image: "/images/Nkechi.jpg",
  },
  {
    name: "Onone Ega Peace",
    role: "Programs Lead, Women in Defi",
    xUrl: "https://x.com/10x_Ega?s=20",
    image: "/images/Peace.jpg",
  },
  {
    name: "Sarah Idahosa",
    role: "Founder, Women in Defi",
    xUrl: "https://x.com/thesarahidahosa?s=20",
    image: "/images/IMG_20240909_115610_822.jpeg",
  },
  {
    name: "Chidubem Emelumadu",
    role: "Ecosystem Lead (Africa), Lisk",
    xUrl: "https://x.com/chiidubem?s=20",
    image: "/images/Chidubem.jpg",
  },
];

const Speakers = () => {
  return (
    <section className="px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-white py-20 min-h-screen pt-32 md:pt-48">
      <div className="max-w-350 mx-auto">
        <h1 className="text-black font-semibold text-center mb-4 text-[1.5rem] md:text-[3.5rem]">
          Our Speakers
        </h1>
        <p
          className={cn(
            "text-[#666666] text-center max-w-2xl mx-auto mb-12 md:mb-20 text-[1rem] md:text-[1.125rem]",
          )}
        >
          Meet the industry leaders and visionaries who will be sharing their
          insights at the Women in DeFi Summit 2026.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {speakers.map((speaker, index) => {
            const lastRowCount = speakers.length % 4;
            const isFirstOfLastTwo =
              lastRowCount === 2 && index === speakers.length - 2;
            const isSecondOfLastTwo =
              lastRowCount === 2 && index === speakers.length - 1;

            return (
              <div
                key={index}
                className={cn(
                  "group",
                  isFirstOfLastTwo && "lg:col-start-2",
                  isSecondOfLastTwo && "lg:col-start-3",
                )}
              >
                <div className="relative aspect-3/5 overflow-hidden rounded-[1.25rem] mb-4 bg-[#F5F5F5]">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110"
                  />
                </div>
                <Link
                  href={speaker.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-black font-bold text-[1.25rem] md:text-[1.5rem] hover:text-[#0A74EF] transition-colors duration-300">
                    {speaker.name}
                  </h3>
                </Link>
                {speaker.role && (
                  <p
                    className={cn(
                      "text-[#666666] text-[0.875rem] md:text-[1rem]",
                    )}
                  >
                    {speaker.role}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
