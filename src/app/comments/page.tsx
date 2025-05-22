"use client";
import { useState } from "react";
import { Review } from "../../components/types/comment";
import { ReviewForm } from "../../components/comment/ReviewForm";
import { ReviewList } from "../../components/comment/ReviewList";

export default function Comment() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleAddReview = () => {
    if (!text || rating === 0) return;

    const newReview: Review = {
      id: Date.now(),
      name: "Claus Smith",
      date: new Date().toLocaleDateString(),
      text,
      rating,
    };

    setReviews((prev) => [newReview, ...prev].slice(0, 15));
    setText("");
    setRating(0);
  };

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <ReviewForm
        text={text}
        setText={setText}
        rating={rating}
        setRating={setRating}
        onSubmit={handleAddReview}
      />
      <h2>Отзывы</h2>
      <ReviewList reviews={reviews} />
    </main>
  );
}
