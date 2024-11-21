// import { NavLink, useLocation } from "react-router-dom";
// import "../../services/styles/navStyle.css";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

// export default function Nav() {
//   const location = useLocation();
//   const isHomeActive = location.pathname === "/";
//   const linkRef = useRef(null);

//   useGSAP(() => {
//     const updatePadding = () => {
//       const width = window.innerWidth;
//       let paddingRight;

//       if (width <= 792) {
//         paddingRight = 112;
//       } else if (width <= 900) {
//         paddingRight = 140;
//       } else if (width <= 1000) {
//         paddingRight = 170;
//       } else if (width <= 1100) {
//         paddingRight = 200;
//       } else if (width <= 1200) {
//         paddingRight = 220;
//       } else {
//         paddingRight = 234;
//       }

//       gsap.to(linkRef.current, {
//         paddingRight: `${paddingRight}px`,
//         duration: 0,
//         ease: "power1.inOut",
//       });
//     };

//     updatePadding();
//     window.addEventListener("resize", updatePadding);

//     return () => {
//       window.removeEventListener("resize", updatePadding);
//     };
//   }, []);

//   return (
//     <nav>
//       <ul>
//         <li ref={linkRef} className="lienHome">
//           <NavLink to="/" className={isHomeActive ? "active" : "inactive"}>
//             Home
//           </NavLink>
//         </li>
//         <li className="lienProduct">
//           <NavLink
//             to="/product"
//             className={isHomeActive ? "active" : "inactive"}
//           >
//             Product
//           </NavLink>
//         </li>
//         <li className="lienArchitecture">
//           <NavLink
//             to="/architecture"
//             className={isHomeActive ? "active" : "inactive"}
//           >
//             Architecture
//           </NavLink>
//         </li>
//         <li className="lienStudio">
//           <NavLink
//             to="/studio"
//             className={isHomeActive ? "active" : "inactive"}
//           >
//             Studio
//           </NavLink>
//         </li>
//         <li className="lienContact">
//           <NavLink
//             to="/contact"
//             className={isHomeActive ? "active" : "inactive"}
//           >
//             Contact
//           </NavLink>
//         </li>
//         <li className="lienSearch">
//           <NavLink
//             to="/search"
//             className={isHomeActive ? "active" : "inactive"}
//           >
//             Search
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// import { NavLink, useLocation } from "react-router-dom";
// import "../../services/styles/navStyle.css";
// import { useEffect, useState } from "react";

// export default function Nav() {
//   const location = useLocation();
//   const isHomeActive = location.pathname === "/";
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev); // Inverse l'état du menu
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 1054) {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Vérifiez la taille de l'écran au montage du composant

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <nav
//       className={`nav-container ${
//         menuOpen && isHomeActive ? "home-active" : ""
//       }`}
//     >
//       <button
//         className={`menu-toggle ${
//           (menuOpen && isHomeActive) || (!menuOpen && isHomeActive)
//             ? "home-active"
//             : ""
//         }`}
//         onClick={toggleMenu}
//       >
//         {!menuOpen ? "Close" : "Menu"}
//       </button>

//       {/* Menu déroulant qui s'affiche seulement si menuOpen est vrai */}
//       {(menuOpen || window.innerWidth > 1054) && (
//         <ul className="menu-list">
//           <li className="lienHome">
//             <NavLink to="/" className={isHomeActive ? "active" : "inactive"}>
//               Home
//             </NavLink>
//           </li>
//           <li className="lienProduct">
//             <NavLink
//               to="/product"
//               className={isHomeActive ? "active" : "inactive"}
//             >
//               Product
//             </NavLink>
//           </li>
//           <li className="lienArchitecture">
//             <NavLink
//               to="/architecture"
//               className={isHomeActive ? "active" : "inactive"}
//             >
//               Architecture
//             </NavLink>
//           </li>
//           <li className="lienStudio">
//             <NavLink
//               to="/studio"
//               className={isHomeActive ? "active" : "inactive"}
//             >
//               Studio
//             </NavLink>
//           </li>
//           <li className="lienContact">
//             <NavLink
//               to="/contact"
//               className={isHomeActive ? "active" : "inactive"}
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li className="lienSearch">
//             <NavLink
//               to="/search"
//               className={isHomeActive ? "active" : "inactive"}
//             >
//               Search
//             </NavLink>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }

import { NavLink, useLocation } from "react-router-dom";
import "../../services/styles/navStyle.css";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false); // Gère l'ouverture du menu sur petits écrans
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1054); // Vérifie si l'écran est petit ou grand

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Inverse l'état du menu
  };

  // Gérer l'affichage du menu en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1054);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`nav-container ${
        menuOpen && isHomeActive ? "home-active" : ""
      } `}
    >
      {/* Bouton Menu visible uniquement sur petits écrans */}
      {isSmallScreen && (
        <button
          className={`menu-toggle ${
            (menuOpen || !menuOpen) && isHomeActive ? "home-active" : ""
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      )}

      {/* Menu visible sur grands écrans ou lorsque menuOpen est vrai sur petits écrans */}
      {(menuOpen || !isSmallScreen) && (
        <ul className="menu-list">
          <li className="linkHome">
            <NavLink to="/" className={isHomeActive ? "active" : "inactive"}>
              Home
            </NavLink>
          </li>
          <li className="linkProduct">
            <NavLink
              to="/product"
              className={isHomeActive ? "active" : "inactive"}
            >
              Product
            </NavLink>
          </li>
          <li className="linkArchitecture">
            <NavLink
              to="/architecture"
              className={isHomeActive ? "active" : "inactive"}
            >
              Architecture
            </NavLink>
          </li>
          <li className="linkStudio">
            <NavLink
              to="/studio"
              className={isHomeActive ? "active" : "inactive"}
            >
              Studio
            </NavLink>
          </li>
          <li className="linkContact">
            <NavLink
              to="/contact"
              className={isHomeActive ? "active" : "inactive"}
            >
              Contact
            </NavLink>
          </li>
          <li className="linkSearch">
            <NavLink
              to="/search"
              className={isHomeActive ? "active" : "inactive"}
            >
              Search
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
