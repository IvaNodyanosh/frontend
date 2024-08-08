"use client";

import styles from "./layout.module.scss";
import React from "react";
import Link from "next/link";

import { useUserContext } from "@/app/hooks/userHooks";
import { OrdersContext } from "@/app/contexts/OrderContext";
import { useState, useEffect } from "react";
import { getOrders } from "../../_api/getOrders";
import { redirect } from "next/navigation";

export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  const { user } = useUserContext();
  const [orders, setOrders] = useState<[]>([]);

  useEffect(() => {
    getOrders(setOrders);
    if (!user.token) {
      redirect("/");
    }
  }, []);

  return (
    <section>
      <div className="container">
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
      </div>
    </section>
  );
}
