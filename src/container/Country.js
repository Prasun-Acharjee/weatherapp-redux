import React from "react";
import { connect } from "react-redux";
const Country = (props) => {
  console.log(props);
  return (
    <div>
      {props.weathers ? (
        props.weathers.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <p>NO WEATHER</p>
      )}
      {typeof props.error === "string" && <h1>{props.error}</h1>}
    </div>
  );
};

const mapStateToProps = (store) => ({
  weathers: store.weather,
  error: store.error,
});

export default connect(mapStateToProps, null)(Country);
