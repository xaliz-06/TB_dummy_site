import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>TechBairn</h1>
        <div className={styles.logos}>
          <i class="fa-solid fa-plus fa-xl"></i>
          <i class="fa-solid fa-bell fa-xl"></i>
          <i class="fa-solid fa-user fa-xl"></i>
          <i class="fa-solid fa-bars fa-xl"></i>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
