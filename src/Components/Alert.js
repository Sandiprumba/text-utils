import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    //it will leave first character and take all
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    ///if props.alert is not null then run the div code ..if null dont run
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:
        {capitalize(props.alert.msg)}
      </div>
    )
  );
}

export default Alert;
