import { Container } from './styles';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/Manan_Joshi_Resume.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span>{"<Manan "}</span>
        <span>{" Joshi/>"}</span>
      </HashLink>

      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#coding-profiles" onClick={closeMenu}>
          Coding Profiles
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href={Resume} download className="button">
          Resume
        </a>
      </nav>

      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Close menu' : 'Open menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => setActive(!isActive)}
      ></div>
    </Container>
  );
}
