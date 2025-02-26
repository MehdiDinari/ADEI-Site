import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/news">Actualités</Link>
                <Link to="/clubs">Clubs</Link>
                <Link to="/events">Événements</Link>
                <Link to="/about">À propos</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;