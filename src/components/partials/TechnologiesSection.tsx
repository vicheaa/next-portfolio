import React from 'react';
import SectionTitle from '../shared/SectionTitle';

export default function TechnologiesSection() {
  const technologies = [
    'HTML',
    'CSS',
    'PHP',
    'JavaScript',
    'TypeScript',
    'React',
    'SQL',
    'Next.js',
    'Node.js',
    'Laravel',
    'Lumen',
    'Tailwind CSS',
    'Prisma',
  ];

  return (
    <>
      <SectionTitle>Technology</SectionTitle>
      <div
        className="w-full overflow-x-hidden py-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          className="flex space-x-4 w-max animate-scroll" 
          style={{
            animation: 'scroll 20s linear infinite',
          }}
        >
          {technologies.concat(technologies).map((tech, index) => (
            <div
              key={index}
              className="px-6 py-2 rounded-lg shadow-sm whitespace-nowrap flex-shrink-0"
            >
              {tech}
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
          animation: scroll 20s linear infinite;
        }

        /* Pause the animation when the container is hovered */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
