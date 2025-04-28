"use client";
import Image from "next/image";
import Link from "next/link";

export default function PopularProducts() {
  return (
    <section className="popular-products">
      <div className="popular-products-wrapper">
        <h2 className="section-title">Популярные товары</h2>

        <div className="products-row">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="product-card">
              <Image
                src="/review/notebook.jpg"
                alt="Ноутбук"
                width={100}
                height={100}
                className="product-image"
              />

              <div className="product-body">
                <div className="product-header">
                  <h3 className="product-name">Ноутбук</h3>
                  <div className="product-rating">
                    <span className="star">⭐</span>
                    <span className="rating-value">4,6</span>
                  </div>
                </div>

                <p className="product-desc">
                  Lorem Ipsum — это текст-"рыба", часто используемый в печати и
                  веб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                  текстов.
                </p>

                <div className="product-footer">
                  <Link href={`/product/${index + 1}`}>
                    <Image
                      src="/icons/info.svg"
                      alt="Полная информация"
                      width={1}
                      height={1}
                      title="Полная информация"
                      className="footer-icon"
                    />
                  </Link>

                  <Image
                    src="/icons/plus.svg"
                    alt="Добавить в корзину"
                    width={1}
                    height={1}
                    title="Добавить в корзину"
                    className="footer-icon"
                  />

                  <Image
                    src="/icons/bookmark.svg"
                    alt="Добавить в избранное"
                    width={1}
                    height={1}
                    title="Добавить в избранное"
                    className="footer-icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn">
            <Image
              src="/icons/arrow-left.svg"
              alt="Назад"
              width={1}
              height={1}
            />
          </button>
          <button className="carousel-btn">
            <Image
              src="/icons/arrow-right.svg"
              alt="Вперёд"
              width={1}
              height={1}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
