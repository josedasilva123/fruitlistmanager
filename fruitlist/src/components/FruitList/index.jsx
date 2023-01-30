import React from 'react'

const FruitList = ({fruitCart, removeFruit}) => {
  return (
    <ul>
        {fruitCart.map(fruit => (
            <li key={fruit.id} className={fruit.value > 3 ? 'fruit expensive' : 'fruit cheap'}>
                <h3>{fruit.name}</h3>
                <p>{fruit.value}</p>
                <p>{fruit.qty}</p>
                <button onClick={() => removeFruit(fruit.id)}>Remover</button>
            </li>
        ))}
    </ul>    
  )
}

export default FruitList