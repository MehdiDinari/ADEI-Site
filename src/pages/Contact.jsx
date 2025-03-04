import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';
// Importez les icônes avec la bibliothèque de votre choix (Lucide, Font Awesome, etc.)

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [animateItems, setAnimateItems] = useState(false);

    useEffect(() => {
        // Déclencher les animations après le montage du composant
        setTimeout(() => {
            setAnimateItems(true);
        }, 100);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simuler la soumission du formulaire
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            // Réinitialiser le message de succès après 3 secondes
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 500);
    };

    return (
        <div className="contact-page">
            {/* En-tête */}
            <div className={`header ${animateItems ? 'animate' : ''} delay-100`}>
                <h1>Contactez-Nous</h1>
                <div className="header-underline"></div>
                <p>Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou information.</p>
            </div>

            <div className="contact-grid">
                {/* Formulaire de contact */}
                <div className={`card ${animateItems ? 'animate' : ''} delay-200`}>
                    <h2>Envoyez-nous un message</h2>

                    {isSubmitted ? (
                        <div className="success-message">
                            Merci pour votre message ! Nous vous répondrons très bientôt.
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
              <textarea
                  name="message"
                  placeholder="Votre message"
                  rows="5"
                  className="form-input"
                  value={formData.message}
                  onChange={handleChange}
                  required
              ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            <span>Envoyer</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m22 2-7 20-4-9-9-4ZM22 2 11 13"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;