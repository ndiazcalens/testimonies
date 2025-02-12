import React from "react";
import './App.css';
import Testimony from "./components/testimony";
import tesData from "./data/tesData.json";


function App() {
  return (
    <div className="App">
      <div className="principal-container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>

        {/* Usando map, conseguimos el mismo resultado pero invocando 1 sola vez el componente <Testimony />, y no tenemos que indicarle manualmente el índice del objeto que queremos mostrar en cada caso. */}

        {tesData.map((item, index) => { // "map" es idéntico al "forEach", únicamente que "map" MODIFICA el array original, mientras que "forEach" NO lo hace. En react se usa para renderizar elementos de un array.
          return (
            <Testimony
              key={index} // key es un atributo especial que se necesita para que React pueda identificar de manera única a cada elemento de la lista. Si no se pone, React mostrará un warning en la consola. Es OBLIGATORIO.
              image={item.image}
              name={item.name}
              country={item.country}
              job={item.job}
              company={item.company}
              testimony={item.testimony}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
