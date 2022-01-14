import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CardProvider from "./store/card-provider";
function App() {
  const [cardAppears, setCardAppears] = useState(false);

  const displayCard = () => {
    setCardAppears(true);
  };

  const hideCard = () => {
    setCardAppears(false);
  };
  return (
    <CardProvider>
      <Header onCardClick={displayCard}></Header>
      {cardAppears && <Cart onClose={hideCard}></Cart>}
      <main>
        <Meals></Meals>
      </main>
    </CardProvider>
  );
}

export default App;
