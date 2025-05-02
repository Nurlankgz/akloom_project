import styles from "./page.module.css";
import Image from "next/image";

import { BiEnvelope } from "react-icons/bi";
import { Accordion } from "@/components/Accordion/Accordion";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.texts}>
          <h1 className={styles.aboutTitle}>
            Быстро, надёжно, качественно - Akloom Shop
          </h1>
          <p className={styles.aboutText}>
            Lorem Ipsum - это текст- рыба, часто используемый в<br /> печати и
            вэб-дизайне. Lorem Ipsum является стандартной
            <br /> рыбой для текстов на латинице с начала XVI века. В то
            <br /> время некий безымянный печатник создал большую
            <br /> коллекцию размеров и форм шрифтов, используя Lorem <br />
            Ipsum для распечатки образцов. Lorem Ipsum не только
            <br /> успешно пережил без заметных изменений пять веков, но и
            перешагнул в электронный дизайн.
          </p>
        </div>
        <Image
          src="/header-images/about.jpg"
          alt="About Image"
          width={642}
          height={647}
          className={styles.aboutImage}
        />
      </div>
      <div className={styles.infoTexts}>
        <h2 className={styles.infoTitle}>Почему мы?</h2>
        <p className={styles.infoText}>
          Lorem Ipsum - это текст рыба, часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн.
        </p>
      </div>
      <Accordion />

      <div className={styles.compans}>
        <div className={styles.compan}>
          <h2 className={styles.companTitle}>Основатель компании</h2>
          <p className={styles.companText}>
            Султан Сулейман - это текст-рыба, часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
        </div>
        <Image
          src="/header-images/man.jpg"
          alt="About Image"
          width={500}
          height={500}
        />
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
  );
}
