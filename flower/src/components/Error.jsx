/**
 * Компонент для відображення повідомлень про помилки.
 * @file Error.jsx
 * @param {Object} props - Властивості компонента
 * @param {string} props.title - Заголовок помилки
 * @param {string} props.message - Повідомлення помилки
 *
 * @returns {JSX.Element} - Виводить повідомлення про помилку
 */
export default function Error({title, message}){
    return(
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}