import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});
/**
 * Створює контекст для управління кошиком покупок.
 *
 * @typedef {Object} CartContextType
 * @property {Array} items - Список товарів у кошику
 * @property {Function} addItem - Функція для додавання товару в кошик
 * @property {Function} removeItem - Функція для видалення товару з кошика
 * @property {Function} clearCart - Функція для очищення кошика
 */
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      updatedItems[existingCartItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
    );
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];

      if (existingItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        updatedItems[existingCartItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
      }
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
  return state;
}
/**
 * Компонент провайдера контексту для кошика покупок.
 *
 * @param {Object} props - Властивості компонента
 * @param {JSX.Element} props.children - Дочірні елементи, які будуть відображені в контексті
 *
 * @returns {JSX.Element} - Компонент, що надає контекст для кошика
 */
export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }
  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };
  console.log(cartContext);

  return (
      <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
