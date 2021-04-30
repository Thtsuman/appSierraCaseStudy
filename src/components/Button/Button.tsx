import React from "react";
import "./button.style.scss";

type ButtonProps = {
  size?: "sm" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (e?: any) => void;
  variant?:
    | "outline-primary"
    | "primary"
    | "outline-warning"
    | "warning"
    | "outline-danger"
    | "danger";
  className?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { size = "" } = props;
  return (
    <div
      onClick={props.onClick}
      className={`btn w-100 px-2 py-1 btn-${props.variant} ${
        size ? "btn-" + size : ""
      } ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Button;
