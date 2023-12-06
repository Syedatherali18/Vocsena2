import React, { useState } from 'react';

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function Calender() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [events, setEvents] = useState([]);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("Social");
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());

    const monthDays = new Date(new Date().getFullYear(), month + 1, 0).getDate();

    const addEvent = () => {
        setEvents([...events, { id: selectedDate + month, description, type }]);
        setDescription("");
    };

    const nextMonth = () => {
        if (month < 11) {
            setMonth(month + 1);
        }
    };

    const prevMonth = () => {
        if (month > 0) {
            setMonth(month - 1);
        }
    };

    const selectDate = (date) => {
        setSelectedDate(date);
    };

    const renderCalendarDays = () => {
        const calendarDays = [];
        for (let i = 1; i <= monthDays; i++) {
            calendarDays.push(
                <div
                    key={i}
                    className={`date_item ${i === selectedDate ? "present" : ""}`}
                    onClick={() => selectDate(i)}
                >
                    {i}
                </div>
            );
        }
        return calendarDays;
    };

    return (
        <div className="calendar">
            <div className="calendar_left">
                <div className="header-calender">
                    <i className="material-icons" onClick={prevMonth}>Previous</i>
                    <h1>{months[month]}</h1>
                    <i className="material-icons" onClick={nextMonth}>Next</i>
                </div>


                <div className="days">
                    <div className="day_item">Mon</div>
                    <div className="day_item">Tue</div>
                    <div className="day_item">Wed</div>
                    <div className="day_item">Thu</div>
                    <div className="day_item">Fri</div>
                    <div className="day_item">Sat</div>
                    <div className="day_item">Sun</div>
                </div>
                <div className="dates">
                    {renderCalendarDays()}
                </div>
            </div>
            <div className="calendar_right">
                <div className="list">
                    <ul>
                        {events.map((event, index) => (
                            <li key={index} className="bounce-in">
                                <span className="type">It's a {event.type} thing -</span>
                                <span className="description">{event.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="form-meeting-container">
                    <form onSubmit={addEvent}>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter a task for this day"
                            type="text"
                        />
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Social">Social</option>
                            <option value="Work">Work</option>
                        </select>
                        <button type="submit">Add</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Calender;
