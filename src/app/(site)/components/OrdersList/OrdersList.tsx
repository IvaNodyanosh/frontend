"use client";

import styles from "./OrdersList.module.scss";
import Link from "next/link";

export function OrdersList({
  orders,
}: {
  orders: [{ _id: string; createdAt: string; status: string }] | [];
}) {
  const statusOrder: Record<string, string> = {
    registered: "ZAREGISTROVÁNO",
    accepted: "PŘIJATO",
    completed: "DOKONČENO",
    cancelled: "ZRUŠENO",
    cancelledUser: "ZRUŠENO ZÁKAZNÍKEM",
  };

  return (
    <>
      {orders.length > 0 ? (
        <ul className={styles.list}>
          {orders.map((order) => (
            <li className={styles.item} key={order._id}>
              <Link href={`user/order/${order._id}`}>
                <div className={styles.box}>
                  <p className={styles.time}>{order.createdAt.split("T")[0]}</p>
                  <p>{statusOrder[order.status]}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>You dont have orders</p>
      )}
    </>
  );
}
