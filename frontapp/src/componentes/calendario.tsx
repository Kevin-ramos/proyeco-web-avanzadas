import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    const handleOnChange = (date: Date) => {
        setDate(date);
    };

    return (
        <div>
            <Calendar value={date} onChange={handleOnChange} />
        </div>
    );
};

export default CalendarComponent;
