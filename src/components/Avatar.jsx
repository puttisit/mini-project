import React from "react";

const Avatar = (props) => {
  return <img className="avatar-img" src={props.src} alt={props.alt} />;
}

export default Avatar;