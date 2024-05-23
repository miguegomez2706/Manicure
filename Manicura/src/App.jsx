import "./App.css";
import Boton from "./components/atoms/button.jsx";
import Navbar from "./components/molecules/navbar/navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div>asd</div>

      <h1>Hola amigos, titulo de manicura aqui</h1>
      <Boton nameButton="Hola" />
      <Boton nameButton="Click Me" />
    </>
  );
}

export default App;
