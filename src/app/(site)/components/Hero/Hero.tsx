import styles from "./Hero.module.scss";
import classNames from "classnames";
import Link from "next/link";

export default function Hero():React.ReactNode {
  return (
    <section>
      <div className={classNames("container", styles.hero)}>
        <h1 className={styles.header}>Průzračná krása v každém detailu!</h1>
        <div className={styles.link_box}>
          <Link href="/order" className={styles.link}>
            OBJEDNAT
          </Link>
        </div>

        <ul className={styles.social_media_list}>
          <li>
            <a href="" className={styles.social_link}>
              TIKTOK
            </a>
          </li>
          <li>
            <a href="" className={styles.social_link}>
              INSTAGRAM
            </a>
          </li>
          <li>
            <a href="" className={styles.social_link}>
              TWITTER
            </a>
          </li>
          <li>
            <a href="" className={styles.social_link}>
              FACEBOOK
            </a>
          </li>
          <li>
            <a href="" className={styles.social_link}>
              YOUTUBE
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
