"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { Loader } from "@/app/(site)/components/Loader/loader";
import { ErrorMessage } from "@/app/(site)/components/ErrorMessage/ErrorMessage";
import { SuccessMessage } from "@/app/(site)/components/SuccessMessage/SuccessMessage";
import { verify } from "@/app/(site)/_api/verifyEmail";

export default function VerifyEmail() {
  const params: { token: string } = useParams();
  const { token } = params;
  const [loading, setLoading] = useState("load");

  useEffect(() => {
    if (token) {
      verify(token, setLoading);
    }
  }, [token]);

  switch (loading) {
    case "load":
      return <Loader />;
    case "error":
    case "userBlocked":
    case "userNotFound":
      return <ErrorMessage type={loading} />;
    case "success":
      return <SuccessMessage type={"verify-email"} />;
  }
}
