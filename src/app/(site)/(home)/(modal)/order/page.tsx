"use client";

import styles from "./page.module.scss";
import { FormCreateOrder } from "@/app/(site)/components/FormCreateOrder/FormCreateOrder";
import { useState, useContext } from "react";

import { useUserContext } from "@/app/hooks/userHooks";

import { Loader } from "@/app/(site)/components/Loader/loader";
import { ErrorMessage } from "@/app/(site)/components/ErrorMessage/ErrorMessage";
import { SuccessMessage } from "@/app/(site)/components/SuccessMessage/SuccessMessage";

export default function Order() {
  const { user } = useUserContext();
  const [loading, setLoading] = useState("unloaded");
  switch (loading) {
    case "unloaded":
      return (
        <div className={styles.box}>
          <FormCreateOrder value={{ setLoading, user }} />
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
          <SuccessMessage type={"order-create"} />
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
