// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { imgProductCategoriesData } from "../../services/data/productData/imgProductCategoriesData";
// import NavCategoryItem from "../items/NavCategoryItem";
// import "../../services/styles/itemS/subArchiveStyle.css";
// // import "../../services/styles/itemS/NavCategoryStyle.css";

// const SubArchive = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [isProductArchitectureArchive, setIsProductArchitectureArchive] =
//     useState(true);
//   const [animationTitle, setAnimationTitle] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Récupérer le paramètre de catégorie de l'URL
//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const category = searchParams.get("category");
//     setSelectedCategory(category);
//   }, [location]);

//   // Filtrer les images en fonction de la catégorie sélectionnée
//   const filterImgArchive = selectedCategory
//     ? imgProductCategoriesData.filter(
//         (image) =>
//           image.category &&
//           image.category.toLowerCase() === selectedCategory.toLowerCase()
//       )
//     : imgProductCategoriesData;

//   // Débogage - vérifier la catégorie et les images filtrées
//   useEffect(() => {
//     if (selectedCategory) {
//       console.log("Catégorie sélectionnée : ", selectedCategory);
//     }
//     console.log("Images filtrées : ", filterImgArchive);
//   }, [selectedCategory, filterImgArchive]);

//   // Gérer la sélection de catégorie et la navigation
//   const handleCategoryClick = (category: string) => {
//     navigate(`?category=${category.toLowerCase()}`);
//     setSelectedCategory(category);
//     setIsProductArchitectureArchive(true);
//     setAnimationTitle(false);
//   };

//   return (
//     <div className="sub-archive">
//       <NavCategoryItem
//         animationTitle={animationTitle}
//         handleCategoryClick={handleCategoryClick}
//         isProductArchitectureArchive={isProductArchitectureArchive}
//       />

//       <div className="sub-archive__filtered-images">
//         {filterImgArchive.length > 0 ? (
//           filterImgArchive.map((image) => (
//             <div key={image.id} className="sub-archive__image-item">
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/img/img-product/product-categories/${image.img}`}
//                 alt={`Product ${image.name}`}
//                 className="sub-archive__image"
//               />
//               <div className="sub-archive__image-info">
//                 <h4 className="sub-archive__image-name">{image.name}</h4>
//                 <p className="sub-archive__image-second-name">
//                   {image.secondName}
//                 </p>
//                 <p className="sub-archive__image-date">date</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="sub-archive__no-images">
//             Aucune image trouvée pour cette catégorie.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SubArchive;

// import React, { useEffect, useMemo } from "react";
// import { imgProductData } from "../../services/data/productData/imgProduct";
// import { imgAchitectureData } from "../../services/data/architectureData/imgAchitecture";
// import "../../services/styles/itemS/subArchiveStyle.css";

// interface SubArchiveProps {
//   selectedCategory: string | null;
//   urlImage: string;
// }

// const SubArchive: React.FC<SubArchiveProps> = ({
//   selectedCategory,
//   urlImage,
// }) => {
//   // Fonction pour déterminer la source de données et filtrer les images
//   const getFilteredImages = () => {
//     let data = [];

//     // Déterminer la source des données
//     if (urlImage.startsWith("product/archives")) {
//       data = imgProductData;
//     } else if (urlImage.startsWith("architecture/archives")) {
//       data = imgAchitectureData;
//     }

//     // Appliquer le filtre par catégorie si sélectionnée
//     if (selectedCategory) {
//       return data.filter(
//         (image) =>
//           image.category &&
//           image.category.toLowerCase().includes(selectedCategory.toLowerCase())
//       );
//     }

//     return data;
//   };

//   // Calculer les images filtrées
//   const filterImgArchive = useMemo(getFilteredImages, [
//     urlImage,
//     selectedCategory,
//   ]);

//   // Débogage - vérifier les données et la catégorie sélectionnée
//   useEffect(() => {
//     console.log("URL Image : ", urlImage);
//     console.log("Catégorie sélectionnée : ", selectedCategory);
//     console.log("Images filtrées : ", filterImgArchive);
//   }, [urlImage, selectedCategory, filterImgArchive]);

//   return (
//     <div className="sub-archive__filtered-images">
//       {filterImgArchive.length > 0 ? (
//         filterImgArchive.map((image) => {
//           const description = image.description
//             ? image.description.split(" […]")[0] + " […]"
//             : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenith Nullam convallis urna et metus auctor, nec hendrerit urna vestibulum […] Praesent ut mi et arcu efficitur venenatis. Quisque ac nulla non libero.";
//           return (
//             <div key={image.id} className="sub-archive__image-item">
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/img/${urlImage}/${image.img}`}
//                 alt={`Product ${image.model}`}
//                 className="sub-archive__image"
//               />
//               <div className="sub-archive__image-info">
//                 <h4 className="sub-archive__image-model">{image.model}</h4>
//                 <p className="sub-archive__image-brand">{image.brand}</p>
//                 <p className="sub-archive__image-year">{image.year}</p>
//                 <p>{description}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p className="sub-archive__no-images">
//           Aucune image trouvée pour cette catégorie.
//         </p>
//       )}
//     </div>
//   );
// };

// export default SubArchive;

import React, { useEffect, useMemo } from "react";
import { imgProductData } from "../../services/data/productData/imgProduct";
import { imgAchitectureData } from "../../services/data/architectureData/imgAchitecture";
import "../../services/styles/itemS/subArchiveStyle.css";

// Définir le type des images
interface ImageData {
  id: number;
  img: string;
  width: number;
  height: number;
  model: string;
  brand: string;
  year: number;
  category: string[];
  description: string;
}

interface SubArchiveProps {
  selectedCategory: string | null;
  urlImage: string;
}

const SubArchive: React.FC<SubArchiveProps> = ({
  selectedCategory,
  urlImage,
}) => {
  // Fonction pour déterminer la source de données et filtrer les images
  const getFilteredImages = (): ImageData[] => {
    let data: ImageData[] = []; // Ajouter un type explicite à 'data'

    // Déterminer la source des données
    if (urlImage.startsWith("product/archives")) {
      data = imgProductData;
    } else if (urlImage.startsWith("architecture/archives")) {
      data = imgAchitectureData;
    }

    // Appliquer le filtre par catégorie si sélectionnée
    if (selectedCategory) {
      return data.filter(
        (image) =>
          image.category &&
          image.category.includes(selectedCategory.toLowerCase())
      );
    }

    return data;
  };

  // Calculer les images filtrées
  const filterImgArchive = useMemo(getFilteredImages, [
    urlImage,
    selectedCategory,
  ]);

  // Débogage - vérifier les données et la catégorie sélectionnée
  useEffect(() => {
    console.log("URL Image : ", urlImage);
    console.log("Catégorie sélectionnée : ", selectedCategory);
    console.log("Images filtrées : ", filterImgArchive);
  }, [urlImage, selectedCategory, filterImgArchive]);

  return (
    <div className="sub-archive__filtered-images">
      {filterImgArchive.length > 0 ? (
        filterImgArchive.map((image) => {
          const description = image.description
            ? image.description.split(" […]")[0] + " […]"
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenith Nullam convallis urna et metus auctor, nec hendrerit urna vestibulum […] Praesent ut mi et arcu efficitur venenatis. Quisque ac nulla non libero.";
          return (
            <div key={image.id} className="sub-archive__image-item">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/${urlImage}/${image.img}`}
                alt={`Product ${image.model}`}
                className="sub-archive__image"
              />
              <div className="sub-archive__image-info">
                <h4 className="sub-archive__image-model">{image.model}</h4>
                <p className="sub-archive__image-brand">{image.brand}</p>
                <p className="sub-archive__image-year">{image.year}</p>
                <p>{description}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="sub-archive__no-images">
          Aucune image trouvée pour cette catégorie.
        </p>
      )}
    </div>
  );
};

export default SubArchive;
