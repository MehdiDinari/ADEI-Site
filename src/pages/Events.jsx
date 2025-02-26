import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../styles/Events.css'
const Events = () => {
    const [date, setDate] = useState(new Date());

    const events = [
        { id: 1, title: "Réunion des clubs", date: "2023-10-10" },
        { id: 2, title: "Tournoi de football", date: "2023-10-15" },
    ];

    const filteredEvents = events.filter((event) => event.date === date.toISOString().split("T")[0]);

    return (
        <div className="events">
            <h1>Événements à venir</h1>
            <div className="calendar-section">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="event-list">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <div key={event.id} className="event-item">
                            <h3>{event.title}</h3>
                            <p>Date : {event.date}</p>
                        </div>
                    ))
                ) : (
                    <p>Aucun événement prévu pour cette date.</p>
                )}
            </div>
        </div>
    );
};

export default Events;