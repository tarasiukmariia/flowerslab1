import logoImg from "../src/assets/logo.jpg";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Flowers from "./components/Flowers.jsx";
import CookiePopup from "./components/CookiePopup";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <CookiePopup />
        <Header title="Bouquet" logo={logoImg} />
        <Flowers />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
