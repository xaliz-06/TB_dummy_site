import React from "react";
import styles from "./ImageSection.module.css";
import image from "../../assets/imgbin_computer-science-student-png.png";

const ImageSection = () => {
  return (
    <React.Fragment>
      <div className={styles.content}>
        <img src={image} className={styles.image} alt="student-png"></img>
      </div>
    </React.Fragment>
  );
};

export default ImageSection;
