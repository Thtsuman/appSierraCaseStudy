import React from "react";
import { Link, withRouter } from "react-router-dom";
import AppLayout from "../../components/AppLayout/AppLayout";
import "./homepage.style.scss";

const Homepage = (props) => {
  const stackUsed = [
    { name: "React" },
    { name: "Bootstrap" },
    { name: "React Bootstrap" },
    { name: "Sass" },
    { name: "Axios" },
    { name: "Mock API" },
    { name: "Formik (for form)" },
    { name: "Yup (form validation)" },
  ];

  return (
    <AppLayout>
      <div id="homepage-wrapper">
        <div className="description">
          <div className="">
            <div className="h3 font-weight-bold">Case Study for App Sierra</div>
            <div className="h5">
              Created by <span className="text-muted">Suman Chakraborty</span>
            </div>
            <div className="h5">
              Git Repo &nbsp;
              <a
                href="https://github.com/Thtsuman/appSierraCaseStudy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm">Link</span>
              </a>
            </div>
          </div>
          <div className="mt-3 card rounded-lg shadow-sm">
            <div className="card-body">
              <div className="h5 font-weight-bold">Stack Used</div>
              {stackUsed?.map((tech, index) => (
                <div className="text-muted" key={index}>
                  * {tech.name}
                </div>
              ))}
            </div>
          </div>

          <hr />
          {/* project 1 */}
          <div className="mt-3">
            <div className="row">
              <div className="col-6">
                <div
                  onClick={() => props.history.push("/counter")}
                  className="card rounded-lg shadow-sm cursor-pointer"
                >
                  <div className="card-body">
                    <div className="h5 font-weight-bold">Counter</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div
                  onClick={() => props.history.push("/user")}
                  className="card rounded-lg shadow-sm cursor-pointer"
                >
                  <div className="card-body">
                    <div className="h5 font-weight-bold">Profile Create And Map</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default withRouter(Homepage);
