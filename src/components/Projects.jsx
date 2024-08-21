import React from "react";

import Heading from "./Heading";
import { projectsList } from "../assets/data";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container res-padding space-y-8">
        <Heading className="text-center ">My Projects</Heading>

        {/* {projectsList.map((item, index) => {
          return (
            <div key={index} className="">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          );
        })} */}
      </div>
    </section>
  );
};

export default Projects;
