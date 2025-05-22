import styles from "./ProductCard.module.css";
import { FaStar, FaInfoCircle, FaPlus, FaHeart } from "react-icons/fa";

export const ProductCard = () => {
  return (
    <div className={styles.card}>
      <img src="/images/laptop.jpg" alt="Ноутбук" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Ноутбук</h3>
          <div className={styles.rating}>
            <FaStar />
            <span>4,6</span>
          </div>
        </div>
        <p className={styles.description}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </p>
        <div className={styles.actions}>
          <div className={styles.action}>
            <FaInfoCircle />
            <span>Подробнее</span>
          </div>
          <div className={styles.action}>
            <FaPlus />
            <span>Сравнить</span>
          </div>
          <div className={styles.action}>
            <FaHeart />
            <span>В избранное</span>
          </div>
        </div>
      </div>
    </div>
  );
};