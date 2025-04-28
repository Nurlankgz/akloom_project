import Link from "next/link";
import Image from "next/image";

export default function Catalog() {
  return (
    <>
      <div className="catalog">
        <h2 className="catalog-title">Каталог</h2>

        <div className="filter-search-row">
          <div className="filters-block">
            <div className="filters-label">Примените фильтр:</div>
            <div className="filters">
              <button className="filter">Ноутбук ✖</button>
              <button className="filter">Ноутбук ✖</button>
              <button className="filter">Ноутбук ✖</button>
            </div>
          </div>

          <div className="catalog-search-block">
            <input
              type="text"
              className="catalog-search"
              placeholder="Поиск..."
            />
            <Image
              src="/icons/search.svg"
              alt="Поиск"
              className="search-icon"
              width={12}
              height={12}
            />
          </div>
        </div>

        <div className="catalog-block">
          <div className="catalog-title-row">
            <h3 className="catalog-subtitle">Ноутбуки</h3>
            <Link href="/product/1" className="catalog-link">
              Открыть страницу "Ноутбуки"
            </Link>
          </div>

          <div className="products-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="product-card">
                <img
                  src="/review/notebook.jpg"
                  alt="Ноутбук"
                  className="product-image"
                />
                <div className="product-body">
                  <div className="product-header">
                    <h4 className="product-name">Ноутбук</h4>
                    <div className="product-rating">
                      <span className="star">⭐</span>
                      <span className="rating-value">4,6</span>
                    </div>
                  </div>
                  <p className="product-desc">
                    Lorem Ipsum — это текст-"рыба", часто используемый в печати
                    и веб-дизайне.
                  </p>
                  <div className="product-footer">
                    <div className="circle-icon">
                      <Image
                        src="/icons/info.svg"
                        alt="Инфо"
                        width={1}
                        height={1}
                      />
                    </div>

                    <Link href="/product/1" className="info-button-link">
                      Полная информация
                    </Link>

                    <div className="circle-icon">
                      <Image
                        src="/icons/bookmark.svg"
                        alt="Избранное"
                        width={1}
                        height={1}
                      />
                    </div>
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

        <div className="catalog-block">
          <div className="catalog-title-row">
            <h3 className="catalog-subtitle">Ноутбуки</h3>
            <Link href="/product/1" className="catalog-link">
              Открыть страницу "Ноутбуки"
            </Link>
          </div>

          <div className="products-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="product-card">
                <Image
                  src="/review/notebook.jpg"
                  alt="Ноутбук"
                  width={1}
                  height={1}
                  className="product-image"
                />
                <div className="product-body">
                  <div className="product-header">
                    <h4 className="product-name">Ноутбук</h4>
                    <div className="product-rating">
                      <span className="star">⭐</span>
                      <span className="rating-value">4,6</span>
                    </div>
                  </div>
                  <p className="product-desc">
                    Lorem Ipsum — это текст-"рыба", часто используемый в печати
                    и веб-дизайне.
                  </p>
                  <div className="product-footer">
                    <div className="circle-icon">
                      <Image
                        src="/icons/info.svg"
                        alt="Инфо"
                        width={1}
                        height={1}
                      />
                    </div>

                    <Link href="/product/1" className="info-button-link">
                      Полная информация
                    </Link>

                    <div className="circle-icon">
                      <Image
                        src="/icons/bookmark.svg"
                        alt="Избранное"
                        width={1}
                        height={1}
                      />
                    </div>
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
        <div className="catalog-block">
          <div className="catalog-title-row">
            <h3 className="catalog-subtitle">Ноутбуки</h3>
            <Link href="/product/1" className="catalog-link">
              Открыть страницу "Ноутбуки"
            </Link>
          </div>

          <div className="products-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="product-card">
                <Image
                  src="/review/notebook.jpg"
                  alt="Ноутбук"
                  width={1}
                  height={1}
                  className="product-image"
                />
                <div className="product-body">
                  <div className="product-header">
                    <h4 className="product-name">Ноутбук</h4>
                    <div className="product-rating">
                      <span className="star">⭐</span>
                      <span className="rating-value">4,6</span>
                    </div>
                  </div>
                  <p className="product-desc">
                    Lorem Ipsum — это текст-"рыба", часто используемый в печати
                    и веб-дизайне.
                  </p>
                  <div className="product-footer">
                    <div className="circle-icon">
                      <Image
                        src="/icons/info.svg"
                        alt="Инфо"
                        width={1}
                        height={1}
                      />
                    </div>

                    <Link href="/product/1" className="info-button-link">
                      Полная информация
                    </Link>

                    <div className="circle-icon">
                      <Image
                        src="/icons/bookmark.svg"
                        alt="Избранное"
                        width={1}
                        height={1}
                      />
                    </div>
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
        <div className="catalog-block">
          <div className="catalog-title-row">
            <h3 className="catalog-subtitle">Ноутбуки</h3>
            <Link href="/product/1" className="catalog-link">
              Открыть страницу "Ноутбуки"
            </Link>
          </div>

          <div className="products-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="product-card">
                <Image
                  src="/review/notebook.jpg"
                  alt="Ноутбук"
                  width={1}
                  height={1}
                  className="product-image"
                />
                <div className="product-body">
                  <div className="product-header">
                    <h4 className="product-name">Ноутбук</h4>
                    <div className="product-rating">
                      <span className="star">⭐</span>
                      <span className="rating-value">4,6</span>
                    </div>
                  </div>
                  <p className="product-desc">
                    Lorem Ipsum — это текст-"рыба", часто используемый в печати
                    и веб-дизайне.
                  </p>
                  <div className="product-footer">
                    <div className="circle-icon">
                      <Image
                        src="/icons/info.svg"
                        alt="Инфо"
                        width={1}
                        height={1}
                      />
                    </div>

                    <Link href="/product/1" className="info-button-link">
                      Полная информация
                    </Link>

                    <div className="circle-icon">
                      <Image
                        src="/icons/bookmark.svg"
                        alt="Избранное"
                        width={1}
                        height={1}
                      />
                    </div>
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
        <div className="catalog-block">
          <div className="catalog-title-row">
            <h3 className="catalog-subtitle">Ноутбуки</h3>
            <Link href="/product/1" className="catalog-link">
              Открыть страницу "Ноутбуки"
            </Link>
          </div>

          <div className="products-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="product-card">
                <Image
                  src="/review/notebook.jpg"
                  alt="Ноутбук"
                  width={1}
                  height={1}
                  className="product-image"
                />
                <div className="product-body">
                  <div className="product-header">
                    <h4 className="product-name">Ноутбук</h4>
                    <div className="product-rating">
                      <span className="star">⭐</span>
                      <span className="rating-value">4,6</span>
                    </div>
                  </div>
                  <p className="product-desc">
                    Lorem Ipsum — это текст-"рыба", часто используемый в печати
                    и веб-дизайне.
                  </p>
                  <div className="product-footer">
                    <div className="circle-icon">
                      <Image
                        src="/icons/info.svg"
                        alt="Инфо"
                        width={1}
                        height={1}
                      />
                    </div>

                    <Link href="/product/1" className="info-button-link">
                      Полная информация
                    </Link>

                    <div className="circle-icon">
                      <Image
                        src="/icons/bookmark.svg"
                        alt="Избранное"
                        width={1}
                        height={1}
                      />
                    </div>
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
      </div>
    </>
  );
}
