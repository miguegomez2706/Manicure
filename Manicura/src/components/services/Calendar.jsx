import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';

const Calendar = () => {
  const [turnos, setTurnos] = useState([]);

  const handleDateClick = (info) => {
    // Lógica para mostrar el formulario de turno
  };

  const handleEventClick = (info) => {
    // Lógica para editar o eliminar un turno
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="adyGridMonth"
      events={turnos.map((turno) => ({
        title: turno.nombre,
        start: turno.fechaInicio,
        end: turno.fechaFin,
      }))}
      dateClick={handleDateClick}
      eventClick={handleEventClick}
    />
  );
};

export default Calendar;