export default function Home({stocks}) {

  return (
    <main className="Home">
      {stocks.map((stock, index)=>(
          <section key={index}>
            <h2>{stock.name}</h2>
            <h3>{stock.code}</h3>
            <div>Preco: {stock.price}€</div>
          </section>
        ))
      }
    </main>
    
  )
}
