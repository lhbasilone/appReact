import logo from './logo.svg';
import './App.css';

function App() {





const boton = <button>Kamehameha</button>

const nombre = "Goku"

const estilos = {
  color: "blue",
  backgroundColor: "orange",
  padding: 20,
}




  return (
    <div className="App">
<h1>Hola! soy {nombre}</h1>
<strong style={estilos} >Este es un </strong>
 {boton}
<li>peraa</li>
<li>manzana</li>
<li>bananadd/li>
<li>narana</li>
<li>frutilla</li>

    </div>
  );
}

export default App;
