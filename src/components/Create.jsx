import React from 'react'

export default function Create() {

  function handleChange(event){
    console.log("handleChange: ", event.target.value);
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
            <input type="text" name="name" required minLength="4" maxLength="60" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Code
            <input type="text" name="code" required minLength="3" maxLength="3" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Price
            <input type="number" name="price" required minLength="1" maxLength="99999" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </main>
  )
}
