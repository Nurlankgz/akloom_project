import styles from "./index.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";


export default function ContactPage() {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.mapContainer}>
          <div className={styles.contact}>
            <h1 className={styles.contactTitle}>Наши контакты для связи:</h1>
            <div>
              <p className={styles.contactText}>Телефон:</p>
              <input
                className={styles.contactInput}
                type="text"
                placeholder="+996 (703) 82-08-25"
              />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactText}>E-mail:</p>
              <input
                className={styles.contactInput}
                type="text"
                placeholder="akloom.shop@gmail.com"
              />
            </div>
            <div>
              <p className={styles.contactText}>Социальные сети:</p>
              <div className={styles.socials}>
                <FaFacebook className={styles.social} />
                <FaInstagram className={styles.social} />
                <FaTwitter className={styles.social} />
              </div>
            </div>
          </div>
          <iframe
            className={styles.map}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=24%204th%20St%20-%20Al%20Quoz%20-%20Al%20Quoz%20Industrial%20Area%203%20-%20Dubai&output=embed"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>
            Подпишитесь на нашу рассылку,
            <br /> чтобы не упустить информацию!
          </h2>
          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <BiEnvelope size={20} className={styles.icon} />

              <input
                type="email"
                placeholder="Введите ваш e-mail"
                required
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.btn}>
              Подписаться
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
