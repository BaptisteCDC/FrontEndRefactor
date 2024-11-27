import './fake-menu.css'

export function FakeMenu() {
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