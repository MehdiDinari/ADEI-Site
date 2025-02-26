import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import clubsData from "../Utils/clubs.json";
import '../styles/Clubs.css';

const Clubs = () => {
    return (
        <motion.div
            className="clubs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Nos Clubs</h1>
            <div className="club-list">
                {clubsData.map((club, index) => (
                    <motion.div
                        key={club.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Card
                            title={club.club}
                            content={
                                <div className="card-content">
                                    <p><strong>Président:</strong> {club.president}</p>
                                    <p><strong>Année d'étude:</strong> {club.annees_etude}</p>
                                    <p><strong>Téléphone:</strong> {club.tel}</p>
                                    <p><strong>Email:</strong> {club.email}</p>
                                </div>
                            }
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Clubs;