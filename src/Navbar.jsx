import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './css/Navbar.module.css';

export default function Navbar() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);

  const navRef = useRef();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!navRef.current.contains(event.target)) {
        if (isMenuOpen) setIsMenuOpen(false);
      }
    }
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  const { globalNav, desktopMenu, menuBtn, closeBtn, mobileMenu, mobileMenuLinks } = styles;

  const data = {
    logoPath: '/assets/logo.svg',
    menuBtnPath: '/assets/menu-light.svg',
    menuBtnPathDark: '/assets/menu-dark.svg',
    closeBtnPath: '/assets/close-light.svg',
    closeBtnPathDark: '/assets/close-dark.svg',
    themeBtnPath: '/assets/themeSwitch-light.svg',
    themeBtnPathDark: '/assets/themeSwitch-dark.svg',
    logoAlt: 'Vell moのロゴ',
    menuBtnAlt: 'メニューを開く',
    closeBtnAlt: 'メニューを閉じる',
    logoWidth: '64',
    logoHeight: '30',
    btnWidth: '64',
    btnHeight: '64',
    links: [
      {
        id: 2,
        name: 'About',
        to: '/about',
      },
      {
        id: 3,
        name: 'Price',
        to: '/price'
      },
      {
        id: 4,
        name: 'Products',
        to: '/products'
      },
      {
        id: 5,
        name: 'other',
        to: '/service'
      }
    ]
  }

  const { logoPath, menuBtnPath, menuBtnPathDark,closeBtnPath, closeBtnPathDark, themeBtnPath, themeBtnPathDark, logoAlt, menuBtnAlt, closeBtnAlt, logoWidth, logoHeight, btnWidth, btnHeight, links } = data;

  return (
    <header>
      <nav className={globalNav} ref={navRef}>
        <Link to={'/'}>
          <img src={logoPath} alt={logoAlt} width={logoWidth} height={logoHeight}/>
        </Link>
        <ul className={desktopMenu}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <NavLink 
                  to={link.to} 
                  className={({isActive}) => isActive ? styles.active : ''}>
                  {link.name}
                </NavLink>
              </li>
            )
          })}
          <li>
            <button className="ax-button" onClick={handleThemeClick}>
              {!isDarkTheme && <img src={themeBtnPath} alt="" width="20" height="20" />}
              {isDarkTheme && <img src={themeBtnPathDark} alt="" width="20" height="20" />}
            </button>
          </li>
        </ul>
        <button className={`${menuBtn} ax-button`} onClick={toggleMenu}>
          {!isDarkTheme && <img src={menuBtnPath} alt={isMenuOpen ? closeBtnAlt : menuBtnAlt} width={btnWidth} height={btnHeight} />}
          {isDarkTheme && <img src={menuBtnPathDark} alt={isMenuOpen ? closeBtnAlt : menuBtnAlt} width={btnWidth} height={btnHeight} />}
        </button>
        <div className={`${mobileMenu} ${isMenuOpen ? styles.show : ''}`}>
          <button className={`${closeBtn} ax-button`} onClick={toggleMenu}>
            {!isDarkTheme &&<img src={closeBtnPath} alt={closeBtnAlt} width={btnWidth} height={btnHeight} /> }
            {isDarkTheme && <img src={closeBtnPathDark} alt={closeBtnAlt} width={btnWidth} height={btnHeight} />}
          </button>
          <div className={mobileMenuLinks}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <NavLink to={link.to} onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>{link.name}</NavLink>
                  </li>
                )
              })}
              <li>
              <button className="ax-button" onClick={handleThemeClick}>
                {!isDarkTheme && <img src={themeBtnPath} alt="" width="30" height="30" />}
                {isDarkTheme && <img src={themeBtnPathDark} alt="" width="30" height="30" />}
              </button>
              </li>
            </ul>  
          </div>
        </div>
      </nav>
    </header>
  )
}
