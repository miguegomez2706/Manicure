import "./navbar.css";
import Boton from "../../atoms/Btn";

const Navbar = () => {
  return (
    <div className="navBarContainer mx-44 my-4">
      <div className="Navbarleft">
        <p>Corte&Estilo</p>
      </div>

      <div className="navBarCenterButtons">
        <span>
          <Boton nameButton="Inicio" />
        </span>
        <span>
          <Boton nameButton="Acerda de" />
        </span>
        <span>
          <Boton nameButton="Servicios" />
        </span>
        <span>
          <Boton nameButton="Contacto" />
        </span>
      </div>
      <div className="navBarLastButton">
        <Boton nameButton="Entrar" />
      </div>
    </div>
  );
};

export default Navbar;
