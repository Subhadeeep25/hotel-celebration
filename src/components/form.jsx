import React, { useState } from "react";
import "./form.css";

export const Form = () => {
  return (
    <div className="form-main">
      <div className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfixeGk4vvlERUrIN7AncQXp49sjg_ITb1DdaVZ4-McSDNfXg/viewform?embedded=true"
          width="640"
          height="1450"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
