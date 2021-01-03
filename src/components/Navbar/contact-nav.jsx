import React from "react";

function ContactNav() {
  return (
    <li>
        <div class="nav-item">
        <a
            href=""
            class="nav-link"
            data-toggle="modal"
            data-target="#modalContactForm"
        >
            <img
            src="assets/Images/Favicons/fa-email.png"
            class="fa-icon-size"
            /> Contact
        </a>
        </div>
    </li>
  );
}

export default ContactNav;