import "./FooterSimple.css";

export default function FooterSimple() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-bold">Akloom</span> SHOP
        </div>
        <div className="footer-text">
          Создано в 2023 году. Все права защищены
        </div>
        <div className="footer-madeby">
          Разработано при помощи: <span className="logo-bold">Akloom</span>
        </div>
      </div>
    </footer>
  );
}
