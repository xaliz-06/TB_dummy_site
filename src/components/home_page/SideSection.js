import React from "react";
import styles from "./Side_section.module.css";

const SideSection = () => {
  return (
    <React.Fragment>
      <div className={styles.content}>
        <h3 className={styles.header}>Start Your Journey!</h3>
        <p className={styles.para}>
          in eu mi bibendum neque egestas congue quisque egestas diam in arcu
          cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit
          libero volutpat sed cras ornare arcu dui
        </p>
        <button className={styles.btn}>
          <p className={styles.btn_text}>
            Start Here <i class="fa-solid fa-arrow-right"></i>
          </p>
        </button>
      </div>
    </React.Fragment>
  );
};

export default SideSection;
