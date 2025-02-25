const ListaTurnos = ({ turnos }) => {
  return (
    <ul>
      {turnos.map((turno) => (
        <li key={turno.id}>
          {turno.nombre} - {moment(turno.fechaInicio).format("HH:mm")} -{" "}
          {moment(turno.fechaFin).format("HH:mm")}
        </li>
      ))}
    </ul>
  );
};

export default ListaTurnos;
