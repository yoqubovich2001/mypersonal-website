import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom"
import logo from "../../images/logo.png";
import classNames from "classnames";
export const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="" />
      <ul className={styles.navbarList}>
        <li>
          <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
            <button className={styles.navbarBtn}>Home</button>
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <button className={styles.navbarBtn}>About</button>
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className={styles.navbarBtn}>Portfolio</button>
          </Link>
        </li>
        <li>
          <button className={styles.navbarBtn}>Resume</button>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className={styles.navbarBtn}>Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
