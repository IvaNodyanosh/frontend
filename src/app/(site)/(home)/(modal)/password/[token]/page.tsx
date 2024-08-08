"use client";

import styles from "./page.module.scss";

import { useParams } from "next/navigation";
import { useState } from "react";

import FormReset from "@/app/(site)/components/FormReset/FormReset";
import { Loader } from "@/app/(site)/components/Loader/loader";
import { SuccessMessage } from "@/app/(site)/components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "@/app/(site)/components/ErrorMessage/ErrorMessage";

export default function Password() {
  const params = useParams();
  const token = Array.isArray(params.token)
    ? params.token[0]
    : params.token || "";
  const [loading, setLoading] = useState<string>("unloaded");

  const value: { setLoading: Function; token: string } = { setLoading, token };

  switch (loading) {
    case "unloaded":
      return (
        <div className={styles.box}>
          <FormReset value={value} />
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
    case "userBlocked":
    case "userNotFound":
      return <ErrorMessage type={loading} />;
  }
}
