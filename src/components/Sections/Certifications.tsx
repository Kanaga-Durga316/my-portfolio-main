import { FC, memo, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { certifications, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCert = certifications[currentIndex];

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
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

        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrevious}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 hover:bg-white/20"
              aria-label="Previous certificate"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <div key={currentIndex} className="flex flex-col items-center gap-4 animate-fadeUp">
              <button
                onClick={() => handleClick(currentCert.certificates[0])}
                className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 p-6 shadow-[0_0_30px_rgba(255,255,255,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white/20 animate-float"
                title={currentCert.platform}
              >
                <img
                  src={currentCert.logo}
                  alt={currentCert.platform}
                  className="h-16 w-16 object-contain"
                />
              </button>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white">
                  {currentCert.platform}
                </h3>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 hover:bg-white/20"
              aria-label="Next certificate"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <button
                key={cert.platform}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white animate-pulse' : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Show ${cert.platform}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
