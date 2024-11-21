// hooks/useTitleAnimation.ts
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useTitleAnimation = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
  const categoriesRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (titleRef.current && categoriesRef.current && titleAnimRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.5 }
      );
      gsap.fromTo(
        categoriesRef.current,
        { opacity: 0, y: 130 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
      gsap.fromTo(
        titleAnimRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          y: -200,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
          onComplete: () => {
            if (titleAnimRef.current) {
              titleAnimRef.current.style.display = "none";
            }
          },
        }
      );
    }
  }, []);

  return { titleRef, titleAnimRef, categoriesRef };
};

export default useTitleAnimation;
