import { useEffect, useRef, useState } from "react";

import './banner.css'

export function Banner() {
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