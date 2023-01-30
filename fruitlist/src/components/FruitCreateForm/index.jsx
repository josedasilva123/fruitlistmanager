import React, { useState } from 'react'

/*
name, value, qty
*/

/* todo input entrega uma "string" */

const FruitCreateForm = ({ addFruit }) => {
  const [name, setName] = useState("");  /* capturar o valor */
  const [value, setValue] = useState("");
  const [qty, setQty] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const newFruit = { name, value, qty };

    addFruit(newFruit);

    setName("");
    setValue("");
    setQty("");
  }
 /* onChange : cada vez que eu digitar, apagar, alterar o valor do input, ele vai dispara */

  return (
    <form onSubmit={submit}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} />
        <input type="number" placeholder="Quantidade" value={qty} onChange={(e) => setQty(e.target.value)} />
        <button type="submit">Adicionar fruta</button>
    </form>    
  )
}

export default FruitCreateForm