import { Panel } from "../../ui";
import { usePaginationContext } from '../../hooks'
import styles from './gallery.module.css';

export function Gallery() {
    const { goToPage, getTotalPages, getCurrentImages, getCurrentPage} 
      = usePaginationContext();
    
    return(
      <>
        <h1>Decouvrez nos magnifiques paysages</h1>
        <Panel closePanelText="Fermer la galerie" openPanelText="Ouvrir la galerie">
          <div className={styles.pagination}>
              {Array.from({ length: getTotalPages() }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={getCurrentPage() === index + 1 ? styles.active : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className={styles.imageGallery}>
              {getCurrentImages().map((image, index) => (
                <div className={styles.imageCard} key={index}>
                  <img src={image.src} alt={image.title} />
                  <p>{image.title}</p>
                </div>
              ))}
            </div>
        </Panel>
      </>
    ); 
  }