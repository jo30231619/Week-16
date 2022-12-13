import React from "react";
import Form from "./Form";


class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount = () => {};

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div className="border">
      Reservations
      <Form />

      </div>
    );
  }
}

export default Reservations;
