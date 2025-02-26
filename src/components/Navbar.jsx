import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Gestion du scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    ADEI
                </Link>

                {/* Menu pour les écrans larges */}
                <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
                    <li>
                        <Link to="/" onClick={toggleMobileMenu}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/news" onClick={toggleMobileMenu}>
                            Actualités
                        </Link>
                    </li>
                    <li>
                        <Link to="/clubs" onClick={toggleMobileMenu}>
                            Clubs
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" onClick={toggleMobileMenu}>
                            Événements
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMobileMenu}>
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Bouton du menu mobile */}
                <div className="navbar-mobile-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;