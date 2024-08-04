"use client";

import styles from "./Order.module.scss";

import { getCustomer } from "../../_api/getCustomer";

import { useContext, useState, useEffect } from "react";
import { OrdersContext } from "../../user/page";
import { UserContext } from "@/app/(site)/layout";
import { changeStatusOrder } from "@/app/(site)/_api/changeStatusOrder";

export function Order({ value }) {
  const [customer, setCustomer] = useState({});
  const { orderId, setLoading } = value;
  const orders = useContext(OrdersContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.statusUser === "owner" && orders[0]) {
      getCustomer(setCustomer, orders[0].userId);
    }
  }, [orders, user.statusUser]);

  const statusOrder = {
    registered: "ZAREGISTROVÁNO",
    accepted: "PŘIJATO",
    completed: "DOKONČENO",
    cancelled: "ZRUŠENO",
    cancelledUser: "ZRUŠENO ZÁKAZNÍKEM",
  };

  const orderItem = orders.find((order) => order._id === orderId);

  return (
    <>
      {orderItem ? (
        <div>
          <ul>
            {user.statusUser === "owner" && customer.name && (
              <li className={styles.item}>
                <h2 className={styles.header}>ZÁKAZNIK:</h2>
                <p>{customer.name + " " + customer.surname}</p>
              </li>
            )}
            <li className={styles.item}>
              <h2 className={styles.header}>DATUM REGISTRACE OBJEDNÁVKY:</h2>
              <p>{orderItem.createdAt.split("T")[0]}</p>
            </li>
            <li className={styles.item}>
              <h2 className={styles.header}>STATUS OBJEDNÁVKY:</h2>
              <p>{statusOrder[orderItem.status]}</p>
            </li>
            {orderItem.message && (
              <li className={styles.item}>
                <h2 className={styles.header}>POZNÁMKA:</h2>
                <p>{orderItem.message}</p>
              </li>
            )}
          </ul>
          <ul className={styles.files_list}>
            {orderItem.files.map((file) => (
              <li className={styles.files_item} key={file}>
                <a href={file} target="_blank">
                  <svg>
                    <use href="../../../../../symbol-defs.svg#folder" />
                  </svg>
                  <span>{file.split("/")[file.split("/").length - 1]}</span>
                </a>
              </li>
            ))}
          </ul>

          {orderItem.status !== "completed" &&
            orderItem.status !== "cancelled" &&
            orderItem.status !== "cancelledUser" &&
            user.statusUser === "user" && (
              <button
                className={styles.button}
                onClick={() =>
                  changeStatusOrder(
                    "cancelledUser",
                    setLoading,
                    user.token,
                    orderId
                  )
                }
              >
                ZRUŠIT OBJEDNÁVKU
              </button>
            )}
          {orderItem.status === "completed" && user.statusUser !== "owner" && (
            <button className={styles.button_review} onClick={() => setLoading('review')}>PŘIDAT RECENZI</button>
          )}

          {user.statusUser === "owner" && (
            <div className={styles.box_status}>
              <p className={styles.button_status}>ZMĚNIT STAV OBJEDNÁVKY</p>
              <ul
                className={styles.list_status}
                onClick={({ target }) =>
                  changeStatusOrder(
                    target.value,
                    setLoading,
                    user.token,
                    orderId
                  )
                }
              >
                <li className={styles.item_status}>
                  <button value="accepted">PŘIJMOUT</button>
                </li>
                <li className={styles.item_status}>
                  <button value="completed">DOKONČIT</button>
                </li>
                <li className={styles.item_status}>
                  <button value="cancelled">ZRUŠIT</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Objednávku se nepodařilo nalézt</p>
      )}
    </>
  );
}
