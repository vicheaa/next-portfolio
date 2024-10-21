import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { FaLaravel, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma, SiLumen, SiPhp, SiNestjs} from 'react-icons/si';

export default function TechnologiesSection() {
  const technologies = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'PHP', icon: <SiPhp /> }, // You can use another icon for PHP
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'SQL', icon: <FaDatabase /> }, // You can choose an appropriate SQL icon
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'Lumen', icon: <SiLumen /> }, // You can choose a different icon for Lumen
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Nest.js', icon: <SiNestjs /> },
    { name: 'Prisma', icon: <SiPrisma /> },
  ];

  return (
    <>
      <SectionTitle>Technology</SectionTitle>
      <div
        className="w-full overflow-x-hidden pt-10"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          className="flex space-x-4 w-max animate-scroll"
          style={{
            animation: 'scroll 50s linear infinite',
            animationPlayState: 'running', // Default state
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused'; // Pause on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running'; // Resume when hover ends
          }}
        >
          {technologies.concat(technologies).map((tech, index) => (
            <div
              key={index}
              className="px-6 whitespace-nowrap flex-shrink-0 flex flex-col items-center"
            >
              <div className="text-2xl">{tech.icon}</div>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </>
  );
}
