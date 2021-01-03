import React from "react";

function NavItem(props) {
  return (
    <li className="nav-item float-right">
      <a
        className="nav-link"
        href={props.href}
        alt={props.altLink}
        target={props.target}
        rel={props.rel}
      >
        <img src={props.src} className="fa-icon-size" alt={props.altImg} />{" "}
        {props.innerText}
      </a>
    </li>
  );
}

export default NavItem;
