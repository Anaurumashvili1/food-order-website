import { useContext } from "react";
import CartContext from "../../store/card-context";
import MealItemForm from "./MealItemForm";
import classes from "./listItem.module.css";

const ListItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default ListItem;
