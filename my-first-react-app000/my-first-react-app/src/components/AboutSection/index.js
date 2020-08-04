import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";

import "./styles.scss";
import Button from "../Button";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <ContentWidthLimiter>About section</ContentWidthLimiter>
      <Button />
    </section>
  );
}
