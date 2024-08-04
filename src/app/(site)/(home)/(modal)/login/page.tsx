"use client";

import styles from "./page.module.scss";

import { useState } from "react";

import { FormLogin } from "@/app/(site)/components/FormLogin/FormLogin";
import { Loader } from "@/app/(site)/components/Loader/loader";
import { ErrorMessage } from "@/app/(site)/components/ErrorMessage/ErrorMessage";
import { redirect } from "next/navigation";

export default function Order() {
  const [loading, setLoading] = useState("unloaded");

  switch (loading) {
    case "unloaded":
      return (
        <div className={styles.box}>
          <FormLogin setLoading={setLoading} />
        </div>
      );
    case "success":
      return redirect("/user");
    case "load":
      return (
        <div className={styles.box}>
          <Loader />
        </div>
      );
    case "error":
    case "userBlocked":
    case "userNotFound":
      return <ErrorMessage type={loading} />;
  }
}
