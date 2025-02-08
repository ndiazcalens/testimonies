import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
  <div className="testimony-container">
    <img className="img-testimony"
    src={require(`../images/${props.image}-testimony.png`)} /*las comillas invertidas me dejan poner ${} para insertar codigo js*/
    alt={props.name} />
    <div className="text-testimony-container">
      <p className="testimony-job-position">{props.job} in <strong>{props.company}</strong></p>
      <p className="testimony-name-country"><strong>{props.name}</strong> in {props.country}</p>
      <p className="testimony-text">"{props.testimony}"</p>
    </div>
  </div>
  )
}

export default Testimony;