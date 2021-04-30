import { useFormikContext, getIn } from "formik";

export const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);
  return (
    <div className="form-group row align-items-center">
      {props.label ? (
        <div className="col-2">
          <label className="mb-0 pb-0">
            {props.label}
            <span style={{ position: "absolute" }} className="text-danger">
              {" "}
              {props.requiredField && "*"}
            </span>
          </label>
        </div>
      ) : (
        <></>
      )}
      <div className="col">
        <input
          {...props}
          {...field}
          className={
            "form-control " +
            props.className +
            " " +
            (error && touch && " is-invalid")
          }
        />
        {error && touch && (
          <div className="text-xsm" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

