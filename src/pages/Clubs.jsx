import '../styles/Clubs.css';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, BookOpen, Info } from 'lucide-react';
import clubsData from "../Utils/clubs.json";

const ClubCard = ({ club, onDetailsClick }) => {
    return (
        <motion.div
            className="club-card-enhanced"
            whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10
            }}
        >
            <div className="club-card-header-enhanced">
                <h3 className="club-title">{club.club}</h3>
            </div>

            <div className="club-card-content-enhanced">
                <div className="club-info-grid">
                    <div className="club-info-item">
                        <User className="club-info-icon" />
                        <div className="club-info-details">
                            <span className="club-info-label">Président</span>
                            <span className="club-info-value">{club.president}</span>
                        </div>
                    </div>

                    <div className="club-info-item">
                        <BookOpen className="club-info-icon" />
                        <div className="club-info-details">
                            <span className="club-info-label">Année d'étude</span>
                            <span className="club-info-value">{club.annees_etude}</span>
                        </div>
                    </div>

                    <div className="club-info-item">
                        <Phone className="club-info-icon" />
                        <div className="club-info-details">
                            <span className="club-info-label">Téléphone</span>
                            <span className="club-info-value">{club.tel}</span>
                        </div>
                    </div>

                    <div className="club-info-item">
                        <Mail className="club-info-icon" />
                        <div className="club-info-details">
                            <span className="club-info-label">Email</span>
                            <span className="club-info-value">{club.email}</span>
                        </div>
                    </div>
                </div>

                <motion.button
                    className="club-details-cta"
                    onClick={onDetailsClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Info size={16} />
                    <span>Plus de détails</span>
                </motion.button>
            </div>
        </motion.div>
    );
};

const ClubDetailsModal = ({ club, onClose }) => {
    return (
        <motion.div
            className="club-details-modal-enhanced"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="club-details-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
            >
                <button className="modal-close-btn" onClick={onClose}>×</button>

                <div className="modal-header">
                    <h2>{club.club}</h2>
                </div>

                <div className="modal-details-grid">
                    <div className="modal-detail-item">
                        <User className="modal-detail-icon" />
                        <div className="modal-detail-info">
                            <span className="modal-detail-label">Président</span>
                            <span className="modal-detail-value">{club.president}</span>
                        </div>
                    </div>

                    <div className="modal-detail-item">
                        <BookOpen className="modal-detail-icon" />
                        <div className="modal-detail-info">
                            <span className="modal-detail-label">Année d'étude</span>
                            <span className="modal-detail-value">{club.annees_etude}</span>
                        </div>
                    </div>

                    <div className="modal-detail-item">
                        <Phone className="modal-detail-icon" />
                        <div className="modal-detail-info">
                            <span className="modal-detail-label">Téléphone</span>
                            <span className="modal-detail-value">{club.tel}</span>
                        </div>
                    </div>

                    <div className="modal-detail-item">
                        <Mail className="modal-detail-icon" />
                        <div className="modal-detail-info">
                            <span className="modal-detail-label">Email</span>
                            <span className="modal-detail-value">{club.email}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Clubs = () => {
    const [selectedClub, setSelectedClub] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    if (!clubsData || clubsData.length === 0) {
        return (
            <motion.div
                className="clubs-container-enhanced"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1 className="clubs-title-enhanced">Aucun Club Disponible</h1>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="clubs-container-enhanced"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1
                className="clubs-title-enhanced"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Nos Clubs Universitaires
            </motion.h1>

            <motion.div
                className="clubs-grid-enhanced"
                variants={containerVariants}
            >
                <AnimatePresence>
                    {clubsData.map((club, index) => (
                        <motion.div
                            key={club.id || index}
                            variants={itemVariants}
                            layout
                        >
                            <ClubCard
                                club={club}
                                onDetailsClick={() => setSelectedClub(club)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {selectedClub && (
                    <ClubDetailsModal
                        key="modal"
                        club={selectedClub}
                        onClose={() => setSelectedClub(null)}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Clubs;