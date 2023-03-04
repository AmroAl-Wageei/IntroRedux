import React, { Component } from "react";
import { connect } from "react-redux";

import { increasde, decrese } from "../action/action";

class ClassCount extends Component {
  //   increace = () => {
  //     this.setState({
  //       count: this.state.count + 5,
  //     });
  //   };
  //   decrese = () => {
  //     this.setState({
  //       count: this.state.count - 5,
  //     });
  //   };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Class Count Redux " +-5 "</h1>

        <button onClick={this.props.increace}> + </button>
        {/*<div> {this.state.count} </div>*/}
        <div> {this.props.amro} </div>
        <div> {this.props.location} </div>
        <button onClick={this.props.decrese}> - </button>
      </div>
    );
  }
}

// Take State from store and pass to component as props
function mapStateToProps(state) {
  return {
    amro: state.count + 11,
    // name: state.name,
    // age: state.age,
    // location: state.location,
  };
}

// 1
// const Action1 = {
//   type: "INCREASE",
// };
// const Action2 = {
//   type: "DECRESE",
// };

function mapDispatchToProps(dispatch) {
  return {
    // 3
    increace: () => dispatch(increasde()),
    // 2
    decrese: () => dispatch({ type: "DECRESE" }),
    // decrese: () => dispatch({ decrese }),
    // increace: () => Action1(),
    // decrese:  () => Action2(),
  };
}
// Store.dispatch(action)

export default connect(mapStateToProps, mapDispatchToProps)(ClassCount);

// Connect between component and redux " reducer "
// export default connect(mapStateToProps)(ClassCount);
