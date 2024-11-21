// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import SubArchive from "./items/SubArchive";
// import NavCategoryItem from "./items/NavCategoryItem";
// import "../services/styles/archiveStyle.css";

// const Archive = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [isProductArchitectureArchive, setIsProductArchitectureArchive] =
//     useState(true);
//   const [animationTitle, setAnimationTitle] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const category = searchParams.get("category");
//     setSelectedCategory(category);
//   }, [location]);

//   const handleCategoryClick = (category: string) => {
//     navigate(`?category=${category.toLowerCase()}`);
//     setSelectedCategory(category);
//     setIsProductArchitectureArchive(true);
//     setAnimationTitle(false);
//   };

//   return (
//     <div className="archive-page">
//       <NavCategoryItem
//         animationTitle={animationTitle}
//         handleCategoryClick={handleCategoryClick}
//         isProductArchitectureArchive={isProductArchitectureArchive}
//       />
//       <SubArchive selectedCategory={selectedCategory} />
//     </div>
//   );
// };

// export default Archive;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubArchive from "./items/SubArchive";
import NavCategoryItem from "./items/NavCategoryItem";
import "../services/styles/archiveStyle.css";
import Footer from "./footer/Footer";

const Archive = () => {
  const [isProductArchitectureArchive, setIsProductArchitectureArchive] =
    useState(true);
  const [animationTitle, setAnimationTitle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [urlImage, setUrlImage] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  // Met à jour le type de page et la catégorie en fonction de l'URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");

    if (location.pathname.startsWith("/product/archives")) {
      if (category) {
        setUrlImage(`product/archives/${category.toLowerCase()}`);
        setSelectedCategory(category);
      } else {
        setUrlImage("product/archives");
        setSelectedCategory("archives");
      }
    } else if (location.pathname.startsWith("/architecture/archives")) {
      if (category) {
        setUrlImage(`architecture/archives/${category.toLowerCase()}`);
        setSelectedCategory(category);
      } else {
        setUrlImage("architecture/archives");
        setSelectedCategory("archives");
      }
    }
  }, [location]);

  // Gère la sélection de catégorie

  const handleCategoryClick = (category: string) => {
    navigate(`?category=${category.toLowerCase()}`);
    setSelectedCategory(category);
    setIsProductArchitectureArchive(true);
    setAnimationTitle(false);
  };

  return (
    <div className="archive-page">
      <NavCategoryItem
        animationTitle={animationTitle}
        handleCategoryClick={handleCategoryClick}
        isProductArchitectureArchive={isProductArchitectureArchive}
      />
      <SubArchive selectedCategory={selectedCategory} urlImage={urlImage} />
      <Footer />
    </div>
  );
};

export default Archive;
