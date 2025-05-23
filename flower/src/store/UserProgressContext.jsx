import { createContext, useState } from "react";
/**
 * Створює контекст для відслідковування прогресу користувача (кошик/оформлення замовлення).
 *
 * @typedef {Object} UserProgressContextType
 * @property {string} progress - Поточний прогрес (може бути "cart" або "checkout")
 * @property {Function} showCart - Функція для показу кошика
 * @property {Function} hideCart - Функція для приховування кошика
 * @property {Function} showCheckout - Функція для показу сторінки оформлення замовлення
 * @property {Function} hideCheckout - Функція для приховування сторінки оформлення замовлення
 */
const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});
/**
 * Компонент провайдера контексту для відслідковування прогресу користувача.
 *
 * @param {Object} props - Властивості компонента
 * @param {JSX.Element} props.children - Дочірні елементи, які будуть відображені в контексті
 *
 * @returns {JSX.Element} - Компонент, що надає контекст для прогресу користувача
 */
export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");
  function showCart() {
    setUserProgress("cart");
  }
  function hideCart() {
    setUserProgress("");
  }
  function showCheckout() {
    setUserProgress("checkout");
  }
  function hideCheckout() {
    setUserProgress("");
  }
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
      <UserProgressContext.Provider value={userProgressCtx}>
        {children}
      </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
