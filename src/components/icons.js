import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "Circle":
      <FaRegCircle className="icon" />;
      break;
    case "Cross":
      <FaTimes className="icon" />;
      break;
    default:
      <FaPen className="icon" />;
      break;
  }
};

export default Icon;
