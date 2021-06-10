import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeather } from "../actions/action.js";
import Country from "../container/Country.js";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
  }
  handlechange = (event) => {
    this.setState({ item: event.target.value }, () => console.log(this.state));
  };
  render() {
    return (
      <div>
        <input
          value={this.state.item}
          placeholder="Country..."
          onChange={this.handlechange}
          type="text"
        />
        <button onClick={() => this.props.getWeather(this.state.item)}>
          Send
        </button>
        <Country />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getWeather,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Weather);
