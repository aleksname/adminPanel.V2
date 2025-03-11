import MainContainer from "./components/MainContainer/MainContainer";
import styles from "./page.module.css";
import Image from "next/image";
import MainImage from '../../public/firstPage/MainImg.svg';
import Link from "next/link";

export default function Home() {
  return (

    <div className={styles.wrapper}>
      <div className={styles.containerContent}>
        <div className={styles.container}>
          <div className={styles.containerImage}>
            <Image src={MainImage} alt="MainImage" className={styles.image} />
          </div>
          <div className={styles.containerLink}>
            <div className={styles.subTitle}>Привіт, вибери куди хоч перейти 😼</div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li>
                  <Link href="/home" className={styles.navItem}>
                    <div className={styles.navItemEl}>
                      Домашня сторінка
                    </div>
                  </Link>
                </li>
              
                <li>
                  <Link href="/students-rating" className={styles.navItem}>
                    <div className={styles.navItemEl}>
                      Рейтинг студента 
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/we-work-in-class" className={styles.navItem}>
                    <div className={styles.navItemEl}>
                      Працюємо на уроці
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href={'/home-work'} className={styles.navItem}>
                    <div className={styles.navItemEl}>
                      Надіслати домашнє 
                    </div>
                  </Link>
                </li>
              </ul>  
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
