import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { validate } from "email-validator";

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
    const validEmail = validate(email);
    let swalMessage;
    if (name && email && password && confirmPassword) {
      if (validEmail) {
        if (password === confirmPassword) {
          try {
            const { data } = await axios.post("/auth/signup", {
              name,
              email,
              password
            });
            if (data.user_name) {
              swalMessage = "Your account has been created!";
              this.props.history.push(`/main/${data.user_name}`);
            } else {
              console.log('Unknown error')
            }
          } catch {
            swalMessage = "An account with this email already exists.";
          }
        } else {
          swalMessage = "Your passwords do not match.";
        }
      } else {
        swalMessage = "Please use a valid email.";
      }
    } else {
      swalMessage = "Please fill in all fields.";
    }
    swal(
      <div>
        <p>{swalMessage}</p>
      </div>,
      { buttons: false }
    );
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
            type="email"
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
