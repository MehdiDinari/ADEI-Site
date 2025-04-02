import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import '../styles/EventCarousel.css'

const EventCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    const events = [
        {
            title: "Soirée Traditionnelle 2024",
            date: "30 décembre 2024",
            time: "18:00",
            image: "/assets/images/Snapinsta.app_467945921_18362618503189133_1966219285054962254_n_1080.jpg",
            link: "/event/soiree-traditionnelle-2024/",
            excerpt: "La salle des fêtes Ballroom-Waves à Kénitra a accueilli une Soirée Traditionnelle inoubliable..."
        },
        {
            title: "Festival de Musique Amazigh",
            date: "15 janvier 2025",
            time: "20:00",
            image: "/assets/images/festival-amazigh.jpg",
            link: "/event/festival-amazigh-2025/",
            excerpt: "Célébration de la culture et musique amazigh avec des artistes renommés et émergents..."
        },
        {
            title: "Exposition d'Art Contemporain",
            date: "22 février 2025",
            time: "10:00",
            image: "/assets/images/expo-art.jpg",
            link: "/event/exposition-art-2025/",
            excerpt: "Une collection exceptionnelle d'œuvres d'artistes marocains et internationaux..."
        },
        {
            title: "Conférence sur le Patrimoine",
            date: "10 mars 2025",
            time: "15:30",
            image: "/assets/images/conference.jpg",
            link: "/event/conference-patrimoine/",
            excerpt: "Explorer la richesse du patrimoine culturel marocain et son influence mondiale..."
        }
    ];

    // Timer pour le défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    // Gestion des flèches du clavier
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex]);

    // Navigation du carrousel
    const nextSlide = () => {
        setActiveIndex((current) => (current === events.length - 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setActiveIndex((current) => (current === 0 ? events.length - 1 : current - 1));
    };

    // Support tactile
    const handleTouchStart = (e) => {
        setTouchPosition(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (touchPosition === null) return;

        const diff = touchPosition - e.touches[0].clientX;
        if (diff > 50) {
            nextSlide();
            setTouchPosition(null);
        } else if (diff < -50) {
            prevSlide();
            setTouchPosition(null);
        }
    };

    // Calcul des classes pour les animations
    const getSlideClass = (index) => {
        if (index === activeIndex) return 'gt-event-card active';
        if (index === (activeIndex + 1) % events.length) return 'gt-event-card next';
        if (index === (activeIndex - 1 + events.length) % events.length) return 'gt-event-card prev';
        return 'gt-event-card';
    };

    return (
        <div className="gt-events-carousel-container">
            <h2 className="gt-carousel-title">Événements à venir</h2>

            <div
                className="gt-events-carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {events.map((event, index) => (
                    <div key={index} className={getSlideClass(index)}>
                        <div className="gt-event-content">
                            <div className="gt-image">
                                <a href={event.link}>
                                    <img src={event.image} alt={event.title} />
                                    <div className="gt-image-overlay"></div>
                                </a>
                            </div>
                            <div className="gt-details-container">
                                <div className="gt-title">
                                    <a href={event.link}>{event.title}</a>
                                </div>
                                <div className="gt-details">
                                    <div className="gt-date">
                                        <Calendar size={16} />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="gt-time">
                                        <Clock size={16} />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                                <div className="gt-text">{event.excerpt}</div>
                                <a href={event.link} className="gt-read-more">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                ))}

                <button className="gt-nav-button gt-prev" onClick={prevSlide} aria-label="Événement précédent">
                    <ChevronLeft size={24} />
                </button>

                <button className="gt-nav-button gt-next" onClick={nextSlide} aria-label="Événement suivant">
                    <ChevronRight size={24} />
                </button>

                <div className="gt-carousel-indicators">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            className={`gt-indicator ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Aller à l'événement ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventCarousel;