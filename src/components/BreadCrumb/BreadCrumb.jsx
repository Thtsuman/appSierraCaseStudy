import React from "react";
import { withRouter } from "react-router";

const BreadCrumb = (props) => {
  return (
    <div className="mb-2">
      <div
        className="px-3 py-1 btn btn-outline-primary btn-sm"
        onClick={() => props.history.goBack()}
      >
        Back
      </div>
    </div>
  );
};

export default withRouter(BreadCrumb);
