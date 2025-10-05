'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import ScrambledText from '@/blocks/TextAnimations/ScrambledText/ScrambledText';
// Removed unused import
// import { comma } from 'postcss/lib/list';

const experiences = [
  // ... your experiences array - Keep this array as is
  {
    id: 1,
    title: 'Desain komunikasi visual',
    company: 'Smk N 1 Kapuas Murung',
    year: '2025 - Present',
    description:
      'Memulai perjalanan akademis saya di Smk N 1 Kapuas Murung, jurusan Desain Komunikasi Visual. Program ini telah memberikan saya dasar yang kuat dalam teknologi, desain, dan solusi digital yang mengatasi masalah di dunia nyata.',
    logo: '/exp_logos/smkn1-logo.png',
  },
  {
    id: 2,
    title: ' Desain Batik Kalimantan Tengah',
    company: 'kewirausahaan dan produk kreatif',
    year: '14-09-2025 - 01-10-2025',
    description:
      'Berkontribusi dalam proyek Desain Batik Kalimantan Tengah, di mana saya terlibat dalam proses kreatif dan pengembangan produk. Pengalaman ini memperdalam pemahaman saya tentang desain budaya dan teknik batik tradisional.',
    logo: '/exp_logos/mentahan.jpg',
  },
  {
    id: 3,
    title: 'kunci menuju masa depan',
    company: 'Kesuksessan',
    year: '2024 - sekarang',
    description: `Sebagai siswa SMK kelas XI jurusan DKV, saya mulai tertarik mempelajari pemrograman karena melihat bahwa desain dan teknologi saling berkaitan. Awalnya saya belajar dasar HTML, CSS, dan JavaScript untuk membuat website sederhana berisi hasil karya desain saya, lalu mencoba mengembangkan keterampilan dengan mempelajari React dan Node.js agar desain dapat lebih interaktif. Melalui pengalaman ini, saya menyadari pentingnya kolaborasi antara estetika visual dan logika pemrograman, sekaligus belajar membagi fokus antara keduanya. Tantangan tersebut justru membuat saya semakin disiplin dan yakin bahwa kemampuan desain serta pemrograman dapat menjadi bekal berharga untuk menciptakan karya digital yang fungsional dan menarik di masa depan.`,
    logo: '/exp_logos/kesuksessan.png',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01,
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10"
    >
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
        // Optional: Add will-change property as a hint to the browser (use with caution)
        // className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2 will-change-top"
      />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div
            key={exp.id}
            className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent"
          >
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            {/* Side 1: Title, Company, Year, Logo */}
            <div
              className={`flex flex-col ${
                index % 2 === 0
                  ? 'md:items-end md:text-right'
                  : 'md:items-start md:text-left'
              } ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
            >
              <h3 className="font-bold text-gray-100">
                <ScrambledText
                  className="text-[clamp(18px,2vw,24px)] leading-tight"
                  radius={70}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  {exp.title}
                </ScrambledText>
              </h3>

              <div className="mb-1">
                <ScrambledText
                  className="text-[clamp(14px,1.6vw,18px)] text-cyan-400"
                  radius={50}
                  duration={1}
                  speed={0.4}
                  scrambleChars=".:"
                >
                  {exp.company}
                </ScrambledText>
              </div>

              <span className="mb-2" style={{ letterSpacing: '0.4em' }}>
                <ScrambledText
                  className="text-[clamp(12px,1.5vw,18px)] text-gray-400"
                  radius={40}
                  duration={1}
                  speed={0.4}
                  scrambleChars=".:"
                >
                  {exp.year}
                </ScrambledText>
              </span>

              <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
            </div>

            {/* Side 2: Description */}
            <div
              className={`text-gray-300 ${
                index % 2 !== 0 ? 'md:text-right' : 'text-left'
              } ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
            >
              <ScrambledText
                className="text-[clamp(12px,1.8vw,18px)] leading-relaxed"
                radius={70}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                {exp.description}
              </ScrambledText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
