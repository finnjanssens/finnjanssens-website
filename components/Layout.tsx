import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout({ children, projects }) {
  return (
    <div>
      <Head>
        <title>Finn Janssens | Portfolio</title>
        <link rel="stylesheet" href="https://use.typekit.net/nel5nyq.css" />
      </Head>
      <main
        className="grid grid-cols-5 h-screen"
        style={{ gridTemplateRows: "52px auto" }}
      >
        <Sidebar projects={projects} />
        <Nav />
        <div className="pl-2 pt-10 row-start-2 col-start-2 col-span-4 p-0 border-l-2 border-black grid grid-cols-4 overflow-y-scroll overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
