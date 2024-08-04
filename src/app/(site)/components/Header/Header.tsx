"use client";

import {useState } from "react";

import styles from "./Header.module.scss";
import Menu from "../Menu/Menu";

export default function Header(): React.ReactNode {
  const [menu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <div className={styles.box}>
        <div className="container">
          <div className={styles.header}>
            <img src="../../../../../ms-logo-text.png" alt="logo" className={styles.logo} />
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className={styles.button}
            >
              MENU
            </button>
            {menu && <Menu setOpenMenu={setOpenMenu} />}
          </div>
        </div>
      </div>
    </header>
  );
}
