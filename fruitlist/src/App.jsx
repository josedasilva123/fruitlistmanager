import { useState } from "react";
import FruitCreateForm from "./components/FruitCreateForm"
import FruitList from "./components/FruitList";

function App() {
  const [fruitCart, setFruitCart] = useState([]);
  const [counter, setCounter] = useState(0);

  const addFruit = (fruit) => {
    const newFruit = { ...fruit, id: counter};
    setCounter(counter + 1);
    setFruitCart([...fruitCart, newFruit]);
  }

  const removeFruit = (fruitId) => {
    const newList = fruitCart.filter(fruit => fruit.id !== fruitId);
    setFruitCart(newList);
  }

  /* value * qty */

  const total = fruitCart.reduce((previousValue, currentFruit) => {
    return previousValue + (+currentFruit.value * +currentFruit.qty);
  }, 0)

  return (
    <div className="App">
      <FruitCreateForm addFruit={addFruit} />
      <FruitList fruitCart={fruitCart} removeFruit={removeFruit} />
      <button onClick={() =>  setFruitCart([])}>Remover todos os itens</button>
      <span>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
    </div>
  )
}

export default App
