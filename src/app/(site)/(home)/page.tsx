"use client";
import Hero from "../components/Hero/Hero";
import Response from "../components/Response/Response";
import Partners from "../components/Partners/Partners";
import Work from "../components/Work/Work";
import Success from "../components/Success/Success";
import React from "react";

export default function HomePage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {


  return (
    <>
      <Hero />
      <Response />
      <Success />
      <Partners />
      <Work />

      {children}
    </>
  );
}
