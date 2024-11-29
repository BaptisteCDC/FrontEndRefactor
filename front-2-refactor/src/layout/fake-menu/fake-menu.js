import { Link } from 'react-router-dom';
import './fake-menu.css'

export function FakeMenu() {
    return (
      <nav className="fake-menu">
        <ul>
          <Link to="/gallery">Accueil</Link>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <Link to="/contact-us">Contact</Link>
        </ul>
      </nav>
    );
}