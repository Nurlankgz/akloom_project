import React from "react";
import styles from "./ReviewForm.module.css";

type Props = {
  text: string;
  setText: (value: string) => void;
  rating: number;
  setRating: (value: number) => void;
  onSubmit: () => void;
};

export const ReviewForm: React.FC<Props> = ({
  text,
  setText,
  rating,
  setRating,
  onSubmit,
}) => {
  return (
    <div className={styles.form}>
      <h3>Оставьте свой короткий отзыв</h3>
      <textarea
        placeholder="Отзыв должен составлять не более чем 300 символов"
        maxLength={300}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
      />
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => setRating(num)}
            className={`${styles.star} ${rating >= num ? styles.filled : ""}`}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={onSubmit} className={styles.btn}>
        Опубликовать
      </button>
    </div>
  );
};
