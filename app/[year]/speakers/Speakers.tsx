"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SPEAKER_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

interface Speaker {
  name: string;
  image: string;
  xUrl: string;
  role?: string;
  imageClassName?: string;
}

const speakers: Speaker[] = [
  {
    name: "Sarah Idahosa",
    role: "Founder, Women in Defi",
    xUrl: "https://x.com/thesarahidahosa?s=20",
    image: "/images/Sarah Idahosa.jpg",
  },
  {
    name: "Onone Ega Peace",
    role: "Programs Lead, Women in Defi",
    xUrl: "https://x.com/10x_Ega?s=20",
    image: "/images/Peace.JPG",
  },
  {
    name: "Progress Ochuko Eyaadah",
    role: "Co-founder, Choppaddi",
    xUrl: "https://x.com/koxy_dev?s=21",
    image: "/images/Progress.JPG",
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
    name: "Dr. Eloho Erezi-Kesi",
    role: "Global Ambassador, ZCash",
    xUrl: "#",
    image: "/images/Dr. Eloho Erezi-Kesi.JPG",
  },
  {
    name: "Ayomide Junaid",
    role: "Head of Legal, Verde Fields",
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
    name: "Ivy Elebesunu",
    role: "Content Strategist",
    xUrl: "https://www.linkedin.com/in/ivyelebesunu",
    image: "/images/Ivy Elebesunu.JPEG",
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
    name: "Sarah Wahinya",
    role: "Stellar East Africa President",
    xUrl: "https://x.com/SarahWahinya",
    image: "/images/Sarahspeaker-headshot.jpeg",
  },
  {
    name: "Chisom Edwin",
    role: "Founder, Peaches Academy",
    xUrl: "https://x.com/1CryptoMama?s=20",
    image: "/images/Chisom.jpg",
    imageClassName: "scale-[1.35]",
  },
  {
    name: "Toria Dickson",
    role: "Founder, ToriaX | Marketing Agency",
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
    role: "Content Specialist",
    xUrl: "https://x.com/queenxrypt",
    image: "/images/Vivian-Moderator.jpg",
  },
  {
    name: "Ayomide Oluwashinabajo",
    role: "Business developer, VelaFinance",
    xUrl: "https://x.com/ayomide_bajo?s=20",
    image: "/images/Bekka.JPG",
  },
  {
    name: "Amara Achusi",
    role: "CoFounder, TulayLabs",
    xUrl: "https://x.com/TheMarablossom",
    image: "/images/Amara.JPG",
  },
  {
    name: "Chidubem Emelumadu",
    role: "Ecosystem Lead (Africa), Lisk",
    xUrl: "https://x.com/chiidubem?s=20",
    image: "/images/Chidubem.jpg",
  },
  {
    name: "Giwa Sheedah",
    role: "Founder CTNG House",
    xUrl: "https://x.com/qingthecreator_",
    image: "/images/Giwa Sheedah.JPEG",
  },
  {
    name: "Yewande Abiodun",
    role: "SW Nigeria Growth Lead, Base",
    xUrl: "https://x.com/lionessatease",
    image: "/images/Yewande.JPEG",
  },
  {
    name: "Akintola Oluwapelumi",
    role: "Event Host",
    xUrl: "https://x.com/flame_s__?s=20",
    image: "/images/Akintola.jpg",
  },
  {
    name: "Simbiat Lawal",
    role: "Red Carpet Host",
    xUrl: "https://www.linkedin.com/in/simbiat-lawal-93a819281",
    image: "/images/Simbiat Lawal.JPEG",
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
                <div className="relative aspect-4/5 overflow-hidden rounded-[1.25rem] mb-4 bg-[#F5F5F5]">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes={SPEAKER_IMAGE_SIZES}
                    quality={85}
                    className={cn(
                      "object-cover object-top transition-transform duration-500 scale-100 group-hover:scale-110",
                      speaker.imageClassName,
                    )}
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
