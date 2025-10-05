// src/app/Hackathons.tsx

'use client';

import React from 'react';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import FallingText from '@/blocks/TextAnimations/FallingText/FallingText';
import Threads from '@/blocks/Backgrounds/Threads/Threads';
import HackathonEntry from './HackathonEntry';
import CircularGallery from '@/blocks/Components/CircularGallery/CircullarGallery';
import TextPressure from '@/blocks/TextAnimations/TextPressure/TextPressure';

const handleAnimationComplete = () => {
  console.log('Hackathon page animation completed!');
};

// Define your hackathon entry data
const hackathonEntriesData = [
  {
    entryNumber: '01',
    title: 'Weather App',
    // award: '3rd Place',
    description:
      'Aplikasi cuaca (weather app) adalah sebuah program perangkat lunak di ponsel pintar, Tujuan utama dari aplikasi cuaca adalah untuk membantu pengguna merencanakan aktivitas sehari-hari—mulai dari memilih pakaian yang tepat, menjadwalkan acara di luar ruangan, hingga memberikan peringatan dini terhadap kondisi cuaca ekstrem seperti badai atau gelombang panas.',
    imageSrc: '/proj/projectOne.svg', // Replace with the actual image path
    projectLink: 'https://hanbii-rubii.github.io/Weather-App/', // <-- Add the link for Procrash
    trophyType: 'third', // Specify the trophy type
    techStackIcons: [
      // <-- Add paths to tech stack icons for Procrash
      '/techstack/javascript.svg',
    ],
  },
  {
    entryNumber: '02',
    title: 'Generator tipografi',
    // award: 'Special Award',
    description:
      'Generator tipografi (typography generator) adalah alat bantu, yang berfungsi untuk membantu desainer dan developer membuat serta menguji coba kombinasi font dan tata letak teks agar terlihat serasi dan mudah dibaca.',
    imageSrc: '/proj/projectTwo.svg', // Replace with the actual image path
    projectLink: 'https://hanbii-rubii.github.io/hanbii-Tipografi/', // <-- Add the link for Talento
    trophyType: 'special', // Specify the trophy type
    techStackIcons: [
      // <-- Add paths to tech stack icons for Talento
      '/techstack/javascript.svg',
      '/techstack/tailwind.svg',
    ],
  },
  {
    entryNumber: '03',
    title: 'Rendem Voucer',
    // award: '4th Place',
    description:
      'Redeem voucher (atau tebus voucer) adalah tindakan menggunakan atau menukarkan sebuah voucer yang berisi kode unik untuk mendapatkan manfaat tertentu, seperti diskon, barang gratis, atau keuntungan lainnya.',
    imageSrc: '/proj/projectThree.svg', // Replace with the actual image path
    projectLink: 'https://hanbii-rubii.github.io/Rendem_voucer/', // <-- Add the link for KachingKo
    trophyType: 'participant', // Specify the trophy type (using participant as a placeholder for 4th)
    techStackIcons: [
      // <-- Add paths to tech stack icons for KachingKo
      '/techstack/tailwind.svg',
      '/techstack/javascript.svg',

    ],
  },
];

export default function Hackathons() {
  return (
    <>
      {/* Main content area for Hackathons */}

      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        {/* Make this hidden on mobile */}
        {/* Added responsive hidden class */}

        <div
          className="hidden md:block"
          style={{
            width: '100%',
            height: '600px',
            position: 'absolute',
            top: '0',
            zIndex: -1,
            opacity: 0.5,
          }}
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Hackathon Entries Section */}
        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Archives"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center"
          />
        </div>

        {/* Larger CircularGallery Container */}
        <div
          className="w-full max-w-8xl mx-auto px-4"
          style={{ height: '600px' }}
        >
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.1} />
        </div>

        {/* <RollingGallery /> */}

        {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20">
          {' '}
          {/* Changed p-15 to p-4 */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block">
            <FallingText
              text={`Sebagai pengembang web dan seluler, saya fokus membangun pengalaman digital yang kreatif. Baik itu membuat situs web responsif, antarmuka seluler, maupun animasi UI eksperimental, saya senang mengubah ide menjadi solusi fungsional dan estetis.`}
              highlightWords={[
                'web',
                'seluler',
                'pengembang',
                'digital',
                'responsif',
                'antarmuka',
                'UI',
                'estetika',
                'solusi',
              ]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
          {/* Falling Text for Mobile */}
          {/* Adjusted margin bottom */}
          <div className="md:hidden mb-10">
            {' '}
            {/* Changed mb-25 to mb-10 for smaller mobile margin */}
            <FallingText
              text={`Selain menjadi pengembang dan kreator konten, saya senang mengerjakan proyek sampingan dan mengeksplorasi ide-ide kreatif melalui teknologi. Ini adalah cara yang bagus untuk terus belajar, memecahkan masalah dunia nyata, dan terhubung dengan orang lain yang memiliki minat yang sama. Berikut beberapa proyek yang pernah saya kerjakan:`}
              highlightWords={[
                'proyek sampingan',
                'kreatif',
                'masalah',
                'gairah',
                'proyek',
              ]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
          {/* Render Hackathon Entries */}
          {/* Adjusted margin top for responsiveness */}
          <div className="mt-20 md:mt-40">
            <TextPressure
              text="Proyek Saya"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />{' '}
            {/* Adjusted margin top */}
            {hackathonEntriesData.map((entry, index) => (
              <HackathonEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                // award={entry.award}
                description={entry.description}
                imageSrc={entry.imageSrc}
                projectLink={entry.projectLink} // Pass the project link
                trophyType={entry.trophyType} // Pass the trophy type
                techStackIcons={entry.techStackIcons} // Pass the tech stack icons array
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>
          &copy; {new Date().getFullYear()} Rubii. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
