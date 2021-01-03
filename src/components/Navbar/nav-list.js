import React from "react";
import NavItem from "./nav-item";
import ContactNav from './contact-nav';
import "./style.css";

function NavList() {
  return (
    <ul className="navbar-nav ml-auto">
      <NavItem
        href="./aboutMe.html"
        altLink="About Page"
        src="/assets/Images/Favicons/fa-aboutme.png"
        altImg="aboutme"
        innerText="about"
      />
      <NavItem
        href="./portfolio.html"
        altLink="Portfolio Page"
        src="/assets/Images/Favicons/fa-briefcase.png"
        altImg="portfolio"
        innerText="portfolio"
      />
      <NavItem
        href="https://www.linkedin.com/in/rick-mingione-2b535047/"
        target="_blank"
        rel="noreferrer"
        altLink="LinkedIn Link"
        src="/assets/Images/Favicons/fa-linkedin.png"
        altImg="linkedIn"
        innerText="LinkedIn"
      />
      <NavItem
        href="https://github.com/Rivenception"
        target="_blank"
        rel="noreferrer"
        altLink="GitHub Link"
        src="/assets/Images/Favicons/fa-github.png"
        altImg="github"
        innerText="GitHub"
      />
      <ContactNav/>
    </ul>
  );
}

export default NavList;