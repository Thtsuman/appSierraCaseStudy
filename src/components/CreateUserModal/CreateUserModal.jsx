import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CustomInput } from "../CustomInputFields/CustomInputFields";
import * as Yup from "yup";
import apiFunc from "../../services";
import userServices from "../../services/userServices";
import { toast } from "react-toastify";

const scehma = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email("Invalid email").required(),
  position: Yup.string().required(),
});

const CreateUserModal = (props) => {
  const { show, handleClose, onSuccess } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateUser = (values) => {
    setIsLoading(true);
    apiFunc({ ...userServices.createUser, sendData: values })
      .then((resp) => {
        if (resp.status === 201) {
          onSuccess();
        } else {
          toast.error("Something went wrong!");
        }
        setIsLoading(false);
        handleClose();
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Something Went wrong!");
        handleClose();
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <>
          <div className="h5">Create User</div>
          <hr />
          <Formik
            onSubmit={handleCreateUser}
            validationSchema={scehma}
            initialValues={{ name: "", email: "", position: "" }}
          >
            {(formikProps) => (
              <>
                <Field
                  component={CustomInput}
                  label="Name"
                  name="name"
                  requiredField
                  type="text"
                  autoComplete="off"
                  placeholder="eg: John Doe"
                />
                <Field
                  component={CustomInput}
                  label="Email"
                  name="email"
                  requiredField
                  type="text"
                  autoComplete="off"
                  placeholder="eg: JohnDoe@gmail.com"
                />
                <Field
                  component={CustomInput}
                  label="Position"
                  name="position"
                  requiredField
                  type="text"
                  autoComplete="off"
                  placeholder="eg: Front End Developer"
                />

                <div className="d-flex align-items-center justify-content-end">
                  <Button variant="secondary" size="sm" onClick={handleClose}>
                    Close
                  </Button>
                  <div className="mx-1"></div>
                  <Button
                    disabled={isLoading}
                    variant="primary"
                    size="sm"
                    onClick={formikProps.handleSubmit}
                  >
                    Create User
                  </Button>
                </div>
              </>
            )}
          </Formik>
        </>
      </Modal.Body>
    </Modal>
  );
};

export default CreateUserModal;
