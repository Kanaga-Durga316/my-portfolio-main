import {FC, memo, useState} from 'react';

import {certifications, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const platformGradients: Record<string, string> = {
    'Coursera': 'from-blue-500/20 to-blue-600/10 border-blue-400/50 shadow-blue-500/30',
    'Infosys': 'from-emerald-500/20 to-emerald-600/10 border-emerald-400/50 shadow-emerald-500/30',
    'NPTEL': 'from-orange-500/20 to-orange-600/10 border-orange-400/50 shadow-orange-500/30',
    'Udemy': 'from-purple-500/20 to-purple-600/10 border-purple-400/50 shadow-purple-500/30',
    'Guvi': 'from-cyan-500/20 to-cyan-600/10 border-cyan-400/50 shadow-cyan-500/30',
    'Certificate': 'from-amber-500/20 to-amber-600/10 border-amber-400/50 shadow-amber-500/30',
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

        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
          {certifications.map((cert, index) => {
            const isActive = activeIndex === index;
            const gradient = platformGradients[cert.platform] || 'from-orange-500/20 to-orange-600/10 border-orange-400/50 shadow-orange-500/30';
            const glowColor = gradient.split(' ')[1].replace('to-', '').replace('/10', '').replace('/20', '');

            return (
              <div
                className="group relative"
                key={cert.platform}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="animate-fadeInUp opacity-0" style={{animationDelay: `${index * 150}ms`}}>
                  <button
                    className={`
                      relative flex h-28 w-28 md:h-32 md:w-32 items-center justify-center
                      rounded-2xl border-2 bg-white/5 p-5 backdrop-blur-md
                      transition-all duration-500 ease-out
                      ${isActive
                        ? `-translate-y-3 scale-110 bg-gradient-to-br ${gradient}`
                        : 'border-white/10 hover:border-white/30 hover:-translate-y-1 hover:scale-105'
                      }
                      ${isActive ? 'animate-glow' : ''}
                    `}
                    onClick={() => handleClick(cert.certificates[0])}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    style={isActive ? {
                      boxShadow: `0 0 40px ${glowColor}40, 0 0 80px ${glowColor}20, inset 0 0 20px ${glowColor}10`
                    } : {}}
                    title={cert.platform}
                  >
                    <img
                      alt={cert.platform}
                      className={`h-14 w-14 md:h-16 md:w-16 object-contain transition-all duration-500 ${
                        isActive ? 'brightness-110 drop-shadow-lg' : ''
                      }`}
                      src={cert.logo}
                    />

                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                    )}

                    <div className={`absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 transition-opacity duration-500 ${
                      isActive ? 'opacity-100 scale-110' : ''
                    }`} style={{transform: isActive ? 'scale(1.1)' : 'scale(1)'}} />
                  </button>

                  <div className="mt-4 text-center">
                    <h3 className={`text-base md:text-lg font-semibold transition-all duration-300 ${
                      isActive ? 'text-white translate-y-0' : 'text-neutral-300'
                    }`}>
                      {cert.platform}
                    </h3>
                    <p className={`mt-1 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      isActive ? 'text-orange-400 opacity-100 translate-y-0' : 'text-neutral-500 opacity-0 translate-y-2'
                    }`}>
                      View Certificate
                    </p>
                  </div>
                </div>
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
