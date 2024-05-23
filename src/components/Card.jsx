import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <Avatar src={props.src} alt={props.alt} />
      <Detail detail={props.tel} />
      <Detail detail={props.email} />
    </div>
  );
}

export default Card;