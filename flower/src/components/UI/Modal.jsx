/**
 * Модальне вікно для відображення контенту.
 * @file Modal.jsx
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Вміст модального вікна
 * @param {boolean} props.open - Статус відкриття модального вікна
 * @param {function} props.onClose - Функція для закриття модального вікна
 * @param {string} [props.className] - Додаткові CSS класи для модального вікна
 *
 * @returns {JSX.Element} - Модальне вікно
 */
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
