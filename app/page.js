// import Image from 'next/image'
import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/header";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Learn from "./components/Learn";

export default function Home() {
  return (
    <>
      <Navbar />

      <Header></Header>

      <Footer />
    </>
  );
}
