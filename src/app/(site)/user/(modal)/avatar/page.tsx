"use client";

import styles from "./page.module.scss";
import { AvatarForm } from "@/app/(site)/components/AvatarForm/AvatarForm";
import { useState, useContext } from "react";

import { useUserContext } from "@/app/hooks/userHooks";

import { Loader } from "@/app/(site)/components/Loader/loader";
import { ErrorMessage } from "@/app/(site)/components/ErrorMessage/ErrorMessage";
import { SuccessMessage } from "@/app/(site)/components/SuccessMessage/SuccessMessage";

export default function Avatar() {
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState("unloaded");
  switch (loading) {
    case "unloaded":
      return (
        <div className={styles.box}>
          <AvatarForm value={{ setLoading, user, setUser }} />
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
