"use client";

import { useState, useEffect} from "react";
import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import { UserContext } from "../contexts/UserContext";

import { getCurrentUser } from "./_api/currentUser";



export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUser(setUser, token);
    }
  }, []);

  const [user, setUser] = useState<{name: string, surname: string, statusUser: string, token: string, avatarUrl: string}>({
    name: "",
    surname: "",
    statusUser: "",
    token: "",
    avatarUrl: "",
  });

  return (
    <>
      <UserContext.Provider
        value={{ user, setUser }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </UserContext.Provider>
    </>
  );
}
