import React from 'react';
import '../styles/NewsLetter.css';

const Newsletter = () => {
    return (
        <div className="gt-mailchimp-newsletter gt-dark">
            <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-306" method="post" data-id="306" data-name="Eventchamp">
                <div className="mc4wp-form-fields">
                    <div className="gt-columns">
                        <div className="gt-col">
                            <div className="gt-inner">
                                <input type="email" name="EMAIL" placeholder="Veuillez saisir votre email" required />
                            </div>
                            <div className="gt-inner">
                                <button type="submit">S'INSCRIRE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;