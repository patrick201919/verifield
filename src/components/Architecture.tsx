// import React, { useState } from "react";
// import "../services/styles/productStyle.css";
// import NavCategoryItem from "./items/NavCategoryItem";
// import SubProductArchitecture from "./items/SubProductArchitecture";
// import { imgAchitectureData } from "../services/data/architectureData/imgAchitecture";

// const Architecture = () => {
//   const [isProductArchitectureArchive, setIsProductArchitectureArchive] =
//     useState(false);
//   const [animationTitle, setAnimationTitle] = useState(true);

//   const categoriesArchitecture = [
//     { id: 1, name: "Exhibition" },
//     { id: 2, name: "Health" },
//     { id: 3, name: "Hotel" },
//     { id: 4, name: "Installation" },
//     { id: 5, name: "Naval" },
//     { id: 6, name: "Office" },
//     { id: 7, name: "Residential" },
//     { id: 8, name: "Restaurant/bar" },
//     { id: 9, name: "Retail" },
//     { id: 10, name: "Showroom" },
//     { id: 11, name: "Stand" },
//   ];

//   // Fonction mise à jour pour accepter un nom de catégorie
//   const handleCategoryClick = (category: string) => {
//     setIsProductArchitectureArchive(true);
//     setAnimationTitle(true);
//     console.log(`Category clicked: ${category}`);
//   };

//   return (
//     <div className="architecture-page">
//       <NavCategoryItem
//         animationTitle={animationTitle}
//         isProductArchitectureArchive={isProductArchitectureArchive}
//         handleCategoryClick={handleCategoryClick}
//         // categories={categoriesArchitecture}
//         // pageType="architecture"
//       />
//       <SubProductArchitecture
//         data={imgAchitectureData}
//         basePath="img-architecture"
//       />
//     </div>
//   );
// };

// export default Architecture;

import React, { useState } from "react";
import "../services/styles/productStyle.css";
import NavCategoryItem from "./items/NavCategoryItem";
import SubProductArchitecture from "./items/SubProductArchitecture";
import { imgAchitectureData } from "../services/data/architectureData/imgAchitecture";
import Footer from "./footer/Footer";

const Architecture = () => {
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
    <div className="architecture-page">
      <NavCategoryItem
        animationTitle={animationTitle}
        isProductArchitectureArchive={isProductArchitectureArchive}
        handleCategoryClick={handleCategoryClick}
        // pageType="architecture"
      />
      <SubProductArchitecture
        data={imgAchitectureData}
        basePath="architecture"
      />
      <Footer />
    </div>
  );
};

export default Architecture;
