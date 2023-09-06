import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.scss";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
import classNames from 'classnames'
import { ResumeModal } from "../ResumeModal";
export interface IBannerProps {
  setIsModal: Function;
}
export const NavBar: React.FC<IBannerProps> = ({
  setIsModal,
}: IBannerProps) => {
  const modalOpen = () => {
    
  }
  useEffect(() => {
    controlActive();
  }, []);
  const controlActive = () => {
    const navbar = document.querySelectorAll("button");
    navbar.forEach((element) => {
      element.addEventListener("click", function () {
        navbar.forEach((nav) => nav.classList.remove(styles.active));

        this.classList.add(styles.active);
      });
    });
  };
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="" />
      <ul className={styles.navbarList}>
        <li>
          <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
            <button
              className={classNames(styles.navbarBtn, styles.active)}
              onClick={controlActive}
            >
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <button className={styles.navbarBtn} onClick={controlActive}>
              About
            </button>
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
            <button className={styles.navbarBtn} onClick={controlActive}>
              Portfolio
            </button>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className={styles.navbarBtn} onClick={controlActive}>
              Contact
            </button>
          </Link>
        </li>
        <li>
          <button
            className={styles.navbarBtn}
            onClick={() => {
              setIsModal(true);
            }}
          >
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
};
