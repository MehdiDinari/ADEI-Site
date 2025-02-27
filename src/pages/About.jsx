import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about">
            <h1 className="about-title">À propos de l'ADEI</h1>

            {/* Section 1: Objectifs de l'association */}
            <section className="about-section fade-in">
                <h2>Objectifs de l'ADEI</h2>
                <p>
                    Notre association d'étudiants a pour objectif l'unification des élèves ingénieurs, tout en facilitant leurs déplacements et en organisant des événements éducatifs annuels. Pour atteindre cet objectif, nous comptons sur le soutien des entreprises engagées dans le bien-être et le développement des populations, et ayant une vision à long terme du sponsoring, bénéfique pour la formation des futurs cadres dans la société en général, et dans les entreprises en particulier, telles que la vôtre.
                </p>
                <p>
                    Comme vous le savez, ces activités engendrent des coûts, c'est pourquoi nous sommes actuellement à la recherche de sponsors pour les mener à bien. Nous sommes à votre entière disposition pour convenir d'une rencontre à une date de votre choix, afin de discuter plus en détail d'une éventuelle collaboration.
                </p>
            </section>

            {/* Section 2: Présentation de Fès */}
            <section className="about-section fade-in">
                <h2>Fès, une ville impériale</h2>
                <p>
                    Nichée au cœur du Maroc, Fès, l'une des quatre villes impériales du pays, est un joyau vibrant où l'histoire et la culture explosent à chaque coin de rue. Fondée au VIIIe siècle, la ville se drape fièrement du manteau de son passé millénaire. Son cœur battant est Fès el-Bali, un labyrinthe médiéval classé au patrimoine mondial de l'UNESCO et le plus grand quartier piétonnier du monde.
                </p>
                <p>
                    Imaginez-vous déambulant dans des ruelles étroites et sinueuses, les murs ocres baignés par le soleil, tandis que des arcs en fer à cheval donnent accès à des riads secrets et des boutiques d'artisans débordantes de babouches colorées, de tapis berbères et d'épices aux parfums envoûtants. L'air lui-même raconte une histoire, imprégné des effluves des tanneries traditionnelles de Chouara, où des cuves colorées témoignent d'un savoir-faire ancestral transmis de génération en génération.
                </p>
                <p>
                    Au détour d'une rue, vous tomberez nez-à-nez avec la majestueuse Université Al-Qarawiyyin, fondée en 859 et considérée comme la plus ancienne université en activité continue au monde. Fès est un kaléidoscope pour les sens, une ville où le passé et le présent se côtoient en parfaite harmonie, offrant une expérience inoubliable à tous ceux qui osent s'y perdre.
                </p>
            </section>

            {/* Section 3: Présentation de l'USMBA */}
            <section className="about-section fade-in">
                <h2>L'Université Sidi Mohamed Ben Abdellah (USMBA)</h2>
                <p>
                    L'Université Sidi Mohamed Ben Abdellah (USMBA) est une université publique marocaine située à Fès, l'une des villes impériales du Maroc. Fondée en 1975, elle est l'une des plus grandes universités du pays avec plus de 40 000 étudiants et 1 500 enseignants-chercheurs. L'USMBA est composée de 12 établissements d'enseignement supérieur, notamment :
                </p>
                <ul>
                    <li>École nationale des sciences appliquées (ENSA)</li>
                    <li>École Nationale de Commerce et de Gestion (ENCG)</li>
                    <li>Faculté des Sciences Juridiques, Économiques et Sociales</li>
                    <li>Faculté des Lettres et des Sciences Humaines</li>
                    <li>Faculté des Arts et des Sciences de l'Information et de la Communication</li>
                </ul>
                <p>
                    L'USMBA se concentre sur la formation, la recherche, l'innovation et le développement territorial.
                </p>
            </section>

            {/* Section 4: Présentation de l'ENSA Fès */}
            <section className="about-section fade-in">
                <h2>L'École Nationale Supérieure d'Ingénieurs de Fès (ENSA Fès)</h2>
                <p>
                    L'École Nationale Supérieure d'Ingénieurs de Fès (ENSA Fès) est une grande école d'ingénieurs marocaine publique située à Fès, l'une des villes impériales du Maroc. Créée en 2005, elle est rattachée à l'Université Sidi Mohamed Ben Abdellah (USMBA). L'ENSA Fès est membre de la Conférence des grandes Écoles (CGE) et est reconnue pour la qualité de sa formation et ses liens étroits avec le monde socio-économique.
                </p>
                <p>
                    Parmi les atouts de l'ENSA Fès, on trouve :
                </p>
                <ul>
                    <li>Une formation d'ingénieurs de haut niveau</li>
                    <li>Un environnement pédagogique et scientifique de qualité</li>
                    <li>Des liens étroits avec le monde socio-économique</li>
                    <li>Une ouverture à l'international</li>
                </ul>
                <p>
                    L'ENSA Fès compte plus de 3 000 étudiants, plus de 200 enseignants-chercheurs, plus de 50 laboratoires de recherche et plus de 100 partenariats avec des entreprises et des institutions. Son taux d'insertion professionnelle dépasse les 90%.
                </p>
            </section>

            {/* Section 5: Présentation de l'ADEI */}
            <section className="about-section fade-in">
                <h2>L'ADEI, Association des Élèves Ingénieurs</h2>
                <p>
                    L'ADEI, Association des Élèves Ingénieurs, incarne l'esprit de collaboration et de soutien au sein de l'ENSAF. En tant qu'association à but non lucratif, elle s'engage à faciliter la communication entre les élèves et l'administration, tout en veillant à répondre aux besoins de chacun. Gérée avec dévouement par des étudiants de l'ENSAF, son objectif principal est d'orchestrer et de coordonner les activités parascolaires, enrichissant ainsi l'expérience éducative de tous les membres de la communauté estudiantine.
                </p>
            </section>
        </div>
    );
};

export default About;