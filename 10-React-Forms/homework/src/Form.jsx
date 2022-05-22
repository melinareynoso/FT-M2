import React from 'react';

export function validate(input){
  let error = {};
  if(!input.username){
    error.username = "Username is required";
  }else if (!/\S+@\S+\.\S+/.test(input.username)) {
      error.username = 'Username is invalid';
  }

  if(!input.password){
    error.password = "Password is required";
  }else if(!/(?=.*[0-9])/.test(input.password)){
    error.password = "Password is invalid";
  }

  return error;
}

export default function  Form() {


  let [input, setInput] = React.useState({
    username: "",
    password: ""
  });

  let [error, setError] = React.useState({

  });

  let handleInputChange = (e) => {

    //setInput({...input, [e.target.name]: e.target.value})
    // lo de la linea de arriba es lo mismo que lo de abajo

    setInput( (prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // [e.target.name] --> manipular dos inputs distinos con la misma funcion
    // obtiene el nombre del atributo "name" del input que coincide con la propiedad del objeto del estado
  
    let ObjError = validate({...input, [e.target.name]: e.target.value});
    setError(ObjError);
  };



  return (
      <form>
        <div>
          <label>Username:</label>
          <input 
            type="text"
            name="username"
            onChange={handleInputChange} 
            value={input.username}
            className={error.username && "danger"}
          />
            {
              error.username && (<p>{error.username}</p>)
            }
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            onChange={handleInputChange} 
            value={input.password}
            className={error.password && "danger"}
          />
           {
             error.password && (<p>{error.password}</p>)
           }
        </div>

        <div>
        <input type="submit" />
        </div>

      </form>
  )
}
