
import './App.css'
import Product from './components/Product'
const poduct = [
  {
    id: 1,
    title: "Nirma",
    amount: 240,
    // date: new date(2021, 3, 12),
  },
  {
    id: 3,
    title: "Surf-Excel",
    amount: 150,
    // date: new date(2017, 5, 23),
  },
  {
    id: 3,
    title: "Tide",
    amount: 250,
    // date: new date(2021, 3, 12),
  }
];
function App() {


  return (
    <div>
      <p>Hello jii</p>
      <Product item={poduct} />
    </div>
  )
}

export default App
