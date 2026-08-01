import {FC, memo, useState} from 'react';

import {certifications, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section
      className="relative py-20 overflow-hidden"
      sectionId={SectionId.Certifications}
    >
      {/* Background Image */}
      <img
        alt="Certifications background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/images/certifications/header-background.webp"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mb-16 text-center text-3xl font-bold text-white">
          Certifications
        </h2>

        <div className="mx-auto flex w-full max-w-6xl snap-x snap-mandatory gap-8 overflow-x-auto overflow-y-hidden py-6 pb-8 scroll-p-1/2 scroll-px-4 md:gap-10 lg:gap-12">
          {certifications.map((cert, index) => {
            const isActive = activeIndex === index;

            return (
                <div
                  className="flex flex-none flex-col items-center justify-center gap-4 snap-start animate-fadeUp"
                  key={cert.platform}
                  style={{animationDelay: `${index * 150}ms`, minWidth: '120px'}}
                >
                <button
                  className={`
                    relative flex h-32 w-32 items-center justify-center
                    rounded-2xl border-2 bg-neutral-800/50 p-4
                    transition-all duration-500 ease-out
                    hover:scale-105 hover:-translate-y-1
                    ${isActive ? 'scale-110 -translate-y-2 border-orange-400 shadow-lg shadow-orange-500/40' : 'border-neutral-600 hover:border-neutral-400'}
                  `}
                  onClick={() => handleClick(cert.certificates[0])}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  title={cert.platform}
                >
                  <img
                    alt={cert.platform}
                    className={`h-16 w-20 max-h-full max-w-full object-contain transition-all duration-500 ${
                      isActive ? 'drop-shadow-lg' : 'brightness-90'
                    }`}
                    src={cert.logo}
                  />
                </button>

                <h3
                  className={`text-center text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {cert.platform}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
