/**
 * Компонент шапки, який відображає логотип та кількість товарів у кошику.
 * @file Header.jsx
 * @returns {JSX.Element} - Шапка з логотипом та кнопкою для перегляду кошика
 */
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
export default function Header({title, logo}) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        {logo && <img src={logo} alt="Logo" />}
        <h1>{title}</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Кошик ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
