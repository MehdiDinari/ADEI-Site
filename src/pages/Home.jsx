import React from 'react';
import Header from '../components/Header';
import EventSlider from '../components/EventSlider';
import NewsCarousel from '../components/NewsCarousel';
import EventCarousel from '../components/EventCarousel';
import NewsLetter from '../components/NewsLetter';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="gt-site-wrapper">
            <Header />
            <EventSlider />
            <NewsCarousel />
            <EventCarousel />
            <NewsLetter />
        </div>
    );
};

export default Home;