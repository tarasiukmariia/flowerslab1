/**
 * Кнопка, яка відображає текст або звичайну кнопку залежно від параметра `textOnly`.
 * @file Button.jsx
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Вміст кнопки
 * @param {boolean} [props.textOnly=false] - Якщо true, кнопка буде текстовою
 * @param {string} [props.className] - Додаткові CSS класи для кнопки
 *
 * @returns {JSX.Element} - Кнопка
 */
export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
