/**
 * Компонент для відображення інформації про букет, який можна додати до кошика.
 * @file flowerItem.jsx
 * @param {Object} props - Властивості компонента
 * @param {Object} props.flower - Букет, який буде відображена
 * @param {string} props.flower.id - Унікальний ідентифікатор квітів
 * @param {string} props.flower.name - Назва квітів
 * @param {string} props.flower.description - Опис квітів
 * @param {number} props.flower.price - Ціна квітів
 * @param {string} props.flower.image - Шлях до зображення квітів
 *
 * @returns {JSX.Element} - Квіти
 */
import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
export default function FlowerItem({ flower }) {
  const cartCtx = useContext(CartContext);
  function handleAddFlowerToCart() {
    cartCtx.addItem(flower);
  }
  return (
      <li className="flower-item">
        <article>
          <img src={`http://localhost:3000/${flower.image}`} alt={flower.name} />
          <div>
            <h3>{flower.name}</h3>
            <p className="flower-item-price">
              {currencyFormatter.format(flower.price)}
            </p>
            <p className="flower-item-description">{flower.description}</p>
          </div>
          <p className="flower-item-actions">
            <Button onClick={handleAddFlowerToCart}>Замовити</Button>
          </p>
        </article>
      </li>
  );
}

