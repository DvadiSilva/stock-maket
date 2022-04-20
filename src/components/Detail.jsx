import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const params= useParams();
  const [stock, setStock]= useState();

  useEffect(()=>{

    fetch("https://justivo.com/stockws.php?get&code="+ params.code)
    .then(response=> response.json())
    .then(dataReceived=> setStock(dataReceived));

  }, [params]);

  function toogleFavorite(){
    setStock(prevState=> ({
      ...prevState, //coloca tudo o que já estava igual para não se perder
      isFavorite: !prevState.isFavorite   //e alterar apenas o que queremos
    }));
  }

  return (
    <div>
      {stock && (
        <section>
          <h2>{stock.name}</h2>
          <h3>{stock.code}</h3>
          <div>Preco: {stock.price}€</div>
          <div>
            <button onClick={toogleFavorite}>{stock.isFavorite? "Desfavoritar":"Favoritar"}</button>
          </div>
        </section>
      )}
    </div>
  )
}
