import React from "react";

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container" />
    {children}
  </section>
);

export default Carousel;
