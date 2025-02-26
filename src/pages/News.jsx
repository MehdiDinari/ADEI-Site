// News.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import "../styles/News.css";
import articlesData from "../Utils/News.json";

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(articlesData);
    }, []);

    return (
        <motion.div
            className="news"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Actualités</h1>
            <div className="news-list">
                {articles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Card
                            title={article.title}
                            content={article.content}
                            footer={`Publié le : ${article.date}`}
                        />
                    </motion.div>
                ))}
            </div>
            <a href="/more-news" className="button-accent">
                Voir plus d'articles
            </a>
        </motion.div>
    );
};

export default News;