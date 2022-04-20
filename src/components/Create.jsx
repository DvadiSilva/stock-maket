import React, { useState } from 'react'

export default function Create() {

  const [stock, setStock]= useState({
    name:"",
    code:"",
    price: 0
  });

  

  function handleChange(event){
    console.log("handleChange: ", event.target.value);
    const {name, value}= event.target; //obter o name do input e o value e colocar em variáveis

    setStock(prevState=> ({
      ...prevState,
      [name]: value //[] são necessários
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit: ");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome
            <input type="text" name="name" required minLength="4" maxLength="60" onChange={handleChange} value={stock.name}/>
          </label>
        </div>
        <div>
          <label>
            Code
            <input type="text" name="code" required minLength="3" maxLength="3" onChange={handleChange} value={stock.code}/>
          </label>
        </div>
        <div>
          <label>
            Price
            <input type="number" name="price" required minLength="1" maxLength="99999" onChange={handleChange} value={stock.price}/>
          </label>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </main>
  )
}
