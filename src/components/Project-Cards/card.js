import React from "react";

function ProjectCard(props) {
  return (
    <section className="container card-deck col-md-12 col-lg-3">
      <div className="card mx-auto" >
        <img className="card-img-top" src={props.img} alt="project link"/>
        <div className="card-body">
          <h5 className="card-title">
            <strong>{props.title}</strong>
          </h5>
          <p className="card-text">
            {props.innerText}
          </p>
          <a
            href={props.site}
            className="btn btn-primary"
            target="_blank"
            alt="site link"
            rel="noreferrer"
          >
            Site
          </a>
          <a
            href={props.github}
            className="btn btn-primary"
            target="_blank"
            alt="github link"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
