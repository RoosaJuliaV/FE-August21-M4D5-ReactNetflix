import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../data/netflix_logo.png";

class NetflixNavbar extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Navbar variant="dark">
          <Navbar.Brand>
            <a href="#home">
              <img
                src={logo}
                width="80rem"
                alt=""
                className="logoPic navbar-brand"
              />
            </a>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <a className="nav-link active" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#tvshows">
              TV Shows
            </a>
            <a className="nav-link" href="#movies">
              Movies
            </a>
            <a className="nav-link" href="#recentlyAdded">
              Recently Added
            </a>
            <a className="nav-link" href="#mylist">
              My List
            </a>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NetflixNavbar;
