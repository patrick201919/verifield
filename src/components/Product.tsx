// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Nav from "./header/Nav";
// import "../services/styles/productStyle.css";
// import { shuffleArray } from "../services/utils/randomArray";
// import { imgProductCategoriesData } from "../services/data/productData/imgProductCategoriesData";

// const positions = ["left", "center", "right"];

// shuffleArray(imgProductCategoriesData);

// const Product = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const categoriesRef = useRef<HTMLHeadingElement | null>(null);
//   const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const imagesAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const nameImageRef = useRef<HTMLHeadingElement | null>(null);
//   const firstImageContainerRef = useRef<HTMLHeadingElement | null>(null);

//   const [imageLoaded, setImageLoaded] = useState(false);

//   // Fonction pour définir l'état de chargement de l'image
//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   useEffect(() => {
//     if (titleRef.current && categoriesRef.current && titleAnimRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//         }
//       );
//       gsap.fromTo(
//         categoriesRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           delay: 0.5,
//         }
//       );

//       gsap.fromTo(
//         titleAnimRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: -150,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//           onComplete: () => {
//             if (titleAnimRef.current) {
//               titleAnimRef.current.style.display = "none";
//             }
//           },
//         }
//       );
//     }
//   }, []);

//   // Animation des images après chargement
//   useEffect(() => {
//     if (
//       containerRef.current &&
//       imagesAnimRef.current &&
//       firstImageContainerRef.current &&
//       imageLoaded // S'assurer que l'image est chargée
//     ) {
//       // Récupérer la hauteur du premier .image-container
//       const containerHeight = firstImageContainerRef.current.clientHeight;
//       console.log(
//         "Hauteur du premier container après chargement :",
//         containerHeight
//       );

//       if (imagesAnimRef.current) {
//         imagesAnimRef.current.style.height = `${containerHeight}px`;
//       }

//       const items = gsap.utils.toArray(".image-container");
//       items.forEach((image) => {
//         if (image) {
//           gsap.fromTo(
//             image,
//             { opacity: 1, top: "100%" },
//             {
//               opacity: 1,
//               top: "0%",
//               duration: 1.5,
//               ease: "power2.out",
//               delay: 2,
//               scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//               },
//             }
//           );
//           gsap.fromTo(
//             imagesAnimRef.current,
//             { opacity: 1, y: 0 },
//             {
//               opacity: 1,
//               y: -containerHeight - 2,
//               duration: 1,
//               ease: "power3.out",
//               delay: 1,
//               onComplete: () => {
//                 if (imagesAnimRef.current) {
//                   imagesAnimRef.current.style.display = "none";
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [imageLoaded]);

//   const getRandomPosition = () => {
//     return positions[Math.floor(Math.random() * positions.length)];
//   };

//   return (
//     <div className="product-page">
//       <div className="container-nav-product">
//         <div className="nav-product">
//           <Nav />
//         </div>
//       </div>
//       <div className="container-title-product-categories">
//         <div ref={titleAnimRef} className="fixed-title-animation"></div>
//         <div className="product-categories">
//           <h1 ref={titleRef} className="title-product">
//             Product
//           </h1>
//           <p ref={categoriesRef} className="title-product title-categories">
//             Categories
//           </p>
//         </div>
//       </div>
//       <div ref={containerRef} className="images-container">
//         <div ref={imagesAnimRef} className="images-animation"></div>
//         {imgProductCategoriesData.map((image, index) => (
//           <div
//             key={image.id}
//             className={`image-container ${getRandomPosition()}`}
//             ref={index === 0 ? firstImageContainerRef : null}
//           >
//             <img
//               src={`${process.env.PUBLIC_URL}/assets/img/img-product/product-categories/${image.img}`}
//               alt={`Product ${image.name}`}
//               onLoad={handleImageLoad}
//             />
//             <div className="container-name-secondName">
//               <p className="image-name">{image.name}</p>
//               <p ref={nameImageRef} className="image-secondName">
//                 {image.secondName}
//               </p>
//             </div>
//           </div>
//         ))}
//         <div>
//           <h2>Product</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import "../services/styles/productStyle.css";
// import { shuffleArray } from "../services/utils/randomArray";
// import { imgProductCategoriesData } from "../services/data/productData/imgProductCategoriesData";
// import NavCategoryItem from "./items/NavCategoryItem";

// const positions = ["left", "center", "right"];

// shuffleArray(imgProductCategoriesData);

// const Product = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const imagesAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const nameImageRef = useRef<HTMLHeadingElement | null>(null);
//   const firstImageContainerRef = useRef<HTMLHeadingElement | null>(null);

//   const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   useEffect(() => {
//     if (
//       containerRef.current &&
//       imagesAnimRef.current &&
//       firstImageContainerRef.current &&
//       imageLoaded
//     ) {
//       const containerHeight = firstImageContainerRef.current.clientHeight;
//       console.log(
//         "Hauteur du premier container après chargement :",
//         containerHeight
//       );

//       if (imagesAnimRef.current) {
//         imagesAnimRef.current.style.height = `${containerHeight}px`;
//       }

//       const items = gsap.utils.toArray(".image-container");
//       items.forEach((image) => {
//         if (image) {
//           gsap.fromTo(
//             image,
//             { opacity: 1, top: "100%" },
//             {
//               opacity: 1,
//               top: "0%",
//               duration: 1.5,
//               ease: "power2.out",
//               delay: 2,
//               scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//               },
//             }
//           );
//           gsap.fromTo(
//             imagesAnimRef.current,
//             { opacity: 1, y: 0 },
//             {
//               opacity: 1,
//               y: -containerHeight - 2,
//               duration: 1,
//               ease: "power3.out",
//               delay: 1,
//               onComplete: () => {
//                 if (imagesAnimRef.current) {
//                   imagesAnimRef.current.style.display = "none";
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [imageLoaded]);

//   const getRandomPosition = () => {
//     return positions[Math.floor(Math.random() * positions.length)];
//   };

//   return (
//     <div className="product-page">
//       <NavCategoryItem />
//       <div ref={containerRef} className="images-container">
//         <div ref={imagesAnimRef} className="images-animation"></div>
//         {imgProductCategoriesData.map((image, index) => (
//           <div
//             key={image.id}
//             className={`image-container ${getRandomPosition()}`}
//             ref={index === 0 ? firstImageContainerRef : null}
//           >
//             <img
//               src={`${process.env.PUBLIC_URL}/assets/img/img-product/product-categories/${image.img}`}
//               alt={`Product ${image.name}`}
//               onLoad={handleImageLoad}
//             />
//             <div className="container-name-secondName">
//               <p className="image-name">{image.name}</p>
//               <p ref={nameImageRef} className="image-secondName">
//                 {image.secondName}
//               </p>
//             </div>
//           </div>
//         ))}
//         <div>
//           <h2>Product</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import "../services/styles/productStyle.css";
// import { shuffleArray } from "../services/utils/randomArray";
// import { imgProductCategoriesData } from "../services/data/productData/imgProductCategoriesData";
// import NavCategoryItem from "./items/NavCategoryItem";
// import { useLocation } from "react-router-dom";

// const positions = ["left", "center", "right"];

// shuffleArray(imgProductCategoriesData);

// const Product = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const imagesAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const nameImageRef = useRef<HTMLHeadingElement | null>(null);
//   const firstImageContainerRef = useRef<HTMLHeadingElement | null>(null);
//   const [showProductArchiche, setShowProductArchiche] = useState(true);

//   // test
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const category = searchParams.get("category"); // Récupérez la catégorie de l'URL

//   const filteredImages = category
//     ? imgProductCategoriesData.filter(
//         (image) => image.name.toLowerCase() === category
//       )
//     : imgProductCategoriesData;

//   const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   useEffect(() => {
//     if (
//       containerRef.current &&
//       imagesAnimRef.current &&
//       firstImageContainerRef.current &&
//       imageLoaded
//     ) {
//       const containerHeight = firstImageContainerRef.current.clientHeight;
//       console.log(
//         "Hauteur du premier container après chargement :",
//         containerHeight
//       );

//       if (imagesAnimRef.current) {
//         imagesAnimRef.current.style.height = `${containerHeight}px`;
//       }

//       const items = gsap.utils.toArray(".image-container");
//       items.forEach((image) => {
//         if (image) {
//           gsap.fromTo(
//             image,
//             { opacity: 1, top: "100%" },
//             {
//               opacity: 1,
//               top: "0%",
//               duration: 1.5,
//               ease: "power2.out",
//               delay: 2,
//               scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//               },
//             }
//           );
//           gsap.fromTo(
//             imagesAnimRef.current,
//             { opacity: 1, y: 0 },
//             {
//               opacity: 1,
//               y: -containerHeight - 2,
//               duration: 1,
//               ease: "power3.out",
//               delay: 1,
//               onComplete: () => {
//                 if (imagesAnimRef.current) {
//                   imagesAnimRef.current.style.display = "none";
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [imageLoaded]);

//   const getRandomPosition = () => {
//     return positions[Math.floor(Math.random() * positions.length)];
//   };

//   return (
//     <div className="product-page">
//       <NavCategoryItem setShowProductArchiche={setShowProductArchiche} />
//       <div ref={containerRef} className="images-container">
//         {showProductArchiche ? (
//           <>
//             <div ref={imagesAnimRef} className="images-animation"></div>
//             {imgProductCategoriesData.map((image, index) => (
//               <div
//                 key={image.id}
//                 className={`image-container ${getRandomPosition()}`}
//                 ref={index === 0 ? firstImageContainerRef : null}
//               >
//                 <img
//                   src={`${process.env.PUBLIC_URL}/assets/img/img-product/product-categories/${image.img}`}
//                   alt={`Product ${image.name}`}
//                   onLoad={handleImageLoad}
//                 />
//                 <div className="container-name-secondName">
//                   <p className="image-name">{image.name}</p>
//                   <p ref={nameImageRef} className="image-secondName">
//                     {image.secondName}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </>
//         ) : (
//           filteredImages.map((image) => (
//             <div key={image.id} className="image-container">
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/img/img-product/product-categories/${image.img}`}
//                 alt={`Product ${image.name}`}
//               />
//               <div className="container-name-secondName">
//                 <h4>{image.name}</h4>
//                 <p className="image-secondName">{image.secondName}</p>
//                 <p className="image-secondName">date</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";
import "../services/styles/productStyle.css";
import NavCategoryItem from "./items/NavCategoryItem";
import SubProductArchitecture from "./items/SubProductArchitecture";
import { imgProductData } from "../services/data/productData/imgProduct";
import Footer from "./footer/Footer";

const Product = () => {
  const [isProductArchitectureArchive, setIsProductArchitectureArchive] =
    useState(false);
  const [animationTitle, setAnimationTitle] = useState(true);

  // Fonction mise à jour pour accepter un nom de catégorie
  const handleCategoryClick = (category: string) => {
    setIsProductArchitectureArchive(true);
    setAnimationTitle(true);
    console.log(`Category clicked: ${category}`);
  };

  return (
    <div className="product-page">
      <NavCategoryItem
        animationTitle={animationTitle}
        isProductArchitectureArchive={isProductArchitectureArchive}
        handleCategoryClick={handleCategoryClick}
      />
      <SubProductArchitecture data={imgProductData} basePath="product" />
      <Footer />
    </div>
  );
};

export default Product;
