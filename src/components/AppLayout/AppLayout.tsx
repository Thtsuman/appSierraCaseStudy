import React from "react";
import "./appLayout.style.scss";

const AppLayout: React.FC = (props) => {
  return (
    <div className="app-layout-wrapper ">
      <div className="container my-3">{props.children}</div>
    </div>
  );
};

export default AppLayout;
