import React from "react";
import NewNews from "./Projects/newNews";
import Carousel from "react-bootstrap/Carousel";

export default function projects() {
  return (
    <section id="two" className="main style2">
      <a href="#" className="icon alt fa-angle-double-up">
        <div align="center" className="label">
          Home
        </div>
      </a>
      <h1 align="center">Projects</h1>

      <NewNews />
    </section>
  );
}
