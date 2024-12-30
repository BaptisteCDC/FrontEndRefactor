import { Link } from 'react-router-dom';
import './fake-menu.css'

export function FakeMenu() {
    return (
      <nav className="fake-menu">
        <ul>
          <li><a href="#home">Accueil</a></li>
          <Link to="/about-us">A propos</Link>
          <li><a href="#services">Services</a></li>
          <Link to="/gallery">Galerie</Link>
          <Link to="/contact-us">Contact</Link>
        </ul>
      </nav>
    );
}