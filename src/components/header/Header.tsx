import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { Accordion } from "../accordion/Accordion";
import { BiEnvelope } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { FaStar, FaInfoCircle, FaPlus, FaHeart } from "react-icons/fa";




export default function Header() {
  return (
    <>
      <div className={styles.page}>
       <div className={styles.page}>
        <div>
          <Image
            src="/header-images/logo.svg"
            width={96}
            height={36}
            alt="logo"
          />
        </div>
        <div className={styles.LinksHref}>
          <Link href="#" className={styles.link}>
            Главная
          </Link>
          <Link href="#" className={styles.link}>
            О нас
          </Link>
          <Link href="#" className={styles.link}>
            Товары
          </Link>
          <Link href="#" className={styles.link}>
            Контакты
          </Link>
        </div>
        </div>

        <div className={styles.me}>
          <Image
            src="/header-images/Vector.png"
            width={30}
            height={30}
            alt="jd"
          />
          <Image
            src="/header-images/shop.png"
            width={22}
            height={30}
            alt="jf"
          />
          <Image
            src="/header-images/status.png"
            width={50}
            height={50}
            alt="kf"
          />
        </div>
      </div>
      <div className={styles.Img}>
        <Image
          src="/header-images/Frame57.svg"
          width={1440}
          height={600}
          alt="photo"
        />
      </div>
          <p className={styles.paragrave}>Популярные товары</p>
        <div className={styles.pageDisplay}>
        <div className={styles.pictures}>
      <Image src="/header-images/product.png" width={260} height={173} alt="hghg" className={styles.image}/>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Ноутбук</h3>
          <div className={styles.rating}>
            <FaStar />
            <span>4,6</span></div>
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
      <div className={styles.pictures}>
      <Image src="/header-images/product.png" width={260} height={173} alt="hghg" className={styles.image}/>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Ноутбук</h3>
          <div className={styles.rating}>
            <FaStar />
            <span>4,6</span></div>
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
      <div className={styles.pictures}>
      <Image src="/header-images/product.png" width={260} height={173} alt="hghg" className={styles.image}/>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Ноутбук</h3>
          <div className={styles.rating}>
            <FaStar />
            <span>4,6</span></div>
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
      <div>
      <div className={styles.pictures}>
      <img src="/header-images/product.png" alt="hghg" className={styles.image}/>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Ноутбук</h3>
          <div className={styles.rating}>
            <FaStar />
            <span>4,6</span></div>
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
      <div className={styles.work}>
       <button className={styles.button}>
        <img src="/header-images/Left.png" alt="" />
       </button>
        <button className={styles.button}>
          <img src="/header-images/Right.png" alt="" />
        </button>
        </div>
      </div>
      </div>
      
        
        
        <div className={styles.question}>
          <div className={styles.ourCompany}>
          <p className={styles.quetion}>Почему мы?</p>
          <div>
          <h4 className={styles.history}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. </h4>
          </div>
        </div>
        </div>
        <Accordion/>
          <p className={styles.comment}>Что люди говорят о нас?</p>
          <div className={styles.Comment}>
            <div className={styles.review}>
              <div className={styles.commentPeople}>
               <img src="/header-images/accaunt.png" alt="accaunt"/>
               <div className={styles.Nikname}>
               <h5>Claus Smith</h5>
               <h6>03.12.2023</h6> 
               </div>
               </div>
               <span>⭐⭐⭐⭐</span>
              <p className="productDesc">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                </p>
            </div>
            <div className={styles.review}>
              <div className={styles.commentPeople}>
               <img src="/header-images/ClientComment.png" alt="accaunt"/>
               <div className={styles.Nikname}>
               <h5>Chris Cromwell</h5>
               <h6>03.12.2023</h6>
                </div>
               </div>
               <span>⭐⭐⭐⭐</span>
              <p className="productDesc">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                </p>
            </div>
            <div className={styles.link}>
            <div className={styles.review}>
              <div className={styles.commentPeople}>
               <img src="/header-images/accaunt.png" alt="accaunt"/>
               <div className={styles.Nikname}>
               <h5>Claus Smith</h5>
               <h6>03.12.2023</h6> 
               </div>
               </div>
               <span>⭐⭐⭐⭐</span>
              <p className="productDesc">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                </p>
            

            </div>
            <div className={styles.icon}>
            <Link href="#" className={styles.Links}>Посмотреть все отзывы     </Link>
            <GoArrowRight />
            
            
            </div>
            </div>
            </div>
            <div className={styles.info}>
        <h2 className={styles.title}>
          Подпишитесь на нашу рассылку,
          <br /> чтобы не упустить информацию!
        </h2>
            <form className={styles.form}     >
          <div className={styles.inputWrapper}>
            <BiEnvelope size={20} className={styles.icon} />
            <input
              type="email"
              placeholder="Введите ваш e-mail"
              required
              className={styles.input}
            />
          <button type="submit" className={styles.btn2}>
            Подписаться
          </button>
          </div>
        </form>
      </div>
    </>
  );
}