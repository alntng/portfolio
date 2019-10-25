import React from "react";
import NewNews from "./Projects/newNews";
import Nudge from "./Projects/nudge";

import Carousel from "./Projects/carousel";
import { Item } from "./Projects/carouselComponents";

export default function projects() {
  return (
    <section id="two" className="main style2">
      <a href="#" className="icon alt fa-angle-double-up">
        <div align="center" className="label">
          Home
        </div>
      </a>
      <h1 align="center">Projects</h1>

      <Carousel title="Carousel">
        <NewNews />
        <Nudge />
        {/* <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" /> */}
      </Carousel>
    </section>
  );
}
