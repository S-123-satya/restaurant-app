import "./App.css";
import Header from "./components/Layout/Header";
import MealsItems from "./components/cart/MealsItems";
import MealsSummary from "./components/cart/MealsSummary";

function App() {
  return (
    <>
      <Header />
      <MealsSummary />
      <MealsItems/>
    </>
  );
}

export default App;
