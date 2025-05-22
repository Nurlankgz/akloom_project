import React from "react";
import { Review } from "../types/comment";
import styles from "./ReviewCard.module.css";

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <strong>{review.name}</strong>
        <span>{review.date}</span>
      </div>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={`${styles.star} ${
              review.rating >= num ? styles.filled : ""
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p>{review.text}</p>
    </div>
  );
};
