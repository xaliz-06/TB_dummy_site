import React from "react";
import SideSection from "./SideSection";
import ImageSection from "./ImageSection";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.content}>
        <SideSection />
        <ImageSection />
      </div>
    </React.Fragment>
  );
};

export default Home;
