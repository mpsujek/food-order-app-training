import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  return <button className={classes.button}>{props.children}</button>;
}
export default HeaderCartButton;
