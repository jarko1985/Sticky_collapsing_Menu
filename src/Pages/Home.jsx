import React from "react";
import MotionHoc from "../HOC/MotionHoc";

const HomeComponent = () => {
  return <h1>Home</h1>;
};
const Home = MotionHoc(HomeComponent);

export default Home;
