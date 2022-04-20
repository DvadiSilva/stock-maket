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

  function Display(){
    if(stock){
      
      if(stock.code){
        return(
          <section>
            <h2>{stock.name}</h2>
            <h3>{stock.code}</h3>
            <div>Preco: {stock.price}€</div>
            <div>
              <button onClick={toogleFavorite}>{stock.isFavorite? "Dislike":"Like"}</button>
            </div>
          </section>
        );
      }
      else{
        return (<p>No stock to show</p>);
      }
    }
    else{
      return(<p>Loading...</p>);
    }
  }

  return (
    <Display/>
  )
}
