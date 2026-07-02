import { FC, memo } from 'react';
import { certifications, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section
      sectionId={SectionId.Certifications}
      className="relative py-20 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/certifications/header-background.webp"
        alt="Certifications background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Certifications
        </h2>

        <div className="grid grid-cols-2 gap-10 place-items-center sm:grid-cols-3 md:grid-cols-5">
          {certifications.map((cert) => (
            <div key={cert.platform} className="group relative flex flex-col items-center">
              <button
                onClick={() => handleClick(cert.certificates[0])}
                className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 shadow-[0_0_30px_rgba(255,255,255,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white/20"
                title={cert.platform}
              >
                <img
                  src={cert.logo}
                  alt={cert.platform}
                  className="h-12 w-12 object-contain"
                />
              </button>

              <div className="pointer-events-none absolute top-full mt-3 scale-95 rounded-full border border-white/20 bg-neutral-900/90 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                {cert.platform}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
