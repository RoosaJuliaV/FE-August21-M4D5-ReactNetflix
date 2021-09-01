import { Component } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class MoviesRow extends Component {
  state = {
    movies: [],
    searchQuery: ''
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=b248648f&s=" + this.props.rowQuery
      );
      let moviesArray = await response.json();
      this.setState({
        movies: moviesArray.Search.slice(0, 6),
      });
      console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="container-fluid mb-4">
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <h2>{this.props.rowTitle}</h2>
        <Row className="row no-gutter row-cols-1 row-cols-sm-2row-cols-md-3 row-cols-lg-6">
          {this.state.movies.filter(m => m.Title.toLowerCase().includes(this.state.searchQuery)).map((movie) => (
            <SingleMovie movieObj={movie} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default MoviesRow;
