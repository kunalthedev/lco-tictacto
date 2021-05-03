import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      <FaRegCircle className="icon" />;
      break;
    case "cross":
      <FaTimes className="icon" />;
      break;
    default:
      <FaPen className="icon" />;
      break;
  }
};

export default Icon;
