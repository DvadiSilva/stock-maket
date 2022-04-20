import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const navigate= useNavigate();

  const [stock, setStock]= useState({
    name:"",
    code:"",
    price: 0
  });

  function handleChange(event){
    const {name, value}= event.target; //obter o name do input e o value e colocar em variáveis

    setStock(prevState=> ({
      ...prevState,
      [name]: value //[] são necessários
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    
    fetch("https://justivo.com/stockws.php?add", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(stock)
    })
    .then(response=> response.json())
    .then(result=> navigate("/detail/"+ result.code)); //redirecionar para a página que quisermos
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
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
            <input type="number" name="price" required min="1" max="99999" onChange={handleChange} value={stock.price}/>
          </label>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </main>
  )
}
