import React, { useState } from 'react';

const TurnForm = ({ onGuardar }) => {
  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({ nombre, fechaInicio, fechaFin });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
    </form>
  );
};

export default TurnForm;