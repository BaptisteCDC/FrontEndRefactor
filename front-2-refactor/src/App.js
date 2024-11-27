import React, { useEffect, useRef, useState } from "react";
import { FakeMenu, FakeFooter } from './layout'
import { images } from './data/image'

import "./App.css";

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const itemsPerPage = 30;

  // Calculer les indices des images pour la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentImages = images.slice(indexOfFirstItem, indexOfLastItem);
  const currentImagesOriginal = [...currentImages];

  // Nombre total de pages
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Changer de page
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const searchImage = () => {
    let imagesFound = [];
    images.forEach(image => {
      const hasFoundSearchValue = image.title.toLowerCase()
        .includes(searchValue.trim().toLowerCase());

      if (hasFoundSearchValue) 
        imagesFound = [...imagesFound, image]
    })
    
    currentImages = [...imagesFound]
    console.log("CURRENT IMAGES", currentImages)
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Search image..." 
          onChange={(event) => setSearchValue(event.target.value)} />
        <button onClick={() => searchImage()}>Search</button>
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="image-gallery">
        {currentImages.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image.src} alt={image.title} className="image" />
            <p className="image-title">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}

      </div>);
      
}


function Banner() {
  const [resizedImage, setResizedImage] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src = "/images/banner.jpg"; // Chargez votre bannière ici
    image.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Définissez les dimensions de la nouvelle image
      const width = 448; // largeur complète de l'écran
      const height = 256;

      // Ajustez le canvas
      canvas.width = width;
      canvas.height = height;

      // Dessinez et redimensionnez l'image
      ctx.drawImage(image, 0, 0, width, height);

      // Convertissez le contenu du canvas en une URL d'image
      const resizedImageUrl = canvas.toDataURL("image/jpeg");
      setResizedImage(resizedImageUrl);
    };
  }, []);

  return (
    <header className="banner">
      <canvas ref={canvasRef} style={{ display: "none" }} /> {/* Canvas invisible */}
      {resizedImage ? (
        <img src={resizedImage} alt="Banner" className="banner-image" />
      ) : (
        <p>Loading...</p>
      )}
    </header>
  );
}

function OpenClosePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="panel">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`panel-toggle ${isOpen ? "open" : ""}`}
      >
        {isOpen ? "Fermer la galerie" : "Ouvrir la galerie"}
      </button>

      {isOpen && (
        <div className="panel-content">
          <Gallery />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
        <header className="banner">
          <Banner />
      </header>
      <FakeMenu />
      <h1>Decouvrez nos magnifiques paysages</h1>
      <OpenClosePanel />
      <FakeFooter />
    </div>
  );
}

export default App;
