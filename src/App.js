import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/Navbar";
import "./app.css";


class App extends React.Component {
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

  componentDidMount = () => {
    this.getNames();
  };

  setStateCallback = () => {
    // console.log(this.state);
  };

  getNames = () => {
    fetch(this.ENDPOINT + "/names")
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        this.setState({ names: data }, this.setStateCallback);
      });
  };

  submitName = (fn, ln) => {
    console.log(fn, ln);
    fetch(this.ENDPOINT + "/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first: fn, last: ln }),
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

  updateName = (id, fn, ln) => {
    // console.log(id, fn, ln)
    fetch(this.ENDPOINT + "/names/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first: fn, last: ln }),
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
    
  
    return (
      <div>
        <NavbarComp />
        
      </div>
    );
  }
}

export default App;
