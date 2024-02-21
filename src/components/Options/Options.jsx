import css from "./Options.module.css";

export default function Options(updateFeedback) {
  return (
    <ul className={css.listButton}>
      <li>
        <button className={css.button} onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button
          className={css.button}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
    </ul>
  );
}
