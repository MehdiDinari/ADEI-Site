import React from 'react';
import '../styles/NewsCarousel.css';

const NewsCarousel = () => {
    const news = [
        {
            title: "L’ASD MAGAZINE OCTOBRE",
            image: "/assets/images/AZ3-590x550.png",
            link: "/lencgkiste-magazine-octobre/",
            excerpt: "La cinquième édition du magazine L’ENCGKISTE est en fin là ! Enjoy reading."
        },
        // Ajoutez d'autres nouvelles ici
    ];

    return (
        <div className="gt-blog-carousel">
            {news.map((item, index) => (
                <div key={index} className="gt-post-style-1">
                    <div className="gt-image">
                        <a href={item.link}>
                            <img src={item.image} alt={item.title} />
                        </a>
                    </div>
                    <div className="gt-title">
                        <a href={item.link}>{item.title}</a>
                    </div>
                    <div className="gt-excerpt">{item.excerpt}</div>
                </div>
            ))}
        </div>
    );
};

export default NewsCarousel;