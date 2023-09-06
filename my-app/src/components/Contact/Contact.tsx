import React from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Contact: React.FC = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactMsgs}>
        <ul className={styles.contactMsgsList}>
          <li>
            <a target="_blank" href="https://github.com/yoqubovich2001">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#eaecf0" }}
              />
              <span>yoqubovich2001</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/Yoqubovich_2001">
              <FontAwesomeIcon
                icon={faTelegram}
                beatFade
                size="2xl"
                style={{ color: "#146aff" }}
              />
              <span>yoqubovich_2001</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/yoqubovich_2001/?next=%2F"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2xl"
                style={{ color: "#a82464" }}
              />
              <span>yoqubovich_2001</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/qobiljon.ibaydullayev.9/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
            >
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
              <span>yoqubovich_2001</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.contactRight}>
        <div className={styles.contactRightAdress}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5988.271342391294!2d69.266297!3d41.371137!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIyJzE2LjEiTiA2OcKwMTUnNTguNyJF!5e0!3m2!1suz!2s!4v1693819119467!5m2!1suz!2s"
            width="300"
            height="200"
            loading="lazy"
          >
            when
          </iframe>
        </div>
        <div className={styles.contactRightConnection}>
          <a href="#!">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            <span>qobiljonibaydullayev2002@gmail.com</span>
          </a>

          <a href="tel:+998932455510">
            {" "}
            <FontAwesomeIcon icon={faPhone} size="2xl"/>
            <span>+998932455519</span>
          </a>
        </div>
      </div>
    </div>
  );
};
