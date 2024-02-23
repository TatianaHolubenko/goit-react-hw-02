import css from "./Feedback.module.css";

export default function Feedback({ value, totalFeedback, round }) {
  const { good, neutral, bad } = value;

  return (
    <div>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.listText}>Good: {good}</p>
        </li>
        <li className={css.item}>
          <p className={css.listText}>Neutral: {neutral}</p>
        </li>
        <li className={css.item}>
          <p className={css.listText}>Bad: {bad}</p>
        </li>
        <li className={css.item}>
          <p className={css.listText}>Total: {totalFeedback}</p>
        </li>
      </ul>
      <p className={css.text}>Positive: {round}%</p>
    </div>
  );
}
