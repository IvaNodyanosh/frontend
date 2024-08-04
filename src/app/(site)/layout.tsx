"use client";

import { useState, createContext, useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { getCurrentUser } from "./_api/currentUser";

export const UserContext = createContext({});

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

  const [user, setUser] = useState({
    name: "",
    surname: "",
    statusUser: "",
    token: "",
    avatarUrl: "",
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </UserContext.Provider>
    </>
  );
}
