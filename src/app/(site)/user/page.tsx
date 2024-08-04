"use client";

import styles from "./page.module.scss";

import { UserContext } from "../layout";
import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { getOrders } from "../_api/getOrders";
import Link from "next/link";
import { redirect } from "next/navigation";

import { OrdersList } from "../components/OrdersList/OrdersList";

export const OrdersContext = createContext([]);

export default function Users({ children }) {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    getOrders(setOrders);
    if (!user.token) {
      redirect("/");
    }
  }, []);

  return (
    <section>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.box_user}>
            <div className={styles.avatar_box}>
              <div className={styles.avatar}>
                <img
                  src={user.avatarUrl}
                  alt="avatar"
                  className={styles.avatar_img}
                />
              </div>
              <Link href="/user/avatar" className={styles.link_avatar}>
                <svg>
                  <use href="../../../../symbol-defs.svg#add_photo" />
                </svg>
              </Link>
            </div>
            <div className={styles.box_info}>
              <h2 className={styles.header}>
                Dobrý den, {user.name} {user.surname}!
              </h2>
              <ul className={styles.list}>
                <li>
                  <h3 className={styles.title}>OBJEDNÁVEK</h3>
                  <p>{orders.length}</p>
                </li>
              </ul>
            </div>
          </div>
          <h3 className={styles.header_orders}>OBJEDNÁVKY</h3>
        </div>
        <OrdersList orders={orders} />
      </div>
      <OrdersContext.Provider value={orders}>
        {children}
      </OrdersContext.Provider>
    </section>
  );
}
