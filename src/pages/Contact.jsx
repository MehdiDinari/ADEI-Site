import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Merci pour votre message ! Nous vous répondrons bientôt.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact">
            <h1>Contactez-nous</h1>
            <div className="contact-info">
                <p>Email : contact@adei.com</p>
                <p>Téléphone : +123 456 789</p>
                <p>Adresse : 123 Rue de l'École, Ville, Pays</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;