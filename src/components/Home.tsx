import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Nav from "./header/Nav";
import { shuffleArray } from "../services/utils/randomArray";
import { imagesHome } from "../services/data/homeData/imgHome";

shuffleArray(imagesHome);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState(1);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      gsap.fromTo(
        ".background",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => setAnimationPlayed(true),
        }
      );
    }

    const container = containerRef.current;

    if (!container) return;

    const animateImage = (
      img: HTMLImageElement,
      delay: number,
      zIndex: number
    ): Promise<void> => {
      return new Promise((resolve) => {
        const x = Math.random() * (container.offsetWidth - img.offsetWidth);
        const y = Math.random() * (container.offsetHeight - img.offsetHeight);

        gsap.to(img, {
          x: x,
          y: y,
          duration: 1,
          zIndex: zIndex,
          delay: delay,
          opacity: 1,
          onComplete: () => {
            resolve();
          },
        });
      });
    };

    const runAnimations = async () => {
      const imagesArray = Array.from(
        container.querySelectorAll<HTMLImageElement>("img")
      );

      for (let i = 0; i < imagesArray.length; i++) {
        const currentZIndex = zIndex + i;
        await animateImage(imagesArray[i], i * 0.5, currentZIndex);
      }

      setZIndex((prevZIndex) => prevZIndex + imagesArray.length);
    };

    const intervalId = setInterval(runAnimations, 1000);

    return () => clearInterval(intervalId);
  }, [zIndex, animationPlayed]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "burlywood",
        }}
      ></div>
      <div
        style={{
          zIndex: zIndex + 100,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <Nav />
      </div>

      {imagesHome.map((image) => (
        <img
          key={image.id}
          src={`${process.env.PUBLIC_URL}/assets/img/img-home/${image.img}`}
          alt={`img ${image.id}`}
          style={{
            position: "absolute",
            opacity: 0,
            top: 0,
            left: 0,
            width: image.width || 300,
            height: image.height || 300,
            // paddingTop: 35,
          }}
        />
      ))}
      <div>
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 150,
            color: "white",
            zIndex: zIndex + 50,
          }}
        >
          {" "}
          VERIFIED
        </p>
      </div>
    </div>
  );
};

export default Home;
