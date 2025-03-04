import React, { useState } from 'react';
import '../styles/NewsLetter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation simple d'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setIsError(true);
            return;
        }

        // Simuler l'envoi du formulaire
        setIsSubscribed(true);
        setIsError(false);
    };

    return (
        <div className="gt-mailchimp-newsletter gt-dark">
            {!isSubscribed ? (
                <form
                    id="mc4wp-form-1"
                    className="mc4wp-form mc4wp-form-306"
                    method="post"
                    data-id="306"
                    data-name="Eventchamp"
                    onSubmit={handleSubmit}
                >
                    <div className="mc4wp-form-fields">
                        <h2 className="newsletter-title">Restez informé de nos dernières actualités</h2>
                        <p className="newsletter-description">Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives et nos dernières nouvelles directement dans votre boîte de réception.</p>

                        <div className="gt-columns">
                            <div className="gt-col">
                                <div className="gt-inner">
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Veuillez saisir votre email"
                                        required
                                        className={isError ? 'input-error' : ''}
                                    />
                                    {isError && <span className="error-message">Veuillez saisir un email valide</span>}
                                </div>
                                <div className="gt-inner">
                                    <button type="submit">S'INSCRIRE</button>
                                </div>
                            </div>
                        </div>

                        <div className="newsletter-privacy">
                            <p>En vous inscrivant, vous acceptez notre <a href="/privacy-policy">politique de confidentialité</a></p>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="subscription-success">
                    <div className="success-icon">✓</div>
                    <h2>Merci pour votre inscription!</h2>
                    <p>Vous recevrez bientôt nos actualités et offres exclusives.</p>
                </div>
            )}
        </div>
    );
};

export default Newsletter;