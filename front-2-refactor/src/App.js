import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const images = [
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/1" },
  { title: "City at Night", src: "http://localhost:3001/api/images/2" },
  { title: "Mountains", src: "http://localhost:3001/api/images/3" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/4" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/5" },
  { title: "City at Night", src: "http://localhost:3001/api/images/6" },
  { title: "Mountains", src: "http://localhost:3001/api/images/7" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/8" },
];

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculer les indices des images pour la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  // Nombre total de pages
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Changer de page
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
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

      </div>);}

function FakeMenu() {
  return (
    <nav className="fake-menu">
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Galerie</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function FakeFooter() {
  return (
    <footer className="fake-footer">
      <div className="footer-content">
        {/* Section À propos */}
        <div className="footer-section">
          <h3>À propos</h3>
          <p>
            Nous créons des expériences inoubliables grâce à des paysages
            magnifiques. Suivez-nous pour en découvrir davantage.
          </p>
        </div>

        {/* Section Liens utiles */}
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Galerie</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="footer-section">
          <h3>Réseaux sociaux</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Magnifiques Paysages. Tous droits réservés.</p>
      </div>
    </footer>
  );
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
