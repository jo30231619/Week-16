import React from "react";
import Name from "./Name";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameInput: "",
      lastNameInput: "",
      dateInput: "",
      timeInput: "",
      names: null,
    };

    this.ENDPOINT = "https://crudcrud.com/api/a29b8e665d12440ca7941ccb9f2ec055";
  }

  componentDidMount = () => {};

  setStateCallback = () => {
    // console.log(this.state);
  };

  getNames = () => {
    fetch(this.ENDPOINT + "/names")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        this.setState({ names: data }, this.setStateCallback);
      });
  };

  submitName = (fn, ln, dt, tm) => {
    console.log(fn, ln, dt, tm);
    fetch(this.ENDPOINT + "/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first: fn, last: ln, date: dt, time: tm }),
    }).then((result) => {
      this.getNames();
      console.log(result);
    });
  };

  deleteName = (id) => {
    fetch(this.ENDPOINT + "/names/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      console.log(result);
      this.getNames();
    });
  };

  updateName = (id, fn, ln, dt, tm) => {
    // console.log(id, fn, ln)
    fetch(this.ENDPOINT + "/names/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first: fn, last: ln, date: dt, time: tm }),
    }).then((result) => {
      console.log(result);
      this.getNames();
    });
  };

  handleChange = (e) => {
    var id = e.target.getAttribute("id");
    if (id == "newFirst") {
      this.setState({ newFirstInput: e.target.value });
    }
    if (id == "newLast") {
      this.setState({ newLastInput: e.target.value });
    }
    if (id == "newDate") {
      this.setState({ newDateInput: e.target.value });
    }
    if (id == "newTime") {
      this.setState({ newTimeInput: e.target.value });
    }
  };

  render() {
    var names = <div>LOADING</div>;
    if (this.state.names !== null) {
      // console.log(this.state.names)
      var names = this.state.names.map((n, index) => {
        var combinedName = n.first + " " + n.last + " " + n.date + " " + n.time;
        var id = n._id;
        return (
          <div key={id}>
            <Name
              deleteName={this.deleteName}
              updateName={this.updateName}
              id={id}
              combinedName={combinedName}
            />
          </div>
        );
      });
    }

    return (
      <div>
        <Card>
          <Card.Body>
            <h1>Make a Reservation Online</h1>
            <br />
            <Button variant="info" onClick={this.getNames}>
              Get Names
            </Button>
            <br />
            <br />
            First:{" "}
            <input
              defaultValue={this.state.firstNameInput}
              id="firstName"
              onChange={this.handleChange}
            ></input>
            Last:{" "}
            <input
              defaultValue={this.state.lastNameInput}
              id="lastName"
              onChange={this.handleChange}
            ></input>
            <br />
            <br />
            Date:{" "}
            <input
              defaultValue={this.state.dateInput}
              id="date"
              onChange={this.handleChange}
            ></input>
            Time:{" "}
            <input
              defaultValue={this.state.timeInput}
              id="time"
              onChange={this.handleChange}
            ></input>
            <br />
            <br />
            <Button
              variant="info"
              onClick={() =>
                this.submitName(
                  this.state.firstNameInput,
                  this.state.lastNameInput,
                  this.state.dateInput,
                  this.state.timeInput
                )
              }
            >
              Submit
            </Button>
            <br />
            <br />
            {names}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
