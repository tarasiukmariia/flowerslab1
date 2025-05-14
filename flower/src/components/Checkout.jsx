/**
 * Компонент оформлення замовлення, який дозволяє користувачу ввести дані та надіслати замовлення.
 * @file Checkout.jsx
 * @returns {JSX.Element} - Форма для оформлення замовлення
 */
import { useContext, useActionState } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const requestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data, error, sendRequest, clearData } = useHttp(
      "http://localhost:3000/orders",
      requestConfig
  );

  const cartTotal = cartCtx.items.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
  );
  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  async function checkoutAction(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
        JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: customerData,
          },
        })
    );
  }
  const [formState, formAction, isSending] = useActionState(
      checkoutAction,
      null
  );
  let actions = (
      <>
        <Button type="button" textOnly onClick={handleClose}>
          Закрити
        </Button>
        <Button>Далі</Button>
      </>
  );
  if (isSending) {
    actions = <span>Надсилання даних ...</span>;
  }

  if (data && !error) {
    return (
        <Modal
            open={userProgressCtx.progress === "checkout"}
            onClose={handleClose}
        >
          <h2>Дякуємо!</h2>
          <p>Ваше замовлення зареєстровано.</p>
          <p>
            Найближчим часом ми зв’яжемося з вами ♥.
          </p>
          <p className="modal-actions">
            <Button onClick={handleFinish}>Закрити</Button>
          </p>
        </Modal>
    );
  }
  return (
      <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
        <form action={formAction}>
          <h2>Оплата</h2>
          <p>Загальна сума: {currencyFormatter.format(cartTotal)}</p>
          <Input label="Повне ім`я" type="text" id="name" />
          <Input label="Електронна пошта" type="email" id="email" />
          <Input label="Вулиця" type="text" id="street" />
          <div className="control-row">
            <Input label="Поштовий індекс" type="text" id="postal-code" />
            <Input label="Місто" type="text" id="city" />
          </div>


          {error && (
              <Error title="Не вдалося зареєструвати замовлення" message={error}></Error>
          )}
          <p className="modal-actions">{actions}</p>
        </form>
      </Modal>
  );
}
