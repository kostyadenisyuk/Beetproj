import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";

import "./styles.scss";

export default function Button() {
  return (
    <div className="test">
      <form>
        <input placeholder="Tell me smth"></input>
        <button className="button">Click me</button>
      </form>
    </div>
  );
}
