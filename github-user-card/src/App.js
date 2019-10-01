import React from "react";
import axios from "axios";
import Followers from "./Followers";
import User from "./User";
import GitHubCalendar from "github-calendar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: []
    };
    this.calendar = false;
  }

  // componentDidMount() {
  //   debugger;
  //   this.fetchUser();
  // }
  // componentDidUpdate() {
  //   this.fetchUser();
  // }

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

    if (this.state.user && !this.calendar) {
      GitHubCalendar(`.calendar`, this.state.login, {
        responsive: true
      });
      console.log(this.state.login);
      this.calendar = true;
    }
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
