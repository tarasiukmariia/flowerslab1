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
