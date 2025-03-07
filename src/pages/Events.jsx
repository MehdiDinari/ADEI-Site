import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { Calendar as CalendarIcon, Clock, MapPin, Tag, Search, ChevronRight, Users } from "lucide-react";
import "react-calendar/dist/Calendar.css";
import '../styles/Events.css';

const Events = () => {
    const [date, setDate] = useState(new Date());
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [showAllDescription, setShowAllDescription] = useState({});

    // Liste des événements plus complète avec catégories et détails
    const events = [
        {
            id: 1,
            title: "Réunion générale des clubs",
            date: "2023-10-10",
            time: "14:00 - 16:00",
            location: "Amphi A, Campus Principal",
            category: "réunion",
            description: "Réunion trimestrielle de tous les clubs de l'école pour discuter des projets et événements à venir. Présence obligatoire pour au moins un représentant de chaque club.",
            image: "/api/placeholder/500/300"
        },
        {
            id: 2,
            title: "Tournoi inter-écoles de football",
            date: "2023-10-15",
            time: "09:00 - 18:00",
            location: "Terrain de sport, Campus Sud",
            category: "sport",
            description: "Tournoi annuel regroupant les équipes de football des écoles d'ingénieurs de la région. Venez supporter notre équipe ou participez aux activités organisées en marge du tournoi.",
            image: "/api/placeholder/500/300"
        },
        {
            id: 3,
            title: "Conférence sur l'Intelligence Artificielle",
            date: "2023-10-18",
            time: "15:00 - 17:30",
            location: "Salle de conférence B, Bâtiment Innovation",
            category: "académique",
            description: "Conférence animée par Dr. Ahmed Benali, expert en IA chez Google. Il abordera les dernières avancées en matière d'intelligence artificielle et leurs implications pour les futurs ingénieurs.",
            image: "/api/placeholder/500/300"
        },
        {
            id: 4,
            title: "Atelier CV et préparation aux entretiens",
            date: "2023-10-22",
            time: "10:00 - 12:00",
            location: "Salle 205, Bâtiment Principal",
            category: "carrière",
            description: "Atelier pratique pour vous aider à améliorer votre CV et vous préparer aux entretiens d'embauche. Organisé en partenariat avec le service des stages et de l'insertion professionnelle.",
            image: "/api/placeholder/500/300"
        },
        {
            id: 5,
            title: "Soirée d'intégration",
            date: "2023-10-25",
            time: "20:00 - 01:00",
            location: "Maison des Étudiants",
            category: "social",
            description: "Grande soirée d'intégration pour accueillir les nouveaux étudiants. Au programme : musique, jeux, et bien plus encore ! Entrée gratuite pour les étudiants avec carte d'étudiant.",
            image: "/api/placeholder/500/300"
        },
        {
            id: 6,
            title: "Hackathon Innovation Durable",
            date: "2023-11-04",
            time: "09:00 - 23:59",
            location: "FabLab, Campus Technologique",
            category: "académique",
            description: "48 heures pour concevoir et prototyper des solutions innovantes aux défis environnementaux actuels. Ouvert à tous les étudiants, débutants comme expérimentés.",
            image: "/api/placeholder/500/300"
        },
        {
            id: 7,
            title: "Séminaire sur l'entrepreneuriat",
            date: "2023-11-10",
            time: "13:30 - 16:30",
            location: "Amphithéâtre C, Bâtiment Business",
            category: "carrière",
            description: "Séminaire animé par des entrepreneurs à succès qui partageront leurs expériences et conseils pour lancer sa startup. Inscription préalable nécessaire.",
            image: "/api/placeholder/500/300"
        }
    ];

    // Liste des catégories
    const categories = [
        { id: "all", label: "Tous" },
        { id: "académique", label: "Académique" },
        { id: "sport", label: "Sport" },
        { id: "social", label: "Social" },
        { id: "réunion", label: "Réunion" },
        { id: "carrière", label: "Carrière" }
    ];

    // Filtre les événements selon la date sélectionnée, la catégorie et le terme de recherche
    const filteredEvents = events.filter((event) => {
        const matchDate = event.date === date.toISOString().split("T")[0];
        const matchCategory = activeCategory === "all" || event.category === activeCategory;
        const matchSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchDate && matchCategory && matchSearch;
    });

    // Obtenir les événements à venir (5 prochains jours)
    useEffect(() => {
        const today = new Date();
        const nextFiveDays = new Date(today);
        nextFiveDays.setDate(today.getDate() + 5);

        const upcoming = events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= today && eventDate <= nextFiveDays;
        }).sort((a, b) => new Date(a.date) - new Date(b.date));

        setUpcomingEvents(upcoming.slice(0, 3)); // Limiter à 3 événements
    }, []);

    // Fonction pour formater la date
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    // Fonction pour basculer l'affichage complet de la description
    const toggleDescription = (id) => {
        setShowAllDescription(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Fonctions pour la personnalisation de l'affichage du calendrier
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = date.toISOString().split("T")[0];
            const hasEvent = events.some(event => event.date === dateStr);
            return hasEvent ? 'has-event' : null;
        }
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = date.toISOString().split("T")[0];
            const eventCount = events.filter(event => event.date === dateStr).length;
            return eventCount > 0 ? <div className="event-dot"></div> : null;
        }
    };

    return (
        <div className="events-page">
            <div className="events-hero">
                <div className="events-hero-content">
                    <h1>Événements & Activités</h1>
                    <p>Découvrez tous les événements organisés par l'ADEI et les clubs de l'école</p>
                    <div className="search-bar">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Rechercher un événement..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="events-container">
                <div className="events-sidebar">
                    <div className="calendar-wrapper">
                        <h2><CalendarIcon size={20} /> Calendrier</h2>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            tileClassName={tileClassName}
                            tileContent={tileContent}
                            locale="fr-FR"
                        />
                    </div>

                    <div className="upcoming-events">
                        <h2><ChevronRight size={20} /> À venir</h2>
                        {upcomingEvents.length > 0 ? (
                            <div className="upcoming-list">
                                {upcomingEvents.map(event => (
                                    <div key={event.id} className="upcoming-item">
                                        <div className="upcoming-date">
                                            {new Date(event.date).getDate()}
                                            <span>{new Date(event.date).toLocaleString('fr-FR', { month: 'short' })}</span>
                                        </div>
                                        <div className="upcoming-info">
                                            <h4>{event.title}</h4>
                                            <p><Clock size={14} /> {event.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-events">Aucun événement à venir dans les prochains jours.</p>
                        )}
                    </div>
                </div>

                <div className="events-main">
                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="selected-date">
                        <h2>Événements du {formatDate(date.toISOString().split("T")[0])}</h2>
                    </div>

                    <div className="event-list">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <div key={event.id} className={`event-card ${event.category}`}>
                                    <div className="event-image">
                                        <img src={event.image} alt={event.title} />
                                        <div className="event-category">
                                            <Tag size={14} /> {event.category}
                                        </div>
                                    </div>
                                    <div className="event-details">
                                        <h3>{event.title}</h3>
                                        <div className="event-meta">
                                            <p><CalendarIcon size={16} /> {formatDate(event.date)}</p>
                                            <p><Clock size={16} /> {event.time}</p>
                                            <p><MapPin size={16} /> {event.location}</p>
                                        </div>
                                        <div className="event-description">
                                            <p>
                                                {showAllDescription[event.id]
                                                    ? event.description
                                                    : `${event.description.substring(0, 100)}${event.description.length > 100 ? '...' : ''}`}
                                                {event.description.length > 100 && (
                                                    <button
                                                        className="read-more-btn"
                                                        onClick={() => toggleDescription(event.id)}
                                                    >
                                                        {showAllDescription[event.id] ? 'Voir moins' : 'Voir plus'}
                                                    </button>
                                                )}
                                            </p>
                                        </div>
                                        <div className="event-actions">
                                            <button className="btn-participate">
                                                <Users size={16} />
                                                Je participe
                                            </button>
                                            <button className="btn-details">
                                                Plus d'infos
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-events-container">
                                <CalendarIcon size={50} />
                                <p>Aucun événement ne correspond à vos critères.</p>
                                <button className="btn-reset" onClick={() => {
                                    setDate(new Date());
                                    setActiveCategory("all");
                                    setSearchTerm("");
                                }}>
                                    Réinitialiser les filtres
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;