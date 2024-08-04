import styles from "./layout.module.scss";
import React from "react";
import Link from "next/link";

import Users from "../page";

export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <Users>
      <div className={styles.back_drop}>
        <div className={styles.form_box}>
          <Link href="/user" className={styles.button_close}>
            <svg className={styles.icon_cancel}>
              <use href="../../../../../symbol-defs.svg#cancel" />
            </svg>
          </Link>
          {children}
        </div>
      </div>
    </Users>
  );
}
