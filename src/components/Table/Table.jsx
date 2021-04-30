import React from "react";

const Table = (props) => {
  const { tableHead, tableBody, isLoading = false } = props;
  return (
    <div className="custom-table bg-white border rounded-lg px-3">
      {/* table head */}
      <div className="row border rounded-lg py-2 shadow-sm sticky-top bg-white">
        {tableHead?.map((head, index) => (
          <div className="col text-muted text-sm" key={index}>
            {head.label}
          </div>
        ))}
      </div>

      <div className="mt-3"></div>

      {isLoading ? (
        <div className="col-12 text-center my-3">
          <div className="text-muted">Loading...</div>
        </div>
      ) : (
        <>
          {tableBody?.map((item, index) => (
            <div className="row py-2" key={index}>
              {tableHead?.map((head, i) => (
                <div className="col text-capitalize" key={i}>
                  {item[head.key]}
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Table;
