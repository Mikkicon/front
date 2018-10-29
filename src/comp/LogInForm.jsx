import React, { Component } from "react";
import "bootstrap";
import "jquery";
class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "",
      password: "",
      alert: "",
      error: false,
      res: false
    };
  }

  handleMailChange = p => {
    const v = p.target.value;
    // Remembering mail value for submit
    this.setState({ mail: v });
    console.log(this.state.mail);
    // Check regex notation
    /[a-zA-Z0-9._+-]+@[a-zA-Z+-]+\.[a-z]+$/.test(p.target.value)
      ? this.setState({ error: false })
      : this.setState({ error: true });
  };
  handlePasswordChange = p => {
    // Remembering password value for submit
    const v = p.target.value;
    this.setState({ password: v });
  };
  handleSubmit = () => {
    console.log(this.state.mail, "\n", this.state.password);
    fetch("http://localhost:3010/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.mail,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(a => this.props.isAuth(a))
      .catch(error => console.log(error));
    // If any error is still present or password is < 6 printing error
    console.log(this.state.res);
    this.state.error || this.state.password.length < 6
      ? this.setState({ alert: "Fields are not filled propperly" })
      : this.setState({ alert: "Logging in..." });
  };
  render() {
    // const { from } = this.props.location.state || { from: { pathname: "/" } };
    return (
      <React.Fragment>
        <div className="container">
          <div className="container">
            {/* Mail input field */}
            <input
              type="text"
              placeholder="Mail"
              onChange={this.handleMailChange.bind(this)}
              className="form-control"
            />

            <label>{this.state.error ? "X" : "V"}</label>
            <br />

            {/* Password input field */}
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              onChange={this.handlePasswordChange.bind(this)}
            />

            <br />

            {/* Submit button */}
            <button
              className="btn btn-outline-primary m-2"
              onClick={this.handleSubmit}
            >
              Login
            </button>
            {/* Error label for submitting */}
            <label>{this.state.alert}</label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LogInForm;
