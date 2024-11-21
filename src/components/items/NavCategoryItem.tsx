// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import Nav from "../header/Nav";
// import "../../services/styles/itemS/navCategoryStyle.css";

// import { gsap } from "gsap";

// interface CategoryItemProps {
//   handleCategoryClick: (category: string) => void;
//   isProductArchitectureArchive: boolean;
//   animationTitle: boolean;
// }

// const CategoryItem: React.FC<CategoryItemProps> = ({
//   handleCategoryClick,
//   isProductArchitectureArchive,
//   animationTitle,
// }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 790);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const categoriesRef = useRef<HTMLHeadingElement | null>(null);
//   const categoryLinksRef = useRef<(HTMLLIElement | null)[]>([]);
//   const [closeButtonVisible, setCloseButtonVisible] = useState(true);
//   const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const navigate = useNavigate();

//   const categories = [
//     { id: 1, name: "Accessories" },
//     { id: 2, name: "Bathroom" },
//     { id: 3, name: "Beds" },
//     { id: 4, name: "Carpet tiles" },
//     { id: 5, name: "Fabrics" },
//     { id: 6, name: "Fashion" },
//     { id: 7, name: "Furniture" },
//     { id: 8, name: "Heating" },
//     { id: 9, name: "Kitchen" },
//     { id: 10, name: "Kitchenware" },
//     { id: 11, name: "Lighting" },
//     { id: 12, name: "Office" },
//     { id: 13, name: "Outdoor" },
//     { id: 14, name: "Rugs" },
//     { id: 15, name: "Seating" },
//     { id: 16, name: "Surfaces" },
//     { id: 17, name: "Tables" },
//     { id: 18, name: "Tableware" },
//   ];

//   useEffect(() => {
//     console.log("titleRef:", titleRef.current);
//     console.log("categoriesRef:");
//     console.log("titleAnimRef:", titleAnimRef.current);
//     if (
//       animationTitle &&
//       titleRef.current &&
//       titleAnimRef.current &&
//       categoriesRef.current
//     ) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         categoriesRef.current,
//         { opacity: 0, y: 130 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         titleAnimRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: -200,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//           onComplete: () => {
//             if (titleAnimRef.current) {
//               titleAnimRef.current.style.visibility = "hidden";
//             }
//           },
//         }
//       );
//     }
//   }, [animationTitle]);

//   useEffect(() => {
//     if (isCategoriesVisible) {
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [isCategoriesVisible]);

//   const toggleCategories = () => {
//     if (isCategoriesVisible) {
//       categoryLinksRef.current
//         .slice()
//         .reverse()
//         .forEach((link, index) => {
//           if (link) {
//             gsap.to(link, {
//               opacity: 0,
//               duration: 0.1,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1)
//                   setIsCategoriesVisible(false);
//                 setCloseButtonVisible(false);
//               },
//             });
//           }
//         });
//     } else {
//       setIsCategoriesVisible(true);
//       setCloseButtonVisible(false);
//     }
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 790);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = (index: number) => setHoveredIndex(index);
//   const handleMouseLeave = () => setHoveredIndex(null);

//   const handleCategoryClickInternal = (categoryName: string) => {
//     handleCategoryClick(categoryName);
//     navigate(`/product/archives?category=${categoryName.toLowerCase()}`);
//     toggleCategories();
//   };

//   return (
//     <div className="nav-title-category-container">
//       <div className="container-nav-product">
//         <div className="nav-product">
//           <Nav />
//         </div>
//       </div>
//       <div className="container-product-architecture-title">
//         <div className="product-architecture-categories-header">
//           <div ref={titleAnimRef} className="fixed-title-animation"></div>
//           <h1 ref={titleRef} className="product-architecture-title">
//             {isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT"}
//           </h1>
//           <div onClick={toggleCategories} className="categories-toggle">
//             {isSmallScreen ? (
//               <div ref={categoriesRef}>
//                 <AiOutlinePlusCircle size={24} color="black" />
//               </div>
//             ) : (
//               <p
//                 ref={categoriesRef}
//                 className="product-architecture-categories-title"
//                 style={{
//                   visibility: isCategoriesVisible ? "hidden" : "visible",
//                 }}
//               >
//                 Categories
//               </p>
//             )}
//           </div>
//         </div>
//         {isCategoriesVisible && (
//           <div className="categories-list-btn-container">
//             <div className="categories-list-btn">
//               <ul>
//                 {categories.map((category, index) => (
//                   <li
//                     key={category.id}
//                     ref={(el) => (categoryLinksRef.current[index] = el)}
//                     className="link-map-categories"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onClick={() => handleCategoryClickInternal(category.name)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <NavLink
//                       to={`/categories/${category.name}`}
//                       style={{
//                         opacity:
//                           hoveredIndex === index || hoveredIndex === null
//                             ? 1
//                             : 0.5,
//                         transition: "opacity 0.3s ease",
//                       }}
//                     >
//                       {category.name}
//                     </NavLink>
//                   </li>
//                 ))}
//                 {closeButtonVisible && (
//                   <li className="link-close-button-product-architecture">
//                     <button
//                       className="close-button-product-architecture"
//                       onClick={toggleCategories}
//                     >
//                       Close
//                     </button>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import Nav from "../header/Nav";
// import "../../services/styles/itemS/navCategoryStyle.css";
// import { gsap } from "gsap";

// interface CategoryItemProps {
//   handleCategoryClick: (category: string) => void;
//   isProductArchitectureArchive: boolean;
//   animationTitle: boolean;
// }

// const CategoryItem: React.FC<CategoryItemProps> = ({
//   handleCategoryClick,
//   isProductArchitectureArchive,
//   animationTitle,
// }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 790);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const categoriesRef = useRef<HTMLHeadingElement | null>(null);
//   const categoryLinksRef = useRef<(HTMLLIElement | null)[]>([]);
//   const [closeButtonVisible, setCloseButtonVisible] = useState(true);
//   const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const iconRef = useRef<HTMLDivElement | null>(null); // Référence pour l'icône

//   const navigate = useNavigate();

//   const categories = [
//     { id: 1, name: "Accessories" },
//     { id: 2, name: "Bathroom" },
//     { id: 3, name: "Beds" },
//     { id: 4, name: "Carpet tiles" },
//     { id: 5, name: "Fabrics" },
//     { id: 6, name: "Fashion" },
//     { id: 7, name: "Furniture" },
//     { id: 8, name: "Heating" },
//     { id: 9, name: "Kitchen" },
//     { id: 10, name: "Kitchenware" },
//     { id: 11, name: "Lighting" },
//     { id: 12, name: "Office" },
//     { id: 13, name: "Outdoor" },
//     { id: 14, name: "Rugs" },
//     { id: 15, name: "Seating" },
//     { id: 16, name: "Surfaces" },
//     { id: 17, name: "Tables" },
//     { id: 18, name: "Tableware" },
//   ];

//   useEffect(() => {
//     if (
//       animationTitle &&
//       titleRef.current &&
//       titleAnimRef.current &&
//       categoriesRef.current
//     ) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         categoriesRef.current,
//         { opacity: 0, y: 130 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         titleAnimRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: -200,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//           onComplete: () => {
//             if (titleAnimRef.current) {
//               titleAnimRef.current.style.visibility = "hidden";
//             }
//           },
//         }
//       );
//     }
//   }, [animationTitle]);

//   useEffect(() => {
//     if (isCategoriesVisible) {
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [isCategoriesVisible]);

//   const toggleCategories = () => {
//     if (iconRef.current) {
//       gsap.to(iconRef.current, {
//         rotate: isCategoriesVisible ? 0 : 180,
//         duration: 0.5,
//         ease: "power2.out",
//         transformOrigin: "50% 50%",
//       });
//     }

//     if (isCategoriesVisible) {
//       // Masque les catégories avec une animation
//       categoryLinksRef.current
//         .slice()
//         .reverse()
//         .forEach((link, index) => {
//           if (link) {
//             gsap.to(link, {
//               opacity: 0,
//               duration: 0.1,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setIsCategoriesVisible(false);
//                   setCloseButtonVisible(false);
//                 }
//               },
//             });
//           }
//         });
//     } else {
//       // Affiche les catégories immédiatement
//       setIsCategoriesVisible(true);
//       setCloseButtonVisible(false);

//       // Animation d'apparition des liens de catégorie
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 790);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = (index: number) => setHoveredIndex(index);
//   const handleMouseLeave = () => setHoveredIndex(null);

//   const handleCategoryClickInternal = (categoryName: string) => {
//     handleCategoryClick(categoryName);
//     navigate(`/product/archives?category=${categoryName.toLowerCase()}`);
//     toggleCategories();
//   };

//   return (
//     <div className="nav-title-category-container">
//       <div className="container-nav-product">
//         <div className="nav-product">
//           <Nav />
//         </div>
//       </div>
//       <div className="container-product-architecture-title">
//         <div className="product-architecture-categories-header">
//           <div ref={titleAnimRef} className="fixed-title-animation"></div>
//           <h1 ref={titleRef} className="product-architecture-title">
//             {isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT"}
//           </h1>
//           <div
//             onClick={toggleCategories}
//             ref={categoriesRef}
//             className="categories-toggle"
//           >
//             {isSmallScreen ? (
//               // <div ref={iconRef} style={{ padding: 0, margin: 0 }}>
//               //   <AiOutlinePlusCircle size={24} color="black" />
//               // </div>
//               <div
//                 className="icon-container"
//                 onClick={toggleCategories}
//                 ref={iconRef}
//                 style={{ position: "relative", display: "inline-block" }}
//               >
//                 <AiOutlinePlusCircle size={24} color="black" />
//               </div>
//             ) : (
//               <p
//                 className="product-architecture-categories-title"
//                 style={{
//                   visibility: isCategoriesVisible ? "hidden" : "visible",
//                 }}
//               >
//                 Categories
//               </p>
//             )}
//           </div>
//         </div>
//         {isCategoriesVisible && (
//           <div className="categories-list-btn-container">
//             <div className="categories-list-btn">
//               <ul>
//                 {categories.map((category, index) => (
//                   <li
//                     key={category.id}
//                     ref={(el) => (categoryLinksRef.current[index] = el)}
//                     className="link-map-categories"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onClick={() => handleCategoryClickInternal(category.name)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <NavLink
//                       to={`/categories/${category.name}`}
//                       style={{
//                         opacity:
//                           hoveredIndex === index || hoveredIndex === null
//                             ? 1
//                             : 0.5,
//                         transition: "opacity 0.3s ease",
//                       }}
//                     >
//                       {category.name}
//                     </NavLink>
//                   </li>
//                 ))}
//                 {closeButtonVisible && (
//                   <li className="link-close-button-product-architecture">
//                     <button
//                       className="close-button-product-architecture"
//                       onClick={toggleCategories}
//                     >
//                       Close
//                     </button>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import Nav from "../header/Nav";
// import "../../services/styles/itemS/navCategoryStyle.css";
// import { gsap } from "gsap";

// interface CategoryItemProps {
//   handleCategoryClick: (category: string) => void;
//   isProductArchitectureArchive: boolean;
//   animationTitle: boolean;
// }

// const CategoryItem: React.FC<CategoryItemProps> = ({
//   handleCategoryClick,
//   isProductArchitectureArchive,
//   animationTitle,
// }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 790);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const categoriesRef = useRef<HTMLHeadingElement | null>(null);
//   const categoryLinksRef = useRef<(HTMLLIElement | null)[]>([]);
//   const [closeButtonVisible, setCloseButtonVisible] = useState(true);
//   const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const iconRef = useRef<HTMLDivElement | null>(null); // Référence pour l'icône

//   const navigate = useNavigate();

//   const categories = [
//     { id: 1, name: "Accessories" },
//     { id: 2, name: "Bathroom" },
//     { id: 3, name: "Beds" },
//     { id: 4, name: "Carpet tiles" },
//     { id: 5, name: "Fabrics" },
//     { id: 6, name: "Fashion" },
//     { id: 7, name: "Furniture" },
//     { id: 8, name: "Heating" },
//     { id: 9, name: "Kitchen" },
//     { id: 10, name: "Kitchenware" },
//     { id: 11, name: "Lighting" },
//     { id: 12, name: "Office" },
//     { id: 13, name: "Outdoor" },
//     { id: 14, name: "Rugs" },
//     { id: 15, name: "Seating" },
//     { id: 16, name: "Surfaces" },
//     { id: 17, name: "Tables" },
//     { id: 18, name: "Tableware" },
//   ];

//   useEffect(() => {
//     if (
//       animationTitle &&
//       titleRef.current &&
//       titleAnimRef.current &&
//       categoriesRef.current
//     ) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         categoriesRef.current,
//         { opacity: 0, y: 130 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         titleAnimRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: -200,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//           onComplete: () => {
//             if (titleAnimRef.current) {
//               titleAnimRef.current.style.visibility = "hidden";
//             }
//           },
//         }
//       );
//     }
//   }, [animationTitle]);

//   useEffect(() => {
//     if (isCategoriesVisible) {
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [isCategoriesVisible]);

//   const toggleCategories = () => {
//     // Animation de rotation
//     if (iconRef.current) {
//       gsap.to(iconRef.current, {
//         rotate: isCategoriesVisible ? 0 : 180,
//         duration: 0.5,
//         ease: "power2.out",
//         transformOrigin: "center center",
//       });
//     }

//     if (isCategoriesVisible) {
//       // Masque les catégories avec une animation
//       categoryLinksRef.current
//         .slice()
//         .reverse()
//         .forEach((link, index) => {
//           if (link) {
//             gsap.to(link, {
//               opacity: 0,
//               duration: 0.1,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setIsCategoriesVisible(false);
//                   setCloseButtonVisible(false);
//                 }
//               },
//             });
//           }
//         });
//     } else {
//       // Affiche les catégories immédiatement
//       setIsCategoriesVisible(true);
//       setCloseButtonVisible(false);

//       // Animation d'apparition des liens de catégorie
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 790);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = (index: number) => setHoveredIndex(index);
//   const handleMouseLeave = () => setHoveredIndex(null);

//   const handleCategoryClickInternal = (categoryName: string) => {
//     handleCategoryClick(categoryName);
//     navigate(`/product/archives?category=${categoryName.toLowerCase()}`);
//     toggleCategories();
//   };

//   return (
//     <div className="nav-title-category-container">
//       <div className="container-nav-product">
//         <div className="nav-product">
//           <Nav />
//         </div>
//       </div>
//       <div className="container-product-architecture-title">
//         <div className="product-architecture-categories-header">
//           <div ref={titleAnimRef} className="fixed-title-animation"></div>
//           <h1 ref={titleRef} className="product-architecture-title">
//             {isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT"}
//           </h1>
//           <div
//             onClick={toggleCategories}
//             ref={categoriesRef}
//             className="categories-toggle"
//           >
//             {isSmallScreen ? (
//               <div
//                 className="icon-container"
//                 ref={iconRef}
//                 style={{
//                   position: "relative",
//                   display: "inline-flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <AiOutlinePlusCircle size={24} color="black" />
//               </div>
//             ) : (
//               <p
//                 className="product-architecture-categories-title"
//                 style={{
//                   visibility: isCategoriesVisible ? "hidden" : "visible",
//                 }}
//               >
//                 Categories
//               </p>
//             )}
//           </div>
//         </div>
//         {isCategoriesVisible && (
//           <div className="categories-list-btn-container">
//             <div className="categories-list-btn">
//               <ul>
//                 {categories.map((category, index) => (
//                   <li
//                     key={category.id}
//                     ref={(el) => (categoryLinksRef.current[index] = el)}
//                     className="link-map-categories"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onClick={() => handleCategoryClickInternal(category.name)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <NavLink
//                       to={`/categories/${category.name}`}
//                       style={{
//                         opacity:
//                           hoveredIndex === index || hoveredIndex === null
//                             ? 1
//                             : 0.5,
//                         transition: "opacity 0.3s ease",
//                       }}
//                     >
//                       {category.name}
//                     </NavLink>
//                   </li>
//                 ))}
//                 {closeButtonVisible && (
//                   <li className="link-close-button-product-architecture">
//                     <button
//                       className="close-button-product-architecture"
//                       onClick={toggleCategories}
//                     >
//                       Close
//                     </button>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import Nav from "../header/Nav";
// import "../../services/styles/itemS/navCategoryStyle.css";
// import { gsap } from "gsap";

// interface CategoryItemProps {
//   handleCategoryClick: (category: string) => void;
//   isProductArchitectureArchive: boolean;
//   animationTitle: boolean;
// }

// const CategoryItem: React.FC<CategoryItemProps> = ({
//   handleCategoryClick,
//   isProductArchitectureArchive,
//   animationTitle,
// }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 790);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const categoriesRef = useRef<HTMLHeadingElement | null>(null);
//   const categoryLinksRef = useRef<(HTMLLIElement | null)[]>([]);
//   const [closeButtonVisible, setCloseButtonVisible] = useState(false);
//   const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const iconRef = useRef<HTMLDivElement | null>(null); // Référence pour l'icône

//   const navigate = useNavigate();

//   const categories = [
//     { id: 1, name: "Accessories" },
//     { id: 2, name: "Bathroom" },
//     { id: 3, name: "Beds" },
//     { id: 4, name: "Carpet tiles" },
//     { id: 5, name: "Fabrics" },
//     { id: 6, name: "Fashion" },
//     { id: 7, name: "Furniture" },
//     { id: 8, name: "Heating" },
//     { id: 9, name: "Kitchen" },
//     { id: 10, name: "Kitchenware" },
//     { id: 11, name: "Lighting" },
//     { id: 12, name: "Office" },
//     { id: 13, name: "Outdoor" },
//     { id: 14, name: "Rugs" },
//     { id: 15, name: "Seating" },
//     { id: 16, name: "Surfaces" },
//     { id: 17, name: "Tables" },
//     { id: 18, name: "Tableware" },
//   ];

//   useEffect(() => {
//     if (
//       animationTitle &&
//       titleRef.current &&
//       titleAnimRef.current &&
//       categoriesRef.current
//     ) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         categoriesRef.current,
//         { opacity: 0, y: 130 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         titleAnimRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: -200,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//           onComplete: () => {
//             if (titleAnimRef.current) {
//               titleAnimRef.current.style.visibility = "hidden";
//             }
//           },
//         }
//       );
//     }
//   }, [animationTitle]);

//   // useEffect(() => {}, [isCategoriesVisible]);

//   const toggleCategories = () => {
//     if (iconRef.current) {
//       gsap.to(iconRef.current, {
//         rotate: isCategoriesVisible ? 0 : 180,
//         duration: 0.5,
//         ease: "power2.out",
//         transformOrigin: "center",
//       });
//     }

//     if (isCategoriesVisible) {
//       categoryLinksRef.current
//         .slice()
//         .reverse()
//         .forEach((link, index) => {
//           if (link) {
//             gsap.to(link, {
//               opacity: 0,
//               duration: 0.2,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setIsCategoriesVisible(false);
//                   setCloseButtonVisible(false);
//                 }
//               },
//             });
//           }
//         });
//     } else {
//       setIsCategoriesVisible(true);
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.3,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 790);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = (index: number) => setHoveredIndex(index);
//   const handleMouseLeave = () => setHoveredIndex(null);

//   const handleCategoryClickInternal = (categoryName: string) => {
//     handleCategoryClick(categoryName);
//     navigate(`/product/archives?category=${categoryName.toLowerCase()}`);
//     toggleCategories();
//   };

//   return (
//     <div className="nav-title-category-container">
//       <div className="container-nav-product">
//         <div className="nav-product">
//           <Nav />
//         </div>
//       </div>
//       <div className="container-product-architecture-title">
//         <div className="product-architecture-categories-header">
//           <div ref={titleAnimRef} className="fixed-title-animation"></div>
//           <h1 ref={titleRef} className="product-architecture-title">
//             {isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT"}
//           </h1>
//           <div
//             onClick={toggleCategories}
//             ref={categoriesRef}
//             className="categories-toggle"
//           >
//             {isSmallScreen ? (
//               <div
//                 className="icon-container"
//                 ref={iconRef}
//                 style={{
//                   position: "relative",
//                   display: "inline-flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   cursor: "pointer",
//                 }}
//               >
//                 <AiOutlinePlusCircle size={24} color="black" />
//               </div>
//             ) : (
//               <p
//                 className="product-architecture-categories-title"
//                 style={{
//                   visibility: isCategoriesVisible ? "hidden" : "visible",
//                 }}
//               >
//                 Categories
//               </p>
//             )}
//           </div>
//         </div>
//         {isCategoriesVisible && (
//           <div className="categories-list-btn-container">
//             <div className="categories-list-btn">
//               <ul>
//                 {categories.map((category, index) => (
//                   <li
//                     key={category.id}
//                     ref={(el) => (categoryLinksRef.current[index] = el)}
//                     className="link-map-categories"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onClick={() => handleCategoryClickInternal(category.name)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <NavLink
//                       to={`/categories/${category.name}`}
//                       style={{
//                         opacity:
//                           hoveredIndex === index || hoveredIndex === null
//                             ? 1
//                             : 0.5,
//                         transition: "opacity 0.3s ease",
//                       }}
//                     >
//                       {category.name}
//                     </NavLink>
//                   </li>
//                 ))}
//                 {closeButtonVisible && (
//                   <li className="link-close-button-product-architecture">
//                     <button
//                       className="close-button-product-architecture"
//                       onClick={toggleCategories}
//                     >
//                       Close
//                     </button>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import Nav from "../header/Nav";
// import "../../services/styles/itemS/navCategoryStyle.css";

// import { gsap } from "gsap";

// interface CategoryItemProps {
//   handleCategoryClick: (category: string) => void;
//   isProductArchitectureArchive: boolean;
//   animationTitle: boolean;
// }

// const CategoryItem: React.FC<CategoryItemProps> = ({
//   handleCategoryClick,
//   isProductArchitectureArchive,
//   animationTitle,
// }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 790);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const categoriesRef = useRef<HTMLHeadingElement | null>(null);
//   const categoryLinksRef = useRef<(HTMLLIElement | null)[]>([]);
//   const [closeButtonVisible, setCloseButtonVisible] = useState(true);
//   const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const iconRef = useRef<HTMLDivElement | null>(null);

//   const navigate = useNavigate();

//   const categories = [
//     { id: 1, name: "Accessories" },
//     { id: 2, name: "Bathroom" },
//     { id: 3, name: "Beds" },
//     { id: 4, name: "Carpet-tiles" },
//     { id: 5, name: "Fabrics" },
//     { id: 6, name: "Fashion" },
//     { id: 7, name: "Furniture" },
//     { id: 8, name: "Heating" },
//     { id: 9, name: "Kitchen" },
//     { id: 10, name: "Kitchenware" },
//     { id: 11, name: "Lighting" },
//     { id: 12, name: "Office" },
//     { id: 13, name: "Outdoor" },
//     { id: 14, name: "Rugs" },
//     { id: 15, name: "Seating" },
//     { id: 16, name: "Surfaces" },
//     { id: 17, name: "Tables" },
//     { id: 18, name: "Tableware" },
//   ];

//   useEffect(() => {
//     console.log("titleRef:", titleRef.current);
//     console.log("categoriesRef:");
//     console.log("titleAnimRef:", titleAnimRef.current);
//     if (
//       animationTitle &&
//       titleRef.current &&
//       titleAnimRef.current &&
//       categoriesRef.current
//     ) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         categoriesRef.current,
//         { opacity: 0, y: 130 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         titleAnimRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: -200,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//           onComplete: () => {
//             if (titleAnimRef.current) {
//               titleAnimRef.current.style.visibility = "hidden";
//             }
//           },
//         }
//       );
//     }
//   }, [animationTitle]);

//   useEffect(() => {
//     if (iconRef.current) {
//       gsap.set(iconRef.current, { rotate: 45 });
//     }

//     if (isCategoriesVisible) {
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [isCategoriesVisible]);

//   const toggleCategories = () => {
//     if (iconRef.current) {
//       gsap.to(iconRef.current, {
//         rotate: isCategoriesVisible ? 45 : 180,
//         duration: 0.2,
//         ease: "power2.out",
//         transformOrigin: "center",
//       });
//     }
//     if (isCategoriesVisible) {
//       categoryLinksRef.current
//         .slice()
//         .reverse()
//         .forEach((link, index) => {
//           if (link) {
//             gsap.to(link, {
//               opacity: 0,
//               duration: 0.1,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1)
//                   setIsCategoriesVisible(false);
//                 setCloseButtonVisible(false);
//               },
//             });
//           }
//         });
//     } else {
//       setIsCategoriesVisible(true);
//       setCloseButtonVisible(false);
//     }
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 790);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = (index: number) => setHoveredIndex(index);
//   const handleMouseLeave = () => setHoveredIndex(null);

//   const handleCategoryClickInternal = (categoryName: string) => {
//     handleCategoryClick(categoryName);
//     navigate(`/product/archives?category=${categoryName.toLowerCase()}`);
//     toggleCategories();
//   };

//   return (
//     <div className="nav-title-category-container">
//       <div className="container-nav-product">
//         <div className="nav-product">
//           <Nav />
//         </div>
//       </div>
//       <div className="container-product-architecture-title">
//         <div className="product-architecture-categories-header">
//           <div ref={titleAnimRef} className="fixed-title-animation"></div>
//           <h1 ref={titleRef} className="product-architecture-title">
//             {isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT"}
//           </h1>
//           <div
//             onClick={toggleCategories}
//             className="categories-toggle"
//             ref={categoriesRef}
//           >
//             {isSmallScreen ? (
//               <div
//                 className="icon-container"
//                 ref={iconRef}
//                 style={{
//                   position: "relative",
//                   display: "inline-flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   cursor: "pointer",
//                 }}
//               >
//                 <AiOutlinePlusCircle size={24} color="black" />
//               </div>
//             ) : (
//               <p
//                 className="product-architecture-categories-title"
//                 style={{
//                   visibility: isCategoriesVisible ? "hidden" : "visible",
//                 }}
//               >
//                 Categories
//               </p>
//             )}
//           </div>
//         </div>
//         {isCategoriesVisible && (
//           <div className="categories-list-btn-container">
//             <div className="categories-list-btn">
//               <ul>
//                 {categories.map((category, index) => (
//                   <li
//                     key={category.id}
//                     ref={(el) => (categoryLinksRef.current[index] = el)}
//                     className="link-map-categories"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onClick={() => handleCategoryClickInternal(category.name)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <NavLink
//                       to={`/categories/${category.name}`}
//                       style={{
//                         opacity:
//                           hoveredIndex === index || hoveredIndex === null
//                             ? 1
//                             : 0.5,
//                         transition: "opacity 0.3s ease",
//                       }}
//                     >
//                       {category.name.replace(/-/g, " ")}
//                     </NavLink>
//                   </li>
//                 ))}
//                 {closeButtonVisible && (
//                   <li className="link-close-button-product-architecture">
//                     <button
//                       className="close-button-product-architecture"
//                       onClick={toggleCategories}
//                     >
//                       Close
//                     </button>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
// import Nav from "../header/Nav";
// import "../../services/styles/itemS/navCategoryStyle.css";

// import { gsap } from "gsap";

// // interface Category {
// //   id: number;
// //   name: string;
// // }

// interface CategoryItemProps {
//   handleCategoryClick: (category: string) => void;
//   isProductArchitectureArchive: boolean;
//   animationTitle: boolean;
//   // categories?: Category[] | null;
//   // pageType?: "product" | "architecture" | null;
// }

// const CategoryItem: React.FC<CategoryItemProps> = ({
//   handleCategoryClick,
//   isProductArchitectureArchive,
//   animationTitle,
//   // categories = null,
//   // pageType = null,
// }) => {
//   const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 790);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const categoriesRef = useRef<HTMLHeadingElement | null>(null);
//   const categoryLinksRef = useRef<(HTMLLIElement | null)[]>([]);
//   const [closeButtonVisible, setCloseButtonVisible] = useState(true);
//   const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
//   const iconRef = useRef<HTMLDivElement | null>(null);
//   // const location = useLocation();

//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const urlParams = new URLSearchParams(location.search);
//   //   const category = urlParams.get("category");
//   //   console.log(category, "category");
//   // }, [location.search]);

//   const categories = [
//     { id: 1, name: "Accessories" },
//     { id: 2, name: "Bathroom" },
//     { id: 3, name: "Beds" },
//     { id: 4, name: "Carpet-tiles" },
//     { id: 5, name: "Fabrics" },
//     { id: 6, name: "Fashion" },
//     { id: 7, name: "Furniture" },
//     { id: 8, name: "Heating" },
//     { id: 9, name: "Kitchen" },
//     { id: 10, name: "Kitchenware" },
//     { id: 11, name: "Lighting" },
//     { id: 12, name: "Office" },
//     { id: 13, name: "Outdoor" },
//     { id: 14, name: "Rugs" },
//     { id: 15, name: "Seating" },
//     { id: 16, name: "Surfaces" },
//     { id: 17, name: "Tables" },
//     { id: 18, name: "Tableware" },
//   ];

//   useEffect(() => {
//     if (
//       animationTitle &&
//       titleRef.current &&
//       titleAnimRef.current &&
//       categoriesRef.current
//     ) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 100 },
//         { opacity: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         categoriesRef.current,
//         { opacity: 0, y: 130 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
//       );
//       gsap.fromTo(
//         titleAnimRef.current,
//         { opacity: 1, y: 0 },
//         {
//           opacity: 1,
//           y: -200,
//           duration: 1.5,
//           ease: "power3.out",
//           delay: 0.5,
//           onComplete: () => {
//             if (titleAnimRef.current) {
//               titleAnimRef.current.style.visibility = "hidden";
//             }
//           },
//         }
//       );
//     }
//   }, [animationTitle]);

//   useEffect(() => {
//     if (iconRef.current) {
//       gsap.set(iconRef.current, { rotate: 45 });
//     }

//     if (isCategoriesVisible) {
//       categoryLinksRef.current.forEach((link, index) => {
//         if (link) {
//           gsap.fromTo(
//             link,
//             { opacity: 0 },
//             {
//               opacity: 1,
//               duration: 0.5,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1) {
//                   setCloseButtonVisible(true);
//                 }
//               },
//             }
//           );
//         }
//       });
//     }
//   }, [isCategoriesVisible]);

//   const toggleCategories = () => {
//     if (iconRef.current) {
//       gsap.to(iconRef.current, {
//         rotate: isCategoriesVisible ? 45 : 180,
//         duration: 0.2,
//         ease: "power2.out",
//         transformOrigin: "center",
//       });
//     }
//     if (isCategoriesVisible) {
//       categoryLinksRef.current
//         .slice()
//         .reverse()
//         .forEach((link, index) => {
//           if (link) {
//             gsap.to(link, {
//               opacity: 0,
//               duration: 0.1,
//               delay: index * 0.1,
//               onComplete: () => {
//                 if (index === categoryLinksRef.current.length - 1)
//                   setIsCategoriesVisible(false);
//                 setCloseButtonVisible(false);
//               },
//             });
//           }
//         });
//     } else {
//       setIsCategoriesVisible(true);
//       setCloseButtonVisible(false);
//     }
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 790);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = (index: number) => setHoveredIndex(index);
//   const handleMouseLeave = () => setHoveredIndex(null);

//   const handleCategoryClickInternal = (categoryName: string) => {
//     handleCategoryClick(categoryName);
//     navigate(`/product/archives?category=${categoryName.toLowerCase()}`);
//     setIsCategoriesVisible(true);
//     toggleCategories();
//   };

//   // const getTitle = () => {
//   //   if (pageType === "product") {
//   //     return isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT";
//   //   } else {
//   //     return isProductArchitectureArchive
//   //       ? "ARCHITECTURE ARCHIVE"
//   //       : "ARCHITECTURE";
//   //   }
//   // };
//   // getTitle();

//   return (
//     <div className="nav-title-category-container">
//       <div className="container-nav-product">
//         <div className="nav-product">
//           <Nav />
//         </div>
//       </div>
//       <div className="container-product-architecture-title">
//         <div className="product-architecture-categories-header">
//           <div ref={titleAnimRef} className="fixed-title-animation"></div>
//           <h1 ref={titleRef} className="product-architecture-title">
//             {isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT"}
//           </h1>
//           <div
//             onClick={toggleCategories}
//             className="categories-toggle"
//             ref={categoriesRef}
//           >
//             {isSmallScreen ? (
//               <div
//                 className="icon-container"
//                 ref={iconRef}
//                 style={{
//                   position: "relative",
//                   display: "inline-flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   cursor: "pointer",
//                 }}
//               >
//                 <AiOutlinePlusCircle size={24} color="black" />
//               </div>
//             ) : (
//               <p
//                 className="product-architecture-categories-title"
//                 style={{
//                   visibility: isCategoriesVisible ? "hidden" : "visible",
//                 }}
//               >
//                 Categories
//               </p>
//             )}
//           </div>
//         </div>
//         {isCategoriesVisible && (
//           <div className="categories-list-btn-container">
//             <div className="categories-list-btn">
//               <ul>
//                 {categories?.map((category, index) => (
//                   <li
//                     key={category.id}
//                     ref={(el) => (categoryLinksRef.current[index] = el)}
//                     className="link-map-categories"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onClick={() => handleCategoryClickInternal(category.name)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <NavLink
//                       to={`/categories/${category.name}`}
//                       style={{
//                         opacity:
//                           hoveredIndex === index || hoveredIndex === null
//                             ? 1
//                             : 0.5,
//                         transition: "opacity 0.3s ease",
//                       }}
//                     >
//                       {category.name.replace(/-/g, " ")}
//                     </NavLink>
//                   </li>
//                 ))}
//                 {closeButtonVisible && (
//                   <li className="link-close-button-product-architecture">
//                     <button
//                       className="close-button-product-architecture"
//                       onClick={toggleCategories}
//                     >
//                       Close
//                     </button>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Nav from "../header/Nav";
import "../../services/styles/itemS/navCategoryStyle.css";
import { gsap } from "gsap";

const categoriesProduct = [
  { id: 1, name: "Accessories" },
  { id: 2, name: "Bathroom" },
  { id: 3, name: "Beds" },
  { id: 4, name: "Carpet-tiles" },
  { id: 5, name: "Fabrics" },
  { id: 6, name: "Fashion" },
  { id: 7, name: "Furniture" },
  { id: 8, name: "Heating" },
  { id: 9, name: "Kitchen" },
  { id: 10, name: "Kitchenware" },
  { id: 11, name: "Lighting" },
  { id: 12, name: "Office" },
  { id: 13, name: "Outdoor" },
  { id: 14, name: "Rugs" },
  { id: 15, name: "Seating" },
  { id: 16, name: "Surfaces" },
  { id: 17, name: "Tables" },
  { id: 18, name: "Tableware" },
];

const categoriesArchitecture = [
  { id: 1, name: "Exhibition" },
  { id: 2, name: "Health" },
  { id: 3, name: "Hotel" },
  { id: 4, name: "Installation" },
  { id: 5, name: "Naval" },
  { id: 6, name: "Office" },
  { id: 7, name: "Residential" },
  { id: 8, name: "Restaurant/bar" },
  { id: 9, name: "Retail" },
  { id: 10, name: "Showroom" },
  { id: 11, name: "Stand" },
];

interface Category {
  id: number;
  name: string;
}

interface CategoryItemProps {
  handleCategoryClick: (category: string) => void;
  isProductArchitectureArchive: boolean;
  animationTitle: boolean;
  // pageType?: "product" | "architecture" | null; // Le type de la page : "product", "architecture", ou null
}

const CategoryItem: React.FC<Omit<CategoryItemProps, "pageType">> = ({
  handleCategoryClick,
  isProductArchitectureArchive,
  animationTitle,
}) => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 790);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const categoriesRef = useRef<HTMLHeadingElement | null>(null);
  const categoryLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const [closeButtonVisible, setCloseButtonVisible] = useState(true);
  const titleAnimRef = useRef<HTMLHeadingElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [pageType, setPageType] = useState<"product" | "architecture" | null>(
    null
  );

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname.startsWith("/product/archives") ||
      location.pathname.startsWith("/product")
    ) {
      setPageType("product");
      setCategories(categoriesProduct);
    } else if (
      location.pathname.startsWith("/architecture/archives") ||
      location.pathname.startsWith("/architecture")
    ) {
      setPageType("architecture");
      setCategories(categoriesArchitecture);
    }
  }, [location]);

  const getTitle = () => {
    if (location.pathname.startsWith("/product")) {
      return isProductArchitectureArchive ? "PRODUCT ARCHIVE" : "PRODUCT";
    } else if (location.pathname.startsWith("/architecture")) {
      return isProductArchitectureArchive
        ? "ARCHITECTURE ARCHIVE"
        : "ARCHITECTURE";
    }
    return;
  };

  useEffect(() => {
    if (
      animationTitle &&
      titleRef.current &&
      titleAnimRef.current &&
      categoriesRef.current
    ) {
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
              titleAnimRef.current.style.visibility = "hidden";
            }
          },
        }
      );
    }
  }, [animationTitle]);

  useEffect(() => {
    if (iconRef.current) {
      gsap.set(iconRef.current, { rotate: 45 });
    }

    if (isCategoriesVisible) {
      categoryLinksRef.current.forEach((link, index) => {
        if (link) {
          gsap.fromTo(
            link,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              delay: index * 0.1,
              onComplete: () => {
                if (index === categoryLinksRef.current.length - 1) {
                  setCloseButtonVisible(true);
                }
              },
            }
          );
        }
      });
    }
  }, [isCategoriesVisible]);

  const toggleCategories = () => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotate: isCategoriesVisible ? 45 : 180,
        duration: 0.2,
        ease: "power2.out",
        transformOrigin: "center",
      });
    }
    if (isCategoriesVisible) {
      categoryLinksRef.current
        .slice()
        .reverse()
        .forEach((link, index) => {
          if (link) {
            gsap.to(link, {
              opacity: 0,
              duration: 0.1,
              delay: index * 0.1,
              onComplete: () => {
                if (index === categoryLinksRef.current.length - 1)
                  setIsCategoriesVisible(false);
                setCloseButtonVisible(false);
              },
            });
          }
        });
    } else {
      setIsCategoriesVisible(true);
      setCloseButtonVisible(false);
    }
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 790);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleCategoryClickInternal = (categoryName: string) => {
    handleCategoryClick(categoryName);
    navigate(`/${pageType}/archives?category=${categoryName.toLowerCase()}`);
    setIsCategoriesVisible(true);
    toggleCategories();
  };

  return (
    <div className="nav-title-category-container">
      <div className="container-nav-product">
        <div className="nav-product">
          <Nav />
        </div>
      </div>
      <div className="container-product-architecture-title">
        <div className="product-architecture-categories-header">
          <div ref={titleAnimRef} className="fixed-title-animation"></div>
          <h1 ref={titleRef} className="product-architecture-title">
            {getTitle()}
          </h1>
          <div
            onClick={toggleCategories}
            className="categories-toggle"
            ref={categoriesRef}
          >
            {isSmallScreen ? (
              <div
                className="icon-container"
                ref={iconRef}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <AiOutlinePlusCircle size={24} color="black" />
              </div>
            ) : (
              <p
                className="product-architecture-categories-title"
                style={{
                  visibility: isCategoriesVisible ? "hidden" : "visible",
                }}
              >
                Categories
              </p>
            )}
          </div>
        </div>
        {isCategoriesVisible && (
          <div className="categories-list-btn-container">
            <div className="categories-list-btn">
              <ul>
                {categories?.map((category, index) => (
                  <li
                    key={category.id}
                    ref={(el) => (categoryLinksRef.current[index] = el)}
                    className="link-map-categories"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleCategoryClickInternal(category.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={`/categories/${category.name}`}
                      style={{
                        opacity:
                          hoveredIndex === index || hoveredIndex === null
                            ? 1
                            : 0.5,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      {category.name.replace(/-/g, " ")}
                    </NavLink>
                  </li>
                ))}
                {closeButtonVisible && (
                  <li className="link-close-button-product-architecture">
                    <button
                      className="close-button-product-architecture"
                      onClick={toggleCategories}
                    >
                      Close
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
