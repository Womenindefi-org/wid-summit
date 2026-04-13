'use client';

import React from 'react';
import { inter } from '@/app/layout';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Speaker {
	name: string;
	image: string;
	xUrl: string;
	role?: string;
}

const speakers: Speaker[] = [
	{
		name: 'Akintola Oluwapelumi',
		role: 'Host',
		xUrl: 'https://x.com/flame_s__?s=20',
		image: '/speakers/Akintola.jpg',
	},
	{
		name: 'Ayomide Junaid',
		role: 'Compliance Officer, OAPay (Speaker)',
		xUrl: 'http://x.com/theirregulargal',
		image: '/speakers/Ayomide-speaker.jpg',
	},
	{
		name: 'Jennifer Chinelo Ojiaku',
		role: 'Director of Waga Coffee Nigeria (Speaker)',
		xUrl: 'https://x.com/OjiakuJennifer?s=20',
		image: '/speakers/Jennifer.jpeg',
	},
	{
		name: 'Favour Nduka',
		role: 'Founder, Tennex Academy (Speaker)',
		xUrl: 'https://x.com/onlyfayze?s=20',
		image: '/speakers/Favour.jpeg',
	},
	{
		name: 'Faith Njah',
		role: 'Software Developer/Technology Advocate, ALGO Coding Experts (Speaker)',
		xUrl: 'https://x.com/FaithNjah?s=20',
		image: '/speakers/Faith-speaker.jpg',

	},
	{
		name: 'Progress Ochuko Eyaadah',
		role: 'Co-founder, Choppaddi (Speaker)',
		xUrl: 'https://x.com/koxy_dev?s=21',
		image: '/speakers/Progress.jpg',
	},
	{
		name: 'Chisom Edwin',
		role: 'Founder, Peaches Academy (Speaker)',
		xUrl: 'https://x.com/1CryptoMama?s=20',
		image: '/speakers/Chisom.jpg',
	},
	{
		name: 'Toria Dickson',
		role: 'Founder, ToriaX | Marketing Agency (Moderator)',
		xUrl: 'https://x.com/toria_dickson?s=21',
		image: '/speakers/Toria.jpg',
	},
	{
		name: 'Amarachi Ugwu',
		role: 'Co-founder, Digitpay (Speaker)',
		xUrl: 'https://x.com/amarachiugwu_?s=20',
		image: '/speakers/Amarachi-speaker.png',
	},
	{
		name: 'Vivian Adeniyi',
		role: 'Content Specialist (Moderator)',
		xUrl: 'https://x.com/queenxrypt',
		image: '/speakers/Vivian-Moderator.jpg',
	},
	{
		name: 'Ayomide Oluwashinabajo',
		role: 'Business developer, VelaFinance (Speaker)',
		xUrl: 'https://x.com/ayomide_bajo?s=20',
		image: '/speakers/Bekka.png',
	},
	{
		name: 'Sarah Wahinya',
		role: 'Stellar East Africa President (Speaker)',
		xUrl: 'https://x.com/SarahWahinya',
		image: '/speakers/Sarahspeaker-headshot.jpeg',
	},
	{
		name: 'Tejumade Tejuoso',
		role: 'Governance & Sustainability Manager, Sahara Group (Speaker)',
		xUrl: '#',
		image: '/speakers/Tejumade.jpg',
	},
	{
		name: 'Beatrice Eneje',
		role: 'Managing Director, Kora & Hive Communications (Speaker)',
		xUrl: 'https://x.com/bibi_eneje?s=20',
		image: '/speakers/Beatrice-Speaker.jpg',
	},
	{
		name: 'Nkechi Enebeli',
		role: 'Community Builder (Speaker)',
		xUrl: 'https://x.com/__iamcharis?s=20',
		image: '/speakers/Nkechi.jpg',
	},
	{
		name: 'Onone Ega Peace',
		role: 'Programs Lead, Women in Defi (Speaker)',
		xUrl: 'https://x.com/10x_Ega?s=20',
		image: '/speakers/Peace.jpg',
	},
	{
		name: 'Sarah Idahosa',
		role: 'Founder, Women in Defi (Speaker)',
		xUrl: 'https://x.com/thesarahidahosa?s=20',
		image: '/speakers/IMG_20240909_115610_822.jpeg',
	},
	{
		name: 'Chidubem Emelumadu',
		role: 'Ecosystem Lead (Africa), Lisk (Speaker)',
		xUrl: 'https://x.com/chiidubem?s=20',
		image: '/speakers/Chidubem.jpg',
	},
];

const Speakers = () => {
	return (
		<section className='px-6 lg:px-20 bg-white py-20 min-h-screen pt-32 md:pt-48'>
			<div className='max-w-350 mx-auto'>
				<h1 className='text-black font-semibold text-center mb-4 text-[1.5rem] md:text-[3.5rem]'>
					Our Speakers
				</h1>
				<p
					className={cn(
						'text-[#666666] text-center max-w-2xl mx-auto mb-12 md:mb-20 text-[1rem] md:text-[1.125rem]',
						inter.className,
					)}
				>
					Meet the industry leaders and visionaries who will be sharing their
					insights at the Women in DeFi Summit 2026.
				</p>

				{speakers.length > 0 ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
						{speakers.map((speaker, index) => (
							<div
								key={index}
								className='group'
							>
								<div className='relative aspect-3/5 overflow-hidden rounded-[1.25rem] mb-4 bg-[#F5F5F5]'>
									<img
										src={speaker.image}
										alt={speaker.name}
										className='w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110'
									/>
								</div>
								<Link
									href={speaker.xUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='block'
								>
									<h3 className='text-black font-bold text-[1.25rem] md:text-[1.5rem] hover:text-[#0A74EF] transition-colors duration-300'>
										{speaker.name}
									</h3>
								</Link>
								{speaker.role && (
									<p className={cn('text-[#666666] text-[0.875rem] md:text-[1rem]', inter.className)}>
										{speaker.role}
									</p>
								)}
							</div>
						))}
					</div>
				) : (
					<div className='text-center py-20 bg-[#F9FAFB] rounded-[1.25rem] border-2 border-dashed border-[#E5E7EB]'>
						<p className={cn('text-[#666666] text-[1.125rem]', inter.className)}>
							Speakers will be announced soon. Stay tuned!
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default Speakers;
