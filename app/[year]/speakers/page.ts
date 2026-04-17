import { CURRENT_YEAR } from "@/config";
import Speakers from "./Speakers";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: `Summit ${CURRENT_YEAR} | Speakers`,
  description: 'Speakers for the Women in DeFi Summit 2026',
  keywords: ['Women in DeFi Summit 2026', 'Speakers', 'Women in DeFi'],
  authors: [{ name: 'Women in DeFi', url: 'https://womenindefi.org' }],
  creator: 'Women in DeFi',
  publisher: 'Women in DeFi',
  robots: {
    index: true,
    follow: true,
  },
};

export default Speakers;
