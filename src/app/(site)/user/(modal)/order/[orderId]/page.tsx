"use client";

import styles from "./page.module.scss";

import { Order } from "@/app/(site)/components/Order/Order";
import { Loader } from "@/app/(site)/components/Loader/loader";
import { SuccessMessage } from "@/app/(site)/components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "@/app/(site)/components/ErrorMessage/ErrorMessage";
import FormReview from "@/app/(site)/components/FormReview/FormReview";

import { useState } from "react";

export default function OrderPage(context) {
  const { orderId } = context.params;

  const [loading, setLoading] = useState("unloaded");
  switch (loading) {
    case "unloaded":
      return (
        <div className={styles.box}>
          <Order value={{ orderId, setLoading }} />
        </div>
      );

    case "review":
      return (
        <div className={styles.box}>
          <FormReview value={{ orderId, setLoading }} />
        </div>
      );

    case "load":
      return (
        <div className={styles.box}>
          <Loader />
        </div>
      );
    case "loading":
      return (
        <div className={styles.box}>
          <SuccessMessage type={"changed-avatar"} />
        </div>
      );
    case "error":
      return (
        <div className={styles.box}>
          <ErrorMessage type={"error"} />
        </div>
      );
  }
}
