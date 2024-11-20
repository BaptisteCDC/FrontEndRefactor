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
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/9" },
  { title: "City at Night", src: "http://localhost:3001/api/images/10" },
  { title: "Mountains", src: "http://localhost:3001/api/images/11" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/12" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/13" },
  { title: "City at Night", src: "http://localhost:3001/api/images/14" },
  { title: "Mountains", src: "http://localhost:3001/api/images/15" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/16" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/17" },
  { title: "City at Night", src: "http://localhost:3001/api/images/18" },
  { title: "Mountains", src: "http://localhost:3001/api/images/19" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/20" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/21" },
  { title: "City at Night", src: "http://localhost:3001/api/images/22" },
  { title: "Mountains", src: "http://localhost:3001/api/images/23" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/24" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/25" },
  { title: "City at Night", src: "http://localhost:3001/api/images/26" },
  { title: "Mountains", src: "http://localhost:3001/api/images/27" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/28" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/29" },
  { title: "City at Night", src: "http://localhost:3001/api/images/30" },
  { title: "Mountains", src: "http://localhost:3001/api/images/31" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/32" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/33" },
  { title: "City at Night", src: "http://localhost:3001/api/images/34" },
  { title: "Mountains", src: "http://localhost:3001/api/images/35" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/36" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/37" },
  { title: "City at Night", src: "http://localhost:3001/api/images/38" },
  { title: "Mountains", src: "http://localhost:3001/api/images/39" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/40" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/41" },
  { title: "City at Night", src: "http://localhost:3001/api/images/42" },
  { title: "Mountains", src: "http://localhost:3001/api/images/43" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/44" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/45" },
  { title: "City at Night", src: "http://localhost:3001/api/images/46" },
  { title: "Mountains", src: "http://localhost:3001/api/images/47" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/48" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/49" },
  { title: "City at Night", src: "http://localhost:3001/api/images/50" },
  { title: "Mountains", src: "http://localhost:3001/api/images/51" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/52" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/53" },
  { title: "City at Night", src: "http://localhost:3001/api/images/54" },
  { title: "Mountains", src: "http://localhost:3001/api/images/55" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/56" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/57" },
  { title: "City at Night", src: "http://localhost:3001/api/images/58" },
  { title: "Mountains", src: "http://localhost:3001/api/images/59" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/60" },
  { title: "Beautiful Landscape", src: "http://localhost:3001/api/images/61" },
  { title: "City at Night", src: "http://localhost:3001/api/images/62" },
  { title: "Mountains", src: "http://localhost:3001/api/images/63" },
  { title: "Ocean View", src: "http://localhost:3001/api/images/64" },
];

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

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
