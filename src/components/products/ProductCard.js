import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1 className={styles.heading}>{props.header}</h1>
        </div>
        <div className={styles.content}>
          <p className={styles.desc}>{props.desc}</p>
        </div>
        <div className={styles.button}>
          <h5 className={styles.btn}>Learn More...</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
