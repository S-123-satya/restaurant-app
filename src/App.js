import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/cart/Cart";


function App() {
  return (
    <>
      <Header />
      <main>
        <Meals/>
      </main>
      <Cart/>
    </>
  );
}

export default App;
