import React from "react";
import NewNews from "./Projects/newNews";
import Nudge from "./Projects/nudge";
import GraceMonsters from "./Projects/graceMonsters";
import SceneIt from "./Projects/sceneit";

import Carousel from "./Projects/carousel";
import { Item } from "../components/carouselComponents";

export default function projects() {
  return (
    <section id="two" className="main style2">
      <div style={{ "text-align": "center" }} className="label">
        <a href="#" className="icon alt fa-angle-double-up"></a>
      </div>
      <h1 align="center">Projects</h1>
      <Carousel title="Carousel">
        <NewNews />
        <Nudge />
        <GraceMonsters />
        <SceneIt />
      </Carousel>
    </section>
  );
}
