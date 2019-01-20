import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";

export default class CreateNewAccount extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
    // show: false
  };

  handleInput = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLoginClick = async () => {
    const { name, email, password, confirmPassword } = this.state;
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        await axios.post("/auth/signup", { name, email, password });
        swal(
          <div>
            <p>You registered successfully!</p>
          </div>,
          { buttons: false }
        );
        this.props.history.push('/main')
      } else {
        swal(
          <div>
            <p>Your passwords do not match.</p>
          </div>,
          { buttons: false }
        );
      }
    } else {
      swal(
        <div>
          <p>Please fill in all fields.</p>
        </div>,
        { buttons: false }
      );
    }
  };
  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h3>Create your account.</h3>
        <div className="login">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleInput}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleInput}
          />
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm passowrd"
            value={confirmPassword}
            onChange={this.handleInput}
          />
          <br />
          {/* <p>
            <input
              type="checkbox"
              onChange={() => this.setState({ show: !show })}
            />
            show
          </p>
          <br /> */}
          <button onClick={this.handleLoginClick}>Sign Up</button>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}
