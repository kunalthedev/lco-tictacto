import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "Circle":
      <FaRegCircle className="iconCircle" />;
      break;
    case "Cross":
      <FaTimes className="icon" />;
      break;
    default:
      <FaPen className="icon" height="100px" width="100px" fill="white"/>;
      break;
  }
};

export default Icon;
