import Image from "next/image";
import "./style.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Akl
          <span className="logo-circle">o</span>
          om
          <div className="logo-sub">SHOP</div>
        </div>

        <nav className="nav">
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/">Товары</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>

        <div className="header-icons">
          <button className="icon">
            <Image
              src="/icons/cart.svg"
              alt="Корзина"
              width={1}
              height={1}
              className="header-icon"
            />
          </button>

          <button className="icon">
            <Image
              src="/icons/favorite.svg"
              alt="Избранное"
              width={1}
              height={1}
              className="header-icon"
            />
          </button>

          <Image
            src="/review/avatar.jpg"
            alt="Avatar"
            width={1}
            height={1}
            className="avatar"
          />
        </div>
      </div>
    </header>
  );
}
