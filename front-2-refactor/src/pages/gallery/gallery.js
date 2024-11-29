import { useState } from "react";
import { images } from './../../data/image'
import './gallery.css';
import { OpenClosePanelContextProvider } from '../../context';

export function Gallery() {
    console.log("HELLO RENDER GALLERY")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;
  
    // Calculer les indices des images pour la page actuelle
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentImages = images.slice(indexOfFirstItem, indexOfLastItem);
  
    // Nombre total de pages
    const totalPages = Math.ceil(images.length / itemsPerPage);
  
    // Changer de page
    const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  

    return(
      <>
        <h1>Decouvrez nos magnifiques paysages</h1>
        <OpenClosePanelContextProvider>
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
          </div>
        </OpenClosePanelContextProvider>
      </>
    ); 
  }