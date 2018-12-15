import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleInput = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="login">
        <p>Please log in:</p>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInput}
        />
        <br/>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
