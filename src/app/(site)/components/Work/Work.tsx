import styles from "./Work.module.scss";
import classNames from "classnames";

export default function Work(): React.ReactNode {
  return (
    <section>
      <div className={classNames("container", styles.container)}>
        <h2 className={styles.header}>CO DĚLÁME?</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.item_header}>ODBORNÝ VÝKON PRÁCE</h3>
            <p>
              Na každou zakázku dohlíží a od začátku do konce ji realiyuje pan
              Štefánek, světoynámý mistr řemesel.
            </p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.item_header}>MATERIÁLY NEJVYŠŠÍ KVALITY</h3>
            <p>
              Pro každý projekt jsou vzbíránz tz nejlepší materiálz prémiové
              kvality.
            </p>
          </li>

          <li className={styles.item}>
            <h3 className={styles.item_header}>
              INDIVIDUÁLNÍ A JEDINEČNÉ PROJEKTY
            </h3>
            <p>
              Každý projekt je jedinečný a je vyráběn ručně podle přání klienta.
            </p>
          </li>
        </ul>
        <video className={styles.video} controls>
          <source src="../../../../../video-presentation.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
