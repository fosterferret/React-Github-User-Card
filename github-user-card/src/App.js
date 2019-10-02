import React from "react";
import axios from "axios";
import Followers from "./Followers";
import User from "./User";
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
        console.log(this.state.user);
      })
      .then(
        axios
          .get("https://api.github.com/users/fosterferret/followers")
          .then(response => {
            this.setState({ followers: response.data });
            console.log(this.state.followers);
          })
          .catch(error => {
            console.log(error);
          })
      )
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <User user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
