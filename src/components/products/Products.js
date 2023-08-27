import React from "react";
import styles from "./Products.module.css";
import ProductCard from "./ProductCard";

const data = [
  {
    header: "Web Development",
    desc: "Learn Full Stack Web Development using latest industry MERN stak using technologies like HTML, CSS, Bootstrap, JavaScript, React, Node.js, MongoDB, GraphQl, deployment and much more.",
  },
  {
    header: "Internet of Things",
    desc: "Learn all about Internet of Things from basics to advanced using hands-on approach. Learn about different sensors, boards, microprocessors and other technologies and applications in the real world.",
  },
  {
    header: "Machine Learning",
    desc: "Learn Machine Learning right from a beginner level to an expert level. Learn to use different algorithms, models, tools for Neural Networks, Deep Learning and more.",
  },
];

const coursesList = data.map((course) => {
  return <ProductCard header={course.header} desc={course.desc} />;
});

const Products = () => {
  return (
    <React.Fragment>
      <div className={styles.content}>
        <hr />
        <h1 className={styles.header}>Our Courses</h1>
        <div className={styles.courses}>{coursesList}</div>
      </div>
    </React.Fragment>
  );
};

export default Products;
