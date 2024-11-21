import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const dataImg = [
//   { id: 1, img: "image18-300x225.jpg" },
//   { id: 1, img: "image18-300x225AAAAÅÅ.jpg" },
//   { id: 1, img: "image18-300x225.jpg" },
//   { id: 1, img: "image18-300x225.jpg" },
//   { id: 1, img: "image18-300x225.jpg" },
//   { id: 1, img: "image18-300x225.jpg" },
//   { id: 1, img: "image18-300x225.jpg" },
// ];


// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// const dataImg = [
//   { id: 1, img: "image18-300x225.jpg", height: "" },
//   { id: 2, img: "image18.jpg", height: "" },
//   { id: 3, img: "image44-768x340.jpg", height: "" },
//   { id: 4, img: "image44-1024x453.jpg", height: "" },
//   { id: 5, img: "Picture13-248x300-1.jpg", height: "" },
//   { id: 6, img: "Picture13-248x300.jpg", height: "" },
//   { id: 8, img: "Picture27-267x300.png", height: "" },
//   { id: 9, img: "Picture27.png", height: "" },
//   {
//     id: 10,
//     img: "WhatsApp-Image-2018-11-05-at-15.12.31-225x300.jpg",
//     height: "",
//   },
//   { id: 11, img: "WhatsApp-Image-2018-11-05-at-15.12.31.jpg", height: "" },
//   {
//     id: 12,
//     img: "WhatsApp-Image-2018-12-21-at-18.01.54-768x576.jpg",
//     height: 200,
//     width: 150,
//   },
//   {
//     id: 12,
//     img: "WhatsApp-Image-2018-12-21-at-18.01.54.jpg",
//     height: 300,
//     width: 300,
//   },
// ];

// const RandomImageAnimation = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [images, setImages] = useState(dataImg);
//   const zIndexRef = useRef(1);

//   useEffect(() => {
//     const container = containerRef.current;

//     if (!container) return;

//     const animateImage = (
//       img: HTMLImageElement,
//       delay: number
//     ): Promise<void> => {
//       return new Promise((resolve) => {
//         const x = Math.random() * (container.offsetWidth - img.offsetWidth);
//         const y = Math.random() * (container.offsetHeight - img.offsetHeight);

//         const newZIndex = zIndexRef.current + 1;
//         zIndexRef.current = newZIndex;

//         gsap.to(img, {
//           x: x,
//           y: y,
//           duration: 1,
//           zIndex: newZIndex,
//           delay: delay,
//           opacity: 1,
//           onComplete: () => {
//             resolve();
//           },
//         });
//       });
//     };

//     const runAnimations = async () => {
//       const imagesArray = Array.from(
//         container.querySelectorAll<HTMLImageElement>("img")
//       );
//       for (let i = 0; i < imagesArray.length; i++) {
//         await animateImage(imagesArray[i], i * 0.5); // Ajout d'un délai de 0.5s entre chaque animation
//       }

//       setImages((prevImages) => [...prevImages]);
//     };

//     const intervalId = setInterval(runAnimations, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {images.map((image) => (
//         <img
//           key={image.id}
//           src={`${process.env.PUBLIC_URL}/assets/img-home/${image.img}`}
//           alt={`img ${image.id}`}
//           style={{
//             position: "absolute",
//             opacity: 0,
//             top: 0,
//             left: 0,
//             width: image.width,
//             height: image.height,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RandomImageAnimation;
