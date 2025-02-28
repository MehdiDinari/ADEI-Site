import React from 'react';
import '../styles/EventCarousel.css';

const EventCarousel = () => {
    const events = [
        {
            title: "Soirée Traditionnelle 2024",
            date: "30 décembre 2024",
            time: "18:00",
            image: "/assets/images/Snapinsta.app_467945921_18362618503189133_1966219285054962254_n_1080.jpg",
            link: "/event/soiree-traditionnelle-2024/",
            excerpt: "La salle des fêtes Ballroom-Waves à Kénitra a accueilli une Soirée Traditionnelle inoubliable..."
        },
        // Ajoutez d'autres événements ici
    ];

    return (
        <div className="gt-events-carousel">
            {events.map((event, index) => (
                <div key={index} className="gt-event-style-3">
                    <div className="gt-image">
                        <a href={event.link}>
                            <img src={event.image} alt={event.title} />
                        </a>
                    </div>
                    <div className="gt-content">
                        <div className="gt-title">
                            <a href={event.link}>{event.title}</a>
                        </div>
                        <div className="gt-details">
                            <div className="gt-date">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span>{event.date}</span>
                            </div>
                            <div className="gt-time">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>{event.time}</span>
                            </div>
                        </div>
                        <div className="gt-text">{event.excerpt}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCarousel;