import React, { useState, useEffect, useRef } from 'react';
import '../styles/EventSlider.css';

const EventSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const events = [
        {
            title: "Soirée Traditionnelle 2024",
            date: "30 décembre 2024",
            image: "/assets/images/Snapinsta.app_467945921_18362618503189133_1966219285054962254_n_1080.jpg",
            link: "/event/soiree-traditionnelle-2024/",
            description: "Une soirée magique célébrant nos traditions"
        },
        {
            title: "Festival de Musique Amazigh",
            date: "15 janvier 2025",
            image: "/assets/images/festival-amazigh.jpg",
            link: "/event/festival-amazigh-2025/",
            description: "Découvrez les rythmes authentiques de la culture amazigh"
        },
        {
            title: "Exposition d'Art Contemporain",
            date: "22 février 2025",
            image: "/assets/images/expo-art.jpg",
            link: "/event/exposition-art-2025/",
            description: "L'art marocain contemporain dans toute sa splendeur"
        },
        {
            title: "Conférence sur le Patrimoine",
            date: "10 mars 2025",
            image: "/assets/images/conference.jpg",
            link: "/event/conference-patrimoine/",
            description: "Explorer notre héritage culturel unique"
        }
    ];

    // Autoplay functionality
    useEffect(() => {
        startAutoplay();
        return () => clearInterval(intervalRef.current);
    }, [activeSlide]);

    const startAutoplay = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            goToNextSlide();
        }, 6000);
    };

    const resetAutoplay = () => {
        clearInterval(intervalRef.current);
        startAutoplay();
    };

    // Navigation functions
    const goToNextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setActiveSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
            setTimeout(() => setIsTransitioning(false), 1000);
        }
    };

    const goToPrevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setActiveSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
            setTimeout(() => setIsTransitioning(false), 1000);
        }
    };

    const goToSlide = (index) => {
        if (!isTransitioning && index !== activeSlide) {
            setIsTransitioning(true);
            setActiveSlide(index);
            setTimeout(() => setIsTransitioning(false), 1000);
        }
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) {
            goToNextSlide();
        } else if (touchStart - touchEnd < -100) {
            goToPrevSlide();
        }
        resetAutoplay();
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                goToNextSlide();
                resetAutoplay();
            } else if (e.key === 'ArrowLeft') {
                goToPrevSlide();
                resetAutoplay();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isTransitioning]);

    // Pause autoplay on hover
    const handleMouseEnter = () => {
        clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        startAutoplay();
    };

    return (
        <div
            className="gt-events-slider"
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {events.map((event, index) => (
                <div
                    key={index}
                    className={`gt-slide-inner ${index === activeSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${event.image})` }}
                >
                    <div className="gt-opacity"></div>
                    <div className="container">
                        <div className={`gt-content ${index === activeSlide ? 'active' : ''}`}>
                            <div className="gt-badge">Événement</div>
                            <h2 className="gt-title">{event.title}</h2>
                            <p className="gt-description">{event.description}</p>
                            <ul className="gt-information">
                                <li className="gt-date-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>{event.date}</span>
                                </li>
                            </ul>
                            <div className="gt-buttons">
                                <a href={event.link} className="gt-btn-details">
                                    <span>Voir les détails</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation arrows */}
            <button
                className="gt-nav-button gt-prev"
                onClick={() => { goToPrevSlide(); resetAutoplay(); }}
                aria-label="Événement précédent"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button
                className="gt-nav-button gt-next"
                onClick={() => { goToNextSlide(); resetAutoplay(); }}
                aria-label="Événement suivant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            {/* Pagination dots */}
            <div className="gt-pagination">
                {events.map((_, index) => (
                    <button
                        key={index}
                        className={`gt-dot ${index === activeSlide ? 'active' : ''}`}
                        onClick={() => { goToSlide(index); resetAutoplay(); }}
                        aria-label={`Aller à l'événement ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <div className="gt-progress-container">
                <div
                    className="gt-progress-bar"
                    style={{
                        width: `${(activeSlide + 1) / events.length * 100}%`,
                        transition: isTransitioning ? 'width 1s ease' : 'none'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default EventSlider;