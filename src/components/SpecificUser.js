import React from "react";
import { useParams } from "react-router-dom";

class SpecificUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Review: ""
        }

        this.ENDPOINT = "https://crudcrud.com/api/a29b8e665d12440ca7941ccb9f2ec055";
    }

    componentDidMount = () => {
        this.getName(this.props.location.pathname);
    };

    componentDidUpdate(prevProps, prevState) {
        var previousID = prevProps.location.pathname
        var newID = this.props.location.pathname


        if (previousID != newID) {
            this.getName(newID)
        }
    }

    getName = (id) => {
        fetch(this.ENDPOINT + "/names" + id)
            .then((result) => result.json())
            .then((data) => {
                this.setState({user: data})
            });
    };

    render() {
        return (
            <div className="border">
                <span style={{fontWeight: "bold"}}>USER'S PROFILE:</span><br />
                FIRST NAME: {this.state.user.first}<br />
                LAST NAME: {this.state.user.last}<br />
                ID: {this.state.user._id}<br />
            </div>
        );
    }
}

export default SpecificUser;