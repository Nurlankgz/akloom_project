"use client";
import Image from "next/image";
export default function FooterSection() {
  return (
    <>
      <footer className="footer-wrapper">
        <section className="subscribe-box">
          <h2 className="subscribe-title">
            Подпишитесь на нашу рассылку, <br /> чтобы не упустить информацию!
          </h2>
          <form className="subscribe-form">
            <div className="input-wrapper">
              <Image
                src="/icons/email.svg"
                alt="Email"
                width={1}
                height={1}
                className="email-icon"
              />

              <input type="email" placeholder="Введите ваш e-mail" />
            </div>
            <button type="submit">Подписаться</button>
          </form>
        </section>
      </footer>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-logo">
            Akloom <span>SHOP</span>
          </div>
          <p className="footer-copy">Создано в 2023 году. Все права защищены</p>
          <p className="footer-made">
            Разработано при помощи: <strong>Akloom</strong>
          </p>
        </div>
      </div>
    </>
  );
}
