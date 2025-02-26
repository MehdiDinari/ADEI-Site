import React from "react";
import Card from "../components/Card";
import "../styles/News.css";

const News = () => {
    const articles = [
        {
            id: 1,
            title: "Nouveau partenariat avec XYZ",
            content: "L'ADEI a signé un partenariat avec XYZ pour soutenir nos activités.",
            date: "2023-10-01",
        },
        {
            id: 2,
            title: "Atelier de programmation",
            content: "Un atelier de programmation est organisé le 15 octobre. Inscrivez-vous dès maintenant !",
            date: "2023-10-05",
        },
    ];

    return (
        <div className="news">
            <h1>Actualités</h1>
            <div className="news-list">
                {articles.map((article) => (
                    <Card
                        key={article.id}
                        title={article.title}
                        content={article.content}
                        footer={`Publié le : ${article.date}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default News;