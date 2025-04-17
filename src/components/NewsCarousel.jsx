import React, { useState, useEffect, useRef } from 'react';
import '../styles/NewsCarousel.css';

const NewsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const autoplayRef = useRef(null);

    // Sample news items
    const news = [
        {
            title: "L'ASD MAGAZINE OCTOBRE",
            image: "/assets/images/AZ3-590x550.png",
            link: "/lencgkiste-magazine-octobre/",
            excerpt: "La cinquième édition du magazine L'ENCGKISTE est en fin là ! Enjoy reading.",
            category: "Magazine"
        },
        {
            title: "Les Tendances Marketing en 2025",
            image: "/assets/images/magazine-2.jpg",
            link: "/tendances-marketing-2024/",
            excerpt: "Découvrez les nouvelles stratégies qui façonnent le monde du marketing digital.",
            category: "Business"
        },
        {
            title: "Intelligence Artificielle et Éducation",
            image: "/assets/images/magazine-3.jpg",
            link: "/ia-education-revolution/",
            excerpt: "Comment l'IA transforme les méthodes d'apprentissage et révolutionne l'éducation.",
            category: "Technologie"
        },
        {
            title: "Guide de l'Entrepreneur Moderne",
            image: "/assets/images/magazine-4.jpg",
            link: "/guide-entrepreneur-moderne/",
            excerpt: "Les compétences essentielles et stratégies pour réussir dans le monde des affaires aujourd'hui.",
            category: "Entrepreneuriat"
        },
    ];

    // Calculate total and visible items
    const totalItems = news.length;
    const itemsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const totalPages = Math.ceil(totalItems / itemsToShow);

    // Handle autoplay
    useEffect(() => {
        if (autoplay) {
            autoplayRef.current = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [activeIndex, autoplay]);

    // Navigation functions
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    // Pause autoplay on hover
    const handleMouseEnter = () => setAutoplay(false);
    const handleMouseLeave = () => setAutoplay(true);

    // Touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 70) {
            nextSlide();
        } else if (touchStart - touchEnd < -70) {
            prevSlide();
        }
    };

    // Calculate visible items based on current index
    const getVisibleItems = () => {
        const start = activeIndex * itemsToShow;
        const visibleNews = [];

        for (let i = 0; i < itemsToShow; i++) {
            const index = (start + i) % totalItems;
            visibleNews.push(news[index]);
        }

        return visibleNews;
    };

    return (
        <div className="gt-news-section">
            <h2 className="gt-news-title">Nos Actualités</h2>

            <div
                className="gt-blog-carousel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="gt-carousel-container"
                    style={{ transform: `translateX(-${activeIndex * (100 / totalPages)}%)` }}
                >
                    {news.map((item, index) => (
                        <div key={index} className="gt-post-style-1">
                            <div className="gt-image">
                                <div className="gt-category">{item.category}</div>
                                <a href={item.link}>
                                    <img src={item.image} alt={item.title} />
                                    <div className="gt-overlay">
                                        <div className="gt-read-more">Lire plus</div>
                                    </div>
                                </a>
                            </div>
                            <div className="gt-content">
                                <h3 className="gt-title">
                                    <a href={item.link}>{item.title}</a>
                                </h3>
                                <div className="gt-excerpt">{item.excerpt}</div>
                                <a href={item.link} className="gt-button">Découvrir</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    className="gt-carousel-nav gt-prev"
                    onClick={prevSlide}
                    aria-label="Article précédent"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button
                    className="gt-carousel-nav gt-next"
                    onClick={nextSlide}
                    aria-label="Article suivant"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                {/* Pagination Dots */}
                <div className="gt-carousel-dots">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`gt-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Page ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsCarousel;