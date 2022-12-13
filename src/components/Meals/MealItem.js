import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);
  const priceWithDolar = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id, name, amount, price });
  };
  return (
    <li key={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceWithDolar}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
