import React from "react";

const SFCHeader = props => {
  return(
    <div className="sfc-header">
      <h1>{props.header}</h1>
      <h3>{props.subHeader}</h3>
    </div>
  );
}

export default SFCHeader;
