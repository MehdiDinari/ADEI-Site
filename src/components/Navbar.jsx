import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    const navbarRef = useRef(null);
    const logoRef = useRef(null);
    const linkRefs = useRef([]);

    // Mettre à jour le lien actif basé sur la route
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    // Gestion du scroll avec effet parallaxe
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setIsScrolled(true);
                if (navbarRef.current) {
                    navbarRef.current.style.backdropFilter = `blur(${Math.min(10, scrollPosition * 0.05)}px)`;
                    navbarRef.current.style.background = `rgba(13, 17, 23, ${Math.min(0.95, scrollPosition * 0.002)})`;
                }
                if (logoRef.current) {
                    logoRef.current.style.transform = `scale(${Math.max(0.8, 1 - scrollPosition * 0.0005)})`;
                }
            } else {
                setIsScrolled(false);
                if (navbarRef.current) {
                    navbarRef.current.style.backdropFilter = "blur(0px)";
                    navbarRef.current.style.background = "transparent";
                }
                if (logoRef.current) {
                    logoRef.current.style.transform = "scale(1)";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation de l'indicateur de menu
    const menuIndicator = (e) => {
        const indicator = document.querySelector(".menu-indicator");
        const targetLink = e.currentTarget;
        const rect = targetLink.getBoundingClientRect();
        const containerRect = document.querySelector(".navbar-links").getBoundingClientRect();

        if (indicator) {
            indicator.style.width = `${rect.width}px`;
            indicator.style.left = `${rect.left - containerRect.left}px`;
        }
    };

    // Réinitialiser l'indicateur lorsque la souris quitte le menu
    const resetIndicator = () => {
        const indicator = document.querySelector(".menu-indicator");
        const activeElement = document.querySelector(`.navbar-links a[href='${activeLink}']`);

        if (indicator && activeElement) {
            const rect = activeElement.getBoundingClientRect();
            const containerRect = document.querySelector(".navbar-links").getBoundingClientRect();
            indicator.style.width = `${rect.width}px`;
            indicator.style.left = `${rect.left - containerRect.left}px`;
        }
    };

    // Initialiser la position de l'indicateur après le chargement
    useEffect(() => {
        if (!isMobileMenuOpen) {
            setTimeout(() => {
                const activeElement = document.querySelector(`.navbar-links a[href='${activeLink}']`);
                if (activeElement) {
                    const rect = activeElement.getBoundingClientRect();
                    const containerRect = document.querySelector(".navbar-links")?.getBoundingClientRect();
                    if (containerRect) {
                        const indicator = document.querySelector(".menu-indicator");
                        if (indicator) {
                            indicator.style.width = `${rect.width}px`;
                            indicator.style.left = `${rect.left - containerRect.left}px`;
                            indicator.style.opacity = "1";
                        }
                    }
                }
            }, 100);
        }
    }, [activeLink, isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Empêcher le défilement du body quand le menu est ouvert
        document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "";
    };

    // Les liens du menu
    const navLinks = [
        { path: "/", label: "Accueil" },
        { path: "/news", label: "Actualités" },
        { path: "/clubs", label: "Clubs" },
        { path: "/events", label: "Événements" },
        { path: "/about", label: "À propos" },
        { path: "/contact", label: "Contact" }
    ];

    return (
        <nav
            ref={navbarRef}
            className={`navbar ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}
        >
            <div className="navbar-container">
                {/* Logo avec animation */}
                <Link to="/" className="navbar-logo" ref={logoRef}>
                    <div className="logo-wrapper">
                        <img src="/Images/adei.png" alt="Logo ADEI" className="logo-img" />
                        <div className="logo-glow"></div>
                    </div>
                </Link>

                {/* Élément décoratif */}
                <div className="navbar-decorator"></div>

                {/* Menu pour les écrans larges */}
                <div className="navbar-menu-container">
                    <ul
                        className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}
                        onMouseLeave={resetIndicator}
                    >
                        <div className="menu-indicator"></div>
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className={activeLink === link.path ? "active" : ""}
                                style={{ transitionDelay: `${index * 0.05}s` }}
                                ref={el => (linkRefs.current[index] = el)}
                            >
                                <Link
                                    to={link.path}
                                    onClick={() => {
                                        setActiveLink(link.path);
                                        closeMobileMenu();
                                    }}
                                    onMouseEnter={menuIndicator}
                                    className={activeLink === link.path ? "active" : ""}
                                >
                                    <span className="link-text">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bouton d'action */}
                <div className="navbar-action">
                    <Link to="/join" className="action-button">
                        <span className="button-text">Rejoindre</span>
                        <span className="button-glow"></span>
                    </Link>
                </div>

                {/* Bouton du menu mobile avec animation */}
                <button
                    className={`navbar-mobile-icon ${isMobileMenuOpen ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <div className="burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Overlay de fond pour le menu mobile */}
            <div
                className={`menu-backdrop ${isMobileMenuOpen ? "active" : ""}`}
                onClick={closeMobileMenu}
            ></div>
        </nav>
    );
};

export default Navbar;