import React, { useEffect, useRef, useState } from "react";
import { shuffleArray } from "../../services/utils/randomArray";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../../services/styles/itemS/subProductArchitectureStyle.css";

gsap.registerPlugin(ScrollTrigger);

const positions = ["left", "center", "right"];

interface ImageData {
  id: number;
  img: string;
  model: string;
  brand: string;
  year: number;
  width: number;
  height: number;
  category: string[];
  description: string;
}

// Modifiez le composant pour utiliser cette interface
interface SubProductArchitectureProps {
  data: ImageData[]; // data est maintenant typé comme un tableau d'ImageData
  basePath: string;
}

const SubProductArchitecture: React.FC<SubProductArchitectureProps> = ({
  data,
  basePath,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesAnimRef = useRef<HTMLHeadingElement | null>(null);
  const nameImageRef = useRef<HTMLHeadingElement | null>(null);
  const firstImageContainerRef = useRef<HTMLHeadingElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const filteredData = data.filter((image) =>
    image.category.includes(basePath)
  );

  shuffleArray(filteredData);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (
      containerRef.current &&
      imagesAnimRef.current &&
      firstImageContainerRef.current &&
      imageLoaded
    ) {
      const containerHeight = firstImageContainerRef.current.clientHeight;

      if (imagesAnimRef.current) {
        imagesAnimRef.current.style.height = `${containerHeight}px`;
      }

      const items = gsap.utils.toArray(".image-container");
      items.forEach((image) => {
        if (image) {
          gsap.fromTo(
            image,
            { opacity: 1, top: "100%" },
            {
              opacity: 1,
              top: "0%",
              duration: 1.5,
              ease: "power2.out",
              delay: 2,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            imagesAnimRef.current,
            { opacity: 1, y: 0 },
            {
              opacity: 1,
              y: -containerHeight - 2,
              duration: 1,
              ease: "power3.out",
              delay: 1,
              onComplete: () => {
                if (imagesAnimRef.current) {
                  imagesAnimRef.current.style.display = "none";
                }
              },
            }
          );
        }
      });
    }
  }, [imageLoaded]);

  const getRandomPosition = () => {
    return positions[Math.floor(Math.random() * positions.length)];
  };

  return (
    <div ref={containerRef} className="images-container">
      <div ref={imagesAnimRef} className="images-animation"></div>
      {filteredData.map((image, index) => (
        <div
          key={image.id}
          className={`image-container ${getRandomPosition()}`}
          ref={index === 0 ? firstImageContainerRef : null}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/${basePath}/${image.img}`}
            alt={`product-architecture ${image.model}`}
            onLoad={handleImageLoad}
          />
          <div className="container-model-brand">
            <p className="image-name">{image.model}</p>
            <p ref={nameImageRef} className="image-brand">
              {image.brand}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubProductArchitecture;
