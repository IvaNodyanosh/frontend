"use client";

import { FormRegisterUser } from "@/app/(site)/components/FormRegisterUser/FormRegisterUser";
import { Loader } from "@/app/(site)/components/Loader/loader";
import { SuccessMessage } from "@/app/(site)/components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "@/app/(site)/components/ErrorMessage/ErrorMessage";
import styles from "./page.module.scss";
import { useState } from "react";

export default function RegisterUser() {
  const [loading, setLoading] = useState("unloaded");

  switch (loading) {
    case "unloaded":
      return (
        <div className={styles.box}>
          <FormRegisterUser setLoading={setLoading} />
        </div>
      );

    case "load":
      return (
        <div className={styles.box}>
          <Loader />
        </div>
      );
    case "success":
      return (
        <div className={styles.box}>
          <SuccessMessage type={"register-user"} />
        </div>
      );
    case "error":
    case "emailRegistered":
      return (
        <div className={styles.box}>
          <ErrorMessage type={loading} />
        </div>
      );
  }
}
