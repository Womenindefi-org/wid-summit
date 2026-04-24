"use client";

import { useState } from "react";

type SessionType =
  | "registration"
  | "keynote"
  | "panel"
  | "lightning"
  | "fireside"
  | "sponsor"
  | "break"
  | "games"
  | "spotlight"
  | "award"
  | "closing"
  | "welcome"
  | "engagement"
  | "stories"
  | "photo";

interface Speaker {
  name: string;
  role?: string;
}

interface Session {
  id: string;
  time: string;
  endTime?: string;
  title: string;
  description?: string;
  type: SessionType;
  speakers?: Speaker[];
  tag?: string;
  hashtag?: string;
}

const sessions: Session[] = [
  // Registration block kept as-is (pre-event, 8:45–9:30)
  {
    id: "s1",
    time: "8:45 AM",
    endTime: "9:30 AM",
    title: "Registration & Arrival",
    type: "registration",
    tag: "Registration",
  },
  // 10:00 - 10:05 AM — WID Stories Spotlight
  {
    id: "s2",
    time: "10:00 AM",
    endTime: "10:05 AM",
    title: "WID Stories Spotlight",
    description:
      "Live video storytelling segment — WID women share narratives on their journey: how they started, what they do now, what they've done, and where they're headed.",
    type: "stories",
    speakers: [{ name: "Media" }],
    tag: "Spotlight",
  },
  // 10:05 - 10:10 AM — Welcome Address
  {
    id: "s3",
    time: "10:05 AM",
    endTime: "10:10 AM",
    title: "Welcome Address: We Have Crossed the Bridge — Now What?",
    type: "welcome",
    speakers: [{ name: "Peace Ega", role: "Programs Manager" }],
    tag: "Opening",
  },
  // 10:10 - 10:20 AM — Audience Engagement / Ice Breaker
  {
    id: "s4",
    time: "10:10 AM",
    endTime: "10:20 AM",
    title: "Ice Breaker",
    type: "engagement",
    speakers: [
      { name: "Flames", role: "Host" },
      { name: "Simbiat Lawal", role: "Interviewer" },
      { name: "Qingthecreator", role: "Interviewer" },
    ],
    tag: "Audience Engagement",
  },
  // 10:20 - 10:30 AM — Lightning Talk 1
  {
    id: "s5",
    time: "10:20 AM",
    endTime: "10:30 AM",
    title: "Personal Branding for Women in Tech & Web3",
    type: "lightning",
    speakers: [{ name: "Bibi Eneje" }],
    tag: "Lightning Talk",
  },
  // 10:32 - 10:55 AM — Keynote
  {
    id: "s6",
    time: "10:32 AM",
    endTime: "10:55 AM",
    title: "Redefining Leadership for African Women: From Participation to Power",
    description:
      "Setting the tone for the day. A powerful address on what it means to lead, build, and belong in African Web3.",
    type: "keynote",
    speakers: [{ name: "Tejumade Tejuosho" }],
    tag: "Keynote",
  },
  // 10:55 - 11:40 AM — Panel Session 1
  {
    id: "s7",
    time: "10:55 AM",
    endTime: "11:40 AM",
    title: "Stablecoins, Tokenisation & Financial Innovation for African Women",
    type: "panel",
    speakers: [
      { name: "Blessing F. Nduka" },
      { name: "Jennifer Sarah Wahinya" },
      { name: "Vivian Adeniyi", role: "Moderator" },
    ],
    tag: "Panel Session 1",
  },
  // 11:42 - 11:52 AM — Gold Sponsor Showcase
  {
    id: "s8",
    time: "11:42 AM",
    endTime: "11:52 AM",
    title: "Sponsor Showcase & Open Floor",
    description: "Ecosystem partner, protocols, presentation.",
    type: "sponsor",
    speakers: [{ name: "Zcash" }],
    tag: "Gold Sponsor",
  },
  // ~3 min — Audience Photo Selfie
  {
    id: "s9",
    time: "11:52 AM",
    endTime: "11:55 AM",
    title: "Audience Photo Selfie",
    type: "photo",
    speakers: [{ name: "Flames", role: "Host" }],
    hashtag: "#WIDSummit2026",
    tag: "Community",
  },
  // 11:55 AM - 12:40 PM — Panel Session 2 (Bronze Sponsor Showcase moved before it per new schedule)
  // Bronze Sponsor Showcase comes right after photo per the new schedule text
  {
    id: "s10b",
    time: "11:55 AM",
    endTime: "12:05 PM",
    title: "Sponsor Showcase & Open Floor",
    description: "Ecosystem partner, protocols, presentation.",
    type: "sponsor",
    speakers: [{ name: "TS Academy" }],
    tag: "Bronze Sponsor",
  },
  {
    id: "s10",
    time: "12:05 PM",
    endTime: "12:40 PM",
    title: "Funding, Founding & the Female Factor in DeFi & Blockchain",
    type: "panel",
    speakers: [
      { name: "Mary Cynthia Amarachi" },
      { name: "Mrs Chisom Edwin", role: "Crypto Mama" },
      { name: "Chidubem Emelimadu" },
      { name: "Progress Ochuko (Koxy)" },
      { name: "Ivy", role: "Moderator" },
    ],
    tag: "Panel Session 2",
  },
  // 12:42 - 1:23 PM — Founder's Fireside Chat
  {
    id: "s12",
    time: "12:42 PM",
    endTime: "1:23 PM",
    title: "The Blueprint: A Candid Conversation on Community & Leadership",
    type: "fireside",
    speakers: [
      { name: "Sarah Idahosa" },
      { name: "Peace Ega", role: "Moderator" },
    ],
    tag: "Founder's Fireside",
  },
  // 1:25 - 1:35 PM — Lightning Talk 2
  {
    id: "s11",
    time: "1:25 PM",
    endTime: "1:35 PM",
    title: "AI x Web3: The Next Frontier for African Women in Technology",
    type: "lightning",
    speakers: [{ name: "Faith Njah" }],
    tag: "Lightning Talk",
  },
  // 1:37 - 1:45 PM — Bronze Sponsor Showcase
  {
    id: "s13",
    time: "1:37 PM",
    endTime: "1:45 PM",
    title: "Sponsor Showcase & Open Floor",
    description: "Ecosystem partner, protocols, presentation.",
    type: "sponsor",
    speakers: [{ name: "Betaling Africa" }],
    tag: "Bronze Sponsor",
  },
  // 1:45 - 1:55 PM — Partner Spotlight
  {
    id: "s21",
    time: "1:45 PM",
    endTime: "1:55 PM",
    title: "Partner Spotlight",
    type: "spotlight",
    speakers: [{ name: "Roqqu" }],
    tag: "Partner",
  },
  // 1:55 - 2:15 PM — Break / Networking
  {
    id: "s14",
    time: "1:55 PM",
    endTime: "2:15 PM",
    title: "Lunch Break & Community Networking",
    description:
      "Lunch, community wall, partner booths & informal mentorship circles.",
    type: "break",
    tag: "Break",
  },
  // 2:15 - 2:30 PM — Games Session
  {
    id: "s15",
    time: "2:15 PM",
    endTime: "2:30 PM",
    title: "Games Session",
    description: "Fun partner-powered games with prizes and giveaways.",
    type: "games",
    speakers: [{ name: "Faucet Drops", role: "Partners" }],
    tag: "Games",
  },
  // 2:32 - 2:40 PM — Lightning Talk 4
  {
    id: "s17",
    time: "2:32 PM",
    endTime: "2:40 PM",
    title: "What to Know About Crypto Compliance in Africa",
    type: "lightning",
    speakers: [{ name: "Ayomide Junaid" }],
    tag: "Lightning Talk",
  },
  // 2:42 - 2:52 PM — Bronze Sponsor Showcase
  {
    id: "s16",
    time: "2:42 PM",
    endTime: "2:52 PM",
    title: "Sponsor Showcase & Open Floor",
    description: "Ecosystem partner, protocols, presentation.",
    type: "sponsor",
    speakers: [{ name: "Turing Bitchain" }],
    tag: "Bronze Sponsor",
  },
  // 2:55 - 3:40 PM — Panel Session 3
  {
    id: "s19",
    time: "2:55 PM",
    endTime: "3:40 PM",
    title: "From Skill to Stack: Transitioning Into Web3 as a Builder",
    type: "panel",
    speakers: [
      { name: "Dr Eloho Achusi" },
      { name: "Amara Yewande" },
      { name: "Ayomide (Bekka)" },
      { name: "Toria Dickson", role: "Moderator" },
    ],
    tag: "Panel Session 3",
  },
  // 3:42 - 3:52 PM — Lightning Talk 3
  {
    id: "s20",
    time: "3:42 PM",
    endTime: "3:52 PM",
    title: "UNICEF NextGen Builders: Preparing African Women to Lead the Web3 Revolution",
    type: "lightning",
    speakers: [{ name: "Silvia", role: "UNICEF Rep" }],
    tag: "Lightning Talk",
  },
  // 4:05 - 4:10 PM — Partner Spotlight
  {
    id: "s22",
    time: "4:05 PM",
    endTime: "4:10 PM",
    title: "Partner Spotlight",
    type: "spotlight",
    speakers: [{ name: "Orbit Pay X" }],
    tag: "Partner",
  },
  // 4:10 - 4:15 PM — Community / Partners Spotlight
  {
    id: "s23",
    time: "4:10 PM",
    endTime: "4:15 PM",
    title: "Community & Partners Recognition",
    description: "Community and partner recognition and shout-outs.",
    type: "spotlight",
    speakers: [
      { name: "Teen Girls In Blockchain" },
      { name: "HerDAO" },
      { name: "TGM Web3 Institute" },
      { name: "Tulay Labs" },
      { name: "Web3 Bridge" },
      { name: "Web3 Afrika" },
      { name: "LASU Tech" },
      { name: "Avalanche Team 1" },
      { name: "Dev3 Pack" },
      { name: "TCN", role: "Media Partner" },
    ],
    tag: "Community",
  },
  // 4:15 - 4:20 PM — Partner Spotlight
  {
    id: "s24",
    time: "4:15 PM",
    endTime: "4:20 PM",
    title: "Partner Spotlight",
    type: "spotlight",
    speakers: [{ name: "Fhenix" }],
    tag: "Partner",
  },
  // 4:22 - 4:45 PM — Laptop Scholarship & Group Photo
  {
    id: "s25",
    time: "4:22 PM",
    endTime: "4:45 PM",
    title: "Laptop Scholarship & Group Photo",
    description: "Work tool awards, group photography.",
    type: "award",
    speakers: [{ name: "Sarah Idahosa", role: "WID Founder" }],
    tag: "Award",
  },
  // 4:50 - 5:00 PM — Closing Remarks
  {
    id: "s26",
    time: "4:50 PM",
    endTime: "5:00 PM",
    title: "Closing Remarks",
    description:
      "A rallying, celebratory close honouring the women in the room and issuing a bold call to collective action.",
    type: "closing",
    speakers: [{ name: "Sarah Idahosa", role: "WID Founder" }],
    tag: "Closing",
  },
];

const tagConfig: Record<
  SessionType,
  { label: string; color: string; bg: string; border: string }
> = {
  registration: {
    label: "Registration",
    color: "#6B7280",
    bg: "#F3F4F6",
    border: "#D1D5DB",
  },
  keynote: {
    label: "Keynote",
    color: "#0A74EF",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  panel: {
    label: "Panel",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  lightning: {
    label: "Lightning",
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  fireside: {
    label: "Fireside",
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
  },
  sponsor: {
    label: "Sponsor",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
  break: {
    label: "Break",
    color: "#6B7280",
    bg: "#F9FAFB",
    border: "#E5E7EB",
  },
  games: {
    label: "Games",
    color: "#DB2777",
    bg: "#FDF2F8",
    border: "#FBCFE8",
  },
  spotlight: {
    label: "Spotlight",
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  award: {
    label: "Award",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FCD34D",
  },
  closing: {
    label: "Closing",
    color: "#0A74EF",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  welcome: {
    label: "Opening",
    color: "#0A74EF",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  engagement: {
    label: "Engagement",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  stories: {
    label: "Stories",
    color: "#DB2777",
    bg: "#FDF2F8",
    border: "#FBCFE8",
  },
  photo: {
    label: "Community",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
};

function getDuration(start: string, end?: string): number | null {
  if (!end) return null;
  const parse = (t: string) => {
    const [time, period] = t.split(" ");
    const [h, m] = time.split(":").map(Number);
    let hours = h;
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return hours * 60 + m;
  };
  return parse(end) - parse(start);
}

export default function SchedulePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <main className="min-h-screen bg-white mt-[80px] md:mt-[110px] lg:mt-[160px]">
      {/* Hero banner */}
      <section
        className="px-6 lg:px-10 py-16 md:py-24 text-center"
        style={{
          backgroundImage: "url(/images/texture-bg-full.png)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0A74EF",
        }}
      >
        <p className="text-white/70 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          WID Summit 2026
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-3">
          Event Schedule
        </h1>
        <p className="text-white/80 text-sm md:text-base flex items-center justify-center gap-2">
          <CalendarIcon />
          Saturday, April 25, 2026 &nbsp;·&nbsp; Main Stage
        </p>
      </section>

      {/* Schedule list */}
      <section className="px-6 lg:px-10 py-12 md:py-16 max-w-3xl mx-auto">
        <ul className="flex flex-col gap-3 list-none p-0 m-0">
          {sessions.map((session) => {
            const cfg = tagConfig[session.type];
            const duration = getDuration(session.time, session.endTime);
            const isOpen = expanded === session.id;

            return (
              <li key={session.id}>
                <button
                  onClick={() => toggle(session.id)}
                  className="w-full text-left rounded-xl border transition-all duration-200"
                  style={{
                    background: isOpen ? cfg.bg : "#FAFAFA",
                    border: `1px solid ${isOpen ? cfg.border : "#E5E7EB"}`,
                    padding: "1rem 1.25rem",
                    cursor: "pointer",
                    color: "inherit",
                    boxShadow: isOpen
                      ? "0 4px 16px rgba(0,0,0,0.06)"
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Time row */}
                  <div className="flex items-center gap-3 mb-2 text-gray-400 text-xs">
                    <span className="flex items-center gap-1">
                      <ClockIcon />
                      {session.time}
                      {session.endTime && ` – ${session.endTime}`}
                    </span>
                    <span className="flex items-center gap-1">
                      <LocationIcon />
                      Main Stage
                    </span>
                  </div>

                  {/* Title */}
                  <p className="font-semibold text-[0.95rem] text-gray-900 mb-2 leading-snug">
                    {session.title}
                  </p>

                  {/* Tag + duration */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        color: cfg.color,
                        background: cfg.bg,
                        border: `1px solid ${cfg.border}`,
                      }}
                    >
                      {session.tag || cfg.label}
                    </span>
                    {duration !== null && duration > 0 && (
                      <span className="text-[0.72rem] text-gray-400">
                        {duration} min
                      </span>
                    )}
                    {session.hashtag && (
                      <span
                        className="text-[0.7rem] font-medium"
                        style={{ color: "#0A74EF" }}
                      >
                        {session.hashtag}
                      </span>
                    )}
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      {session.description && (
                        <p className="text-[0.83rem] text-gray-500 leading-relaxed mb-3">
                          {session.description}
                        </p>
                      )}
                      {session.speakers && session.speakers.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {session.speakers.map((sp, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 text-[0.75rem] text-gray-700 px-3 py-1 rounded-full border border-gray-200 bg-white"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: cfg.color }}
                              />
                              <span className="font-medium">{sp.name}</span>
                              {sp.role && (
                                <span className="text-gray-400">
                                  · {sp.role}
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
