import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/fosterferret")
      .then(response => {
        this.setState({ user: response.data });
      })
      .then(
        axios
          .get("https://api.github.com/users/fosterferret/followers")
          .then(response => {
            this.setState({ followers: response.data });
            console.log(this.state.followers);
          })
          .then()
          .catch(error => {
            console.log(error);
          })
      )
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
