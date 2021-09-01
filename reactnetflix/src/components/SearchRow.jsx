import SingleMovie from "./SingleMovie";
import { Component } from "react";
import { Form, FormControl, Container, Row } from "react-bootstrap";

class SearchRow extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  generateSearchRow = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=b248648f&s=" + this.state.searchQuery
      );
      let moviesArray = await response.json();
      console.log(moviesArray);
      this.setState({
        movies: moviesArray.Search.slice(0, 6),
        // movies: moviesArray,
      });
      console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form inline>
          <FormControl
            bg="dark"
            variant="light"
            type="text"
            placeholder="Search"
            className="ml-auto mr-3"
            value={this.state.searchQuery}
            onChange={(e) => {
              this.setState({ searchQuery: e.target.value });
              console.log(this.state.searchQuery);
              this.generateSearchRow();
            }}
          />
        </Form>

        <Container className="container-fluid mb-4">
          {/* <h2>{this.props.rowTitle}</h2> */}
          <h2>{this.state.searchQuery}</h2>
          <Row className="row no-gutter row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
            {this.state.movies.map((movie) => (
              <SingleMovie movieObj={movie} />
            ))}
            {/* <SingleMovie movieObj={this.state.movies} /> */}
          </Row>
        </Container>
      </>
    );
  }
}

export default SearchRow;