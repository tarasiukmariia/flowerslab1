/**
 * Компонент шапки, який відображає логотип та кількість товарів у кошику.
 * @file Header.jsx
 * @returns {JSX.Element} - Шапка з логотипом та кнопкою для перегляду кошика
 */
import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
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
        <img src={logoImg} alt="Flower" />
        <h1>Bouquet</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Кошик ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
