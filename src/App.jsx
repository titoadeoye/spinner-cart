import React from "react";
import { createRoot } from "react-dom/client";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";

const root = createRoot(document.getElementById("app"));

const App = () => (
  <div className="text-2xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);

root.render(<App />);
