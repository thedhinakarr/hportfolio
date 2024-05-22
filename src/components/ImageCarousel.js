import React, { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { StaticImage } from 'gatsby-plugin-image';
import 'tailwindcss/tailwind.css';

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, autoplay: true });
  const autoplayInterval = useRef(null);

  useEffect(() => {
    if (emblaApi) {
      // Autoplay functionality
      const autoplay = () => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      };

      autoplayInterval.current = setInterval(autoplay, 3000);

      return () => {
        clearInterval(autoplayInterval.current);
      };
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide  flex-[0_0_100%]">
          <StaticImage
            src="../images/hero.png"
            alt="Image 1"
            className="object-cover h-full w-full md:h-96"
            placeholder="blurred"
            layout="constrained"
          />
          <p className="legend bg-opacity-75 bg-black text-white p-2 rounded absolute bottom-0 left-0 right-0">
            Legend 1
          </p>
        </div>
        <div className="embla__slide relative flex-[0_0_100%]">
          <StaticImage
            src="../images/hero1.png"
            alt="Image 2"
            className="object-cover h-full w-full md:h-96"
            placeholder="blurred"
            layout="constrained"
          />
          <p className="legend bg-opacity-75 bg-black text-white p-2 rounded absolute bottom-0 left-0 right-0">
            Legend 2
          </p>
        </div>
        <div className="embla__slide relative flex-[0_0_100%]">
          <StaticImage
            src="../images/servicesHero.png"
            alt="Image 3"
            className="object-cover h-full w-full md:h-96"
            placeholder="blurred"
            layout="constrained"
          />
          <p className="legend bg-opacity-75 bg-black text-white p-2 rounded absolute bottom-0 left-0 right-0">
            Legend 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
