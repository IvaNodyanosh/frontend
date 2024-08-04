import classNames from "classnames";
import styles from "./loader.module.scss";

export const Loader = () => {
    return (
        <div className={styles.loader_box}>
          <img src="../../../../../logo.png" alt="" className={styles.loader_img} />
          <div
            className={classNames(styles.loader_styled, "animation_loader")}
          ></div>
        </div>
    );
};