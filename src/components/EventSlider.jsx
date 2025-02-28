import React from 'react';
import '../styles/EventSlider.css';

const EventSlider = () => {
    const events = [
        {
            title: "Soirée Traditionnelle 2024",
            date: "30 décembre 2024",
            image: "/assets/images/Snapinsta.app_467945921_18362618503189133_1966219285054962254_n_1080.jpg",
            link: "/event/soiree-traditionnelle-2024/"
        },
        // Ajoutez d'autres événements ici
    ];

    return (
        <div className="gt-events-slider">
            {events.map((event, index) => (
                <div key={index} className="gt-slide-inner" style={{ backgroundImage: `url(${event.image})` }}>
                    <div className="gt-opacity"></div>
                    <div className="container">
                        <div className="gt-content">
                            <div className="gt-title">{event.title}</div>
                            <ul className="gt-information">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>{event.date}</span>
                                </li>
                            </ul>
                            <div className="buttons">
                                <a href={event.link}><span>détails</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventSlider;