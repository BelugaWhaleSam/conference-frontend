import React from "react";

import { RegisterModal } from "../features/register/components/RegisterModal/RegisterModal";

import "./Landing.css";
import "../global.css";

export const Landing: React.FC = () => {
  return (
    <div className="home-container bg-color">
      <RegisterModal />
    </div>
  );
};
