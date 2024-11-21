import React from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import Architecture from "./components/Architecture";
import Studio from "./components/Studio";
import Contact from "./components/Contact";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import Archive from "./components/Archive";

export default function App() {
  return (
    <section className="containerApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/archives" element={<Archive />} />
        <Route path="/architecture/archives" element={<Archive />} />
      </Routes>
    </section>
  );
}
