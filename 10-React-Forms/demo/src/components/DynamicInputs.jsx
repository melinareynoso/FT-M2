import React, { useState } from 'react';

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

function DinamicInputs() {  
  const modeloFamiliar = { nombre: '' };
  const [familiar, setFamiliar] = useState([]); // PARA QUE NO ME MUESTRE FAMILIAR #1

/* ME MUESTRA FAMILIAR #1:TGFYFYFO¿D
function DinamicInputs() {  ´}
  const modeloFamiliar = { nombre: '' };
  const [familiar, setFamiliar] = useState([
    { ...modeloFamiliar }, // familiar = [{nombre: ""}]
  ]); 
*/


  const [persona, setPersona] = useState({
    nombre: '', // persona {nombre: ""}
  });

  const agregaFamiliar = () => {
      setFamiliar([...familiar, { ...persona }]); // toma la info que tenia familiar y agrega uno nuevo
      setPersona({nombre:""})
  };



  const handlePersonaChange = (e) => setPersona({
    ...persona,
    [e.target.name]: e.target.value, // nombre: e.target.value --> nombre: "melina"
  });
  // una copia del objeto entero "persona" y sobreescribí el valor que está entre []

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = e => {C
    e.preventDefault()
    console.log(familiar)
  }

  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />  
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {
      familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
              type="text"
              name={`nombre-${i}`}
              id={i}
              data-name="nombre"
              value={el.nombre}
              onChange={handleFamiliarChange}
          />
        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;