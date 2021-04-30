import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import AppLayout from "../../components/AppLayout/AppLayout";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Button from "../../components/Button/Button";

const Counter: React.FC<RouteComponentProps> = (props) => {
  const [count, setCount] = useState<number>(0);

  const handleSetCount = (type: "increase" | "decrease" | "reset") => {
    switch (type) {
      case "increase":
        setCount(count + 1);
        return;
      case "decrease":
        setCount(count - 1);
        return;
      case "reset":
        setCount(0);
        return;
      default:
        return;
    }
  };

  return (
    <AppLayout>
      <div id="counter-wrapper">
        <BreadCrumb />
        <div className="h3 font-weight-bold">Counter</div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
          <div className="border rounded-lg p-5 w-25 d-flex align-items-center justify-content-center">
            <div
              className="font-weight-bold text-muted"
              style={{ fontSize: "4rem" }}
            >
              {count}
            </div>
          </div>
          <div
            style={{ gap: "10px" }}
            className="d-flex align-items-center justify-content-between w-25 my-2"
          >
            <div className="w-100">
              <Button
                size="sm"
                variant="primary"
                onClick={() => handleSetCount("decrease")}
              >
                Decrease
              </Button>
            </div>
            <div className="w-100">
              <Button
                size="sm"
                variant="primary"
                onClick={() => handleSetCount("increase")}
              >
                Increase
              </Button>
            </div>
          </div>
          <div className="w-25">
            <Button
              size="sm"
              variant="outline-danger"
              onClick={() => handleSetCount("reset")}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default withRouter(Counter);
