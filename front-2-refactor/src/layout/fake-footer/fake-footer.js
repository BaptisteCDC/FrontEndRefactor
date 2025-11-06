import './fake-footer.css';

export function FakeFooter() {
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