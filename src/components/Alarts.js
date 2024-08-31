import React from "react";

function Alarts(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alarts && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alarts.tp}</strong>: {props.alarts.msg}
        </div>
      )}
    </div>
  );
}

export default Alarts;
