import React from "react";
import { Element } from "react-scroll";
import Project from "../project/project";
import "./projectContainer.css";

const projectContainer = () => {
  const projects = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AgSROpqVXOgQpJM3cmwUeIFjBfaS3Rf_xw&usqp=CAU",
      title: "calculator",
      desc: "Create A Calulator  App By Using Html,CSS,JavaScript",
      link: "https://kannansaha.github.io/calculator",
    },
    {
      img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9emasufib3g4uisr8711.jpg",
      title: "Form Validation",
      desc: "Create A form  App By Using Html,CSS,JavaScript,react.js",
      link: "https://kannansaha.github.io/Form-Validation",
    },
  ];
  return (
    <Element className="projectcontainer" id="Projects">
      <h1 style={{ paddingTop: "100px" }}>Projects</h1>
      <p>Some projects which I done for making lives of people easy</p>
      <div className="Projectcontainer-projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default projectContainer;
