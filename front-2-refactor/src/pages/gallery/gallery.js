import { useState } from "react";
import { images } from './../../data/image'

import './gallery.css';

export function Gallery() {
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