/**
 * Компонент елемента кошика, який відображає окремий товар та дозволяє змінювати кількість.
 * @file CartItem.jsx
 * @param {Object} props - Властивості компонента
 * @param {string} props.name - Назва товару
 * @param {number} props.quantity - Кількість товару в кошику
 * @param {number} props.price - Ціна товару
 * @param {Function} props.onIncrease - Функція для збільшення кількості товару
 * @param {Function} props.onDecrease - Функція для зменшення кількості товару
 *
 * @returns {JSX.Element} - Елемент кошика
 */
import { currencyFormatter } from "../util/formatting";
export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
