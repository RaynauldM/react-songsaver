import React from "react";

import "./maincontent.css";

export default function DeleteBtn({ onclick, btnText }) {
  return (
    <button onClick={onclick} className="delete">
      {btnText}
    </button>
  );
}
