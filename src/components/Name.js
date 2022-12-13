import React from "react";
import Button from 'react-bootstrap/Button';

class ListOfNames extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newFirstInput: "",
            newLastInput: "",
            newDateInput: "",
            newTimeInput: ""
        };
    }

    componentDidMount = () => {};

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
            <div className="border">
                Reservation Information:<br />
                <span style={{ fontSize: "16pt" }}>{this.props.combinedName}</span>
                <br /><br />
                <Button variant="info" onClick={() => this.props.deleteName(this.props.id)}>
                    Delete
                </Button> {" "}
                <Button variant="info"
                    onClick={() =>
                        this.props.updateName(
                            this.props.id,
                            this.state.newFirstInput,
                            this.state.newLastInput,
                            this.state.newDateInput,
                            this.state.newTimeInput
                        )    
                    }
                >
                    Update    
                </Button>{" "}
                <input
                    onChange={this.handleChange}
                    value={this.state.newFirstInput}
                    id="newFirst"
                ></input>{" "}
                <input
                    onChange={this.handleChange} //handle change will run everytime something is changed in these inputs
                    value={this.state.newLastInput}
                    id="newLast"
                ></input>
                <input
                    onChange={this.handleChange}
                    value={this.state.newDateInput}
                    id="newDate"
                ></input>
                 <input
                    onChange={this.handleChange}
                    value={this.state.newTimeInput}
                    id="newTime"
                ></input>        
                <br />
                <br />      
            </div>
        );
    }
}

export default ListOfNames;