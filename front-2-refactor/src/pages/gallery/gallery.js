import { Panel } from "../../ui";
import { usePaginationContext } from '../../hooks'
import './gallery.css';

export function Gallery() {
    const { goToPage, getTotalPages, getCurrentImages, getCurrentPage} = usePaginationContext();
    
    return(
      <>
        <h1>Decouvrez nos magnifiques paysages</h1>
        <Panel closePanelText="Fermer la galerie" openPanelText="Ouvrir la galerie">
          <div>
            <div className="pagination">
                {Array.from({ length: getTotalPages() }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={getCurrentPage() === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="image-gallery">
                {getCurrentImages().map((image, index) => (
                  <div className="image-card" key={index}>
                    <img src={image.src} alt={image.title} className="image" />
                    <p className="image-title">{image.title}</p>
                  </div>
                ))}
              </div>
              {/* Pagination */}
          </div>
        </Panel>
      </>
    ); 
  }