"use client";

import styles from "./Order.module.scss";

import { getCustomer } from "../../_api/getCustomer";

import { useUserContext } from "@/app/hooks/userHooks";

import { useContext, useState, useEffect } from "react";
import { OrdersContext } from "@/app/contexts/OrderContext";
import { UserContext } from "@/app/contexts/UserContext";
import { changeStatusOrder } from "@/app/(site)/_api/changeStatusOrder";

interface Customer {
  name: string;
  surname: string;
}

interface OrderItem {
  _id: string;
  createdAt: string;
  status: string;
  message?: string;
  files: string[];
  userId: string;
}

export function Order({
  value,
}: {
  value: { orderId: string; setLoading: Function };
}) {
  const [customer, setCustomer] = useState<Customer>({ name: "", surname: "" });
  const { orderId, setLoading } = value;
  const orders: OrderItem[] = useContext(OrdersContext);
  const { user } = useUserContext();

  useEffect(() => {
    if (user.statusUser === "owner" && orders[0]) {
      getCustomer(setCustomer, orders[0].userId);
    }
  }, [orders, user.statusUser]);

  const statusOrder: Record<string, string> = {
    registered: "ZAREGISTROVÁNO",
    accepted: "PŘIJATO",
    completed: "DOKONČENO",
    cancelled: "ZRUŠENO",
    cancelledUser: "ZRUŠENO ZÁKAZNÍKEM",
  };

  const orderItem = orders.find((order: OrderItem) => order._id === orderId);

  return (
    <>
      {orderItem ? (
        <div>
          <ul>
            {user.statusUser === "owner" && customer.name === "" && (
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
            <button
              className={styles.button_review}
              onClick={() => setLoading("review")}
            >
              PŘIDAT RECENZI
            </button>
          )}

          {user.statusUser === "owner" && (
            <div className={styles.box_status}>
              <p className={styles.button_status}>ZMĚNIT STAV OBJEDNÁVKY</p>
              <ul
                className={styles.list_status}
                onClick={({ target }) => {
                  const value = (target as HTMLElement).getAttribute("value");
                  if (value) {
                    changeStatusOrder(value, setLoading, user.token, orderId);
                  }
                }}
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
