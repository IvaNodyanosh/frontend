import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer(): React.ReactNode {
  return (
    <footer>
      <div className={classNames("container", styles.container)}>
        <a
          href="mailto:stefiglass@gmail.com"
          className={styles.email_link}
          target="_blank"
        >
          STEFIGLASS@GMAIL.COM
        </a>
        <div className={styles.box}>
          <div className={styles.address_box}>
            <div className={styles.phone}>
              <p className={styles.header}>Číslo telefonu</p>
              <a href="tel:+420 773 250 901" target="_blank">
                +420 773 250 901
              </a>
            </div>
            <address>
              <div className={styles.address}>
                <p className={styles.header}>Adresa</p>
                <a
                  href="https://www.google.com/maps/place/Martin+%C5%A0tef%C3%A1nek+-+Sklo+Studio/@50.7644296,15.3324353,17z/data=!3m1!4b1!4m6!3m5!1s0x470ecec806fe81bf:0x5df7d8877764103f!8m2!3d50.7644262!4d15.3350102!16s%2Fg%2F1tdx7f9h?entry=ttu"
                  target="_blank"
                >
                  Hutní 519, 468 61 Desná v Jizerských horách-Desná II
                </a>
              </div>
            </address>
          </div>
          <div className={styles.social_box}>
            <p className={styles.header}>Sociální sítě</p>
            <ul className={styles.social_list}>
              <li>
                <a href="" className={styles.social_link} target="_blank">
                  <svg className={styles.icon}>
                    <use href="../../../../../symbol-defs.svg#facebook" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link} target="_blank">
                  <svg className={styles.icon}>
                    <use href="../../../../../symbol-defs.svg#twitter" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link} target="_blank">
                  <svg className={styles.icon}>
                    <use href="../../../../../symbol-defs.svg#instagram" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link} target="_blank">
                  <svg className={styles.icon}>
                    <use href="../../../../../symbol-defs.svg#youtube" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className={styles.social_link} target="_blank">
                  <svg className={styles.icon}>
                    <use href="../../../../../symbol-defs.svg#tiktok" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
