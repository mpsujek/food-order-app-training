import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  const priceWithDolar = `$${price.toFixed(2)}`;
  return (
    <li key={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceWithDolar}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};
export default MealItem;
