import React from "react";
import styles from "./ResumeModal.module.scss";
import classNames from "classnames";
import resume from "../../images/Qobiljon_Yoqubovich_2001_CV.pdf";
import resumImg from "../../images/resumeImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export interface IAuthModalProps {
  isModal: boolean;
  setIsModal: Function;
}


export const ResumeModal: React.FC<IAuthModalProps> = ({
  isModal,
    setIsModal,
}: IAuthModalProps) => {
  return (
    <div
      className={classNames(styles.modal, {
        [styles.modalActive]: isModal,
      })}
    >
      <h1>Here is my Resume</h1>
          <button className={styles.modalCloseBtn} onClick={() => {
           setIsModal(false)   
      }}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <img
        className={styles.modalActiveImg}
        src={resumImg}
        alt="resume image"
      />

      <a className={styles.modalBtn} href={resume} download={resume}>
        <button>Download</button>
      </a>
    </div>
  );
};
