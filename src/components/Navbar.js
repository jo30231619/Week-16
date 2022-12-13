import React from "react";
import Reservations from "./Reservations";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import Reviews from "./Reviews";

export default class NavbarComp extends React.Component {
    constructor() {
        super();
    
        this.state = {
            names: null,
        };
    
        this.ENDPOINT = "https://crudcrud.com/api/a29b8e665d12440ca7941ccb9f2ec055";
    };

    componentDidMount = () => {};

    render () {
        return (
                <Router>
            <div>    
                <Navbar bg="info" variant="dark">
                    <Container>
                    <Navbar.Brand href="#">Tierra y Mar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
                        <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
        <Switch>
          <Route path="/reservations">
            <Reservations />
          </Route>
          <Route path="/reviews">
            <Reviews names={this.state.names} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            </div>
                </Router>
        );      
    }
}


