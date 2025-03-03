// News.js
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/News.css";
import articlesData from "../Utils/News.json";

const News = () => {
    const [articles, setArticles] = useState([]);
    const [currentArticle, setCurrentArticle] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        setArticles(articlesData);

        // Effet parallaxe au déplacement de la souris
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const { left, top, width, height } = containerRef.current.getBoundingClientRect();
                const x = ((e.clientX - left) / width) - 0.5;
                const y = ((e.clientY - top) / height) - 0.5;

                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Rotation automatique des articles en vedette
        const interval = setInterval(() => {
            setCurrentArticle(prev => (prev + 1) % articles.length);
        }, 5000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [articles.length]);

    // Variation des animations basée sur la position de la souris
    const getParallaxStyle = (depth = 1) => {
        return {
            transform: `translate(${mousePosition.x * depth * 30}px, ${mousePosition.y * depth * 30}px)`
        };
    };

    // Animations pour les éléments principaux
    const mainVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Gestion du clic pour le changement d'article
    const handleNext = () => {
        setCurrentArticle(prev => (prev + 1) % articles.length);
    };

    const handlePrev = () => {
        setCurrentArticle(prev => (prev - 1 + articles.length) % articles.length);
    };

    return (
        <div className="news-page" ref={containerRef}>
            {/* Éléments de décoration de fond */}
            <div className="news-background">
                <div className="gradient-sphere sphere-1" style={getParallaxStyle(0.5)}></div>
                <div className="gradient-sphere sphere-2" style={getParallaxStyle(0.3)}></div>
                <div className="gradient-sphere sphere-3" style={getParallaxStyle(0.7)}></div>
                <div className="grid-pattern"></div>
            </div>

            {/* En-tête avec titre animé */}
            <motion.div
                className="news-header-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="header-content">
                    <motion.div
                        className="news-header"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="news-title">
                            Actualités
                            <span className="glowing-badge">ADEI</span>
                        </h1>
                        <p className="news-subtitle">Restez informé des dernières actualités et événements</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Section d'article en vedette */}
            <motion.section
                className="featured-section"
                variants={mainVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="featured-header" variants={itemVariants}>
                    <h2>À la une</h2>
                    <div className="featured-controls">
                        <button
                            className="control-button prev-button"
                            onClick={handlePrev}
                            aria-label="Article précédent"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5"
                                      stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <div className="featured-pagination">
                            {articles.map((_, index) => (
                                <span
                                    key={index}
                                    className={`pagination-dot ${index === currentArticle ? 'active' : ''}`}
                                    onClick={() => setCurrentArticle(index)}
                                ></span>
                            ))}
                        </div>
                        <button
                            className="control-button next-button"
                            onClick={handleNext}
                            aria-label="Article suivant"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                      stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </motion.div>

                <div className="featured-carousel">
                    <AnimatePresence mode="wait">
                        {articles.length > 0 && (
                            <motion.div
                                key={currentArticle}
                                className="featured-article"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="featured-content">
                                    <span className="featured-date">{articles[currentArticle]?.date}</span>
                                    <h3 className="featured-title">{articles[currentArticle]?.title}</h3>
                                    <p className="featured-excerpt">{articles[currentArticle]?.content.substring(0, 150)}...</p>
                                    <Link to={`/news/${articles[currentArticle]?.id}`} className="read-more-link">
                                        <span>Lire la suite</span>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                                  stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>

                                <div className="featured-image-container">
                                    <div className="image-overlay"></div>
                                    <div className="image-placeholder" style={getParallaxStyle(0.2)}>
                                        <div className="image-content">
                                            <div className="image-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 12H21M21 12L18 9M21 12L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.section>

            {/* Liste des actualités récentes */}
            <motion.section
                className="recent-news-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <div className="section-header">
                    <h2>Actualités récentes</h2>
                    <div className="header-line"></div>
                </div>

                <motion.div
                    className="news-grid"
                    initial="hidden"
                    animate="visible"
                    variants={mainVariants}
                >
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            className="news-card"
                            variants={itemVariants}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            whileHover={{
                                y: -15,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                }
                            }}
                        >
                            <div className="card-content">
                                <span className="news-date">{article.date}</span>
                                <h3 className="news-card-title">{article.title}</h3>
                                <p className="news-excerpt">{article.content.substring(0, 100)}...</p>
                                <Link to={`/news/${article.id}`} className="card-link">
                                    <span>Voir l'article</span>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                              stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="card-shine"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bouton d'action principal */}
                <motion.div
                    className="news-cta"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link to="/more-news" className="explore-button">
                        <div className="button-glow"></div>
                        <span className="button-text">Tous les articles</span>
                        <span className="button-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                      stroke="currentColor" strokeWidth="3"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </Link>
                </motion.div>
            </motion.section>

            {/* Bouton flottant d'abonnement à la newsletter */}
            <motion.div
                className="newsletter-button"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="pulse-effect"></div>
                <span>Newsletter</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C22 7.1 21.1 8 20 8H4C2.9 8 2 7.1 2 6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6Z" fill="currentColor"/>
                    <path d="M22 12C22 13.1 21.1 14 20 14H4C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10H20C21.1 10 22 10.9 22 12Z" fill="currentColor"/>
                    <path d="M14 20H4C2.9 20 2 19.1 2 18C2 16.9 2.9 16 4 16H14C15.1 16 16 16.9 16 18C16 19.1 15.1 20 14 20Z" fill="currentColor"/>
                </svg>
            </motion.div>
        </div>
    );
};

export default News;