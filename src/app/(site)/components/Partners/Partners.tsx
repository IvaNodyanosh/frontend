import styles from "./Partners.module.scss";
import classNames from "classnames";

export default function Partners(): React.ReactNode {
  return (
    <section>
      <div className={classNames("container", styles.container)}>
        <h2 className={styles.header}>PARTNEŘÍ</h2>
        <ul>
          <li className={styles.item}>
            <a href="https://www.g1.cz/en/" target="_blank">
              <img src="G1-PARTNERS.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
