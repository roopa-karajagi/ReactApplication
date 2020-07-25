import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./TestAction";
import { Button, Form, Segment } from "semantic-ui-react";

//from the provider state will be passed to components via mapStateToProps
const mapStateToProps = (state) => ({
  data: state.test.data,
});

//passing these actions as props to TestComponent
//dipatch actions to reducers --> update state=> then update in store state-> then via provider it will be availble ==> using mapStatetoProps it will be availble in UI -- >everything will be connected through HOC --"Connect"--> Rerendering happens then updation
const dispatchActions = {
  incrementCounter,
  decrementCounter,
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1> Test Component</h1>
        <h2> data:{data}</h2>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
      </div>
    );
  }
}
export default connect(mapStateToProps, dispatchActions)(TestComponent);
