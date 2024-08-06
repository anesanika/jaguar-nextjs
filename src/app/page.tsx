"use client";

import { useEffect } from "react";
import Main from "@/components/Main";
import Lenis from "lenis";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      // Handle scroll event
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Jaguar NextJs</title>
        <meta
          name="description"
          content="This is the home page of my Next.js app"
        />
      </Head>
      <Main />
    </>
  );
}
