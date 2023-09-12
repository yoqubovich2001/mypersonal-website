import React, { useEffect } from "react";

import styles from "./About.module.scss";
import certificate from '../../images/certificate.png'
import technoligies from '../../images/technologies.svg'
import AOS from "aos";
import "aos/dist/aos.css";

export const About: React.FC = () => {
   useEffect(() => {
     AOS.init({
       duration: 2000,
       offset: 200,
     });
   }, []);
    return (
      <div id="about" className={styles.about}>
        <h1>About me</h1>
        <div className={styles.aboutInfo}>
          <p className={styles.aboutTitlle} data-aos="fade-right">
            I am QOBILJON IBAYDULLAYEV. I am 21 years old. I am a junior
            front-end developer. I have more than 6 months of experience in this
            field. I am currently working as a freelancer.
          </p>
          <img className={styles.aboutInfoImg} data-aos="fade-left" src={certificate} alt="certificate img" />
        </div>
        <div className={styles.aboutBottom}>
          <img
            data-aos="fade-right"
            className={styles.technoligies}
            src={technoligies}
            alt="technoligies img"
          />
          <ul className={styles.aboutList} data-aos="fade-left">
            <h1>Technoligies</h1>
            <li className={styles.aboutListItem}>HTML</li>
            <li className={styles.aboutListItem}>CSS</li>
            <li className={styles.aboutListItem}>Sass</li>
            <li className={styles.aboutListItem}>Scss</li>
            <li className={styles.aboutListItem}>Bem</li>
            <li className={styles.aboutListItem}>Javascript</li>
            <li className={styles.aboutListItem}>Typescript</li>
            <li className={styles.aboutListItem}>React</li>
            <li className={styles.aboutListItem}>Vue.js</li>
          </ul>
        </div>
      </div>
    );
};
