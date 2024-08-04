import classNames from "classnames";
import styles from "./Response.module.scss";

export default function Response(): React.ReactNode {
  return (
    <section>
      <div className={classNames("container", styles.response_container)}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="../../../../../response.png"
          />
          <source
            media="(min-width: 900px)"
            srcSet="../../../../../response-tab.png"
          />
          <img src="../../../../../response-mob.png" alt="" />
        </picture>
        <div className={styles.text_box}>
          <h2 className={styles.header}>MARTIN ŠTEFÁNEK - Umělecký sklář</h2>
          <p className={styles.text}>
            Martin Štefánek patří k nejtalentovanějším českým uměleckým sklářům.
            Při uplatňování svých nezvyklých rukodělných dovedností vytváří za
            horka formované plastiky s unikátním vyjádřením zasahujícím místa
            schovaná uvnitř nás samých – místa daleko od masově vyráběných
            neosobních prací dnešní doby.
            <span className={styles.name}>Petr Seifert</span>
            <span className={styles.studio}>G1 GLASS ART STUDIO</span>
          </p>
        </div>
      </div>
    </section>
  );
}
