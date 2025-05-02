import React from "react";
import { Review } from "../types/comment";
import { ReviewCard } from "./ReviewCard";
import styles from "./ReviewList.module.css";

export const ReviewList: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className={styles.grid}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
