/**
 * Поле вводу з міткою.
 * @file Input.jsx
 * @param {Object} props - Властивості компонента
 * @param {string} props.label - Мітка для поля вводу
 * @param {string} props.id - Ідентифікатор для поля вводу
 *
 * @returns {JSX.Element} - Поле вводу з міткою
 */
export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
