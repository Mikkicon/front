import React, { Component } from "react";
class RegForm extends Component {
  state = {
    //   To compare passwords
    chars: "",
    mail: "",
    pass: "",
    name: "",
    surname: "",
    // Errors for each situation
    errorMail: false,
    errorPass: false,
    errorConfPass: false,
    errorName: false
  };
  handleMailChange = p => {
    this.setState({ mail: p.target.value });
    //   Check if matches regex
    /[a-zA-Z0-9._+-]+@[a-zA-Z+-]+\.[a-z]+$/.test(p.target.value)
      ? this.setState({ errorMail: false })
      : this.setState({ errorMail: true });
  };
  handlePasswordChange = p => {
    //   Check length
    const v = p.target.value;
    this.setState({ chars: v });
    v.length > 6
      ? this.setState({ errorPass: false })
      : this.setState({ errorPass: true });
  };
  handlePasswordConfChange = p => {
    //   Check length and compare with password field
    const v = p.target.value;
    v.length < 6 || v !== this.state.chars
      ? this.setState({ errorConfPass: true })
      : this.setState({ errorConfPass: false, pass: p.target.value });
  };
  writeName = p => {
    this.setState({ name: p.target.value });
    this.handleNamesChange(p);
  };
  writeSurName = p => {
    this.setState({ surname: p.target.value });
    this.handleNamesChange(p);
  };
  handleNamesChange = p => {
    this.setState({ name: p.target.value });
    //   Only lettersa
    console.log(p.target.value);
    /[a-zA-Z]+/.test(p.target.value)
      ? this.setState({ errorName: false })
      : this.setState({ errorName: true });
  };
  handleSubmit = () => {
    //   Container for all errors
    const error =
      this.state.errorConfPass ||
      this.state.errorMail ||
      this.state.errorName ||
      this.state.errorPass;
    console.log(
      this.state.errorConfPass,
      this.state.errorMail,
      this.state.errorName,
      this.state.errorPass
    );
    if (error) {
      this.setState({ alert: "Fields are not filled propperly" });
    } else {
      this.setState({ alert: "Registring..." });
      fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.mail,
          password: this.state.pass,
          fname: this.state.name,
          sname: this.state.surname
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => console.log("Success:", JSON.stringify(response)))
        .catch(error => console.error("Error:", error));
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <input
            type="text"
            className="form-control"
            placeholder="Mail"
            onChange={this.handleMailChange.bind(this)}
            onFocus={() => this.setState({ errorMail: true })}
          />

          <label>{this.state.errorMail ? "Error" : "Login"}</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            onChange={this.handlePasswordChange.bind(this)}
            onFocus={() => this.setState({ errorPass: true })}
            required
          />
          <label>{this.state.errorPass ? "Error" : "Password"}</label>
          <br />

          <input
            type="text"
            className="form-control"
            placeholder="Confirm Password"
            onChange={this.handlePasswordConfChange.bind(this)}
            onFocus={() => this.setState({ errorConfPass: true })}
          />
          <label>
            {this.state.errorConfPass ? "Error" : "Confirm Password"}
          </label>
          <br />

          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={this.writeName.bind(this)}
            onFocus={() => this.setState({ errorName: true })}
          />

          <label>{this.state.errorName ? "Error" : "Name"}</label>
          <br />

          <input
            type="text"
            className="form-control"
            placeholder="Surname"
            onChange={this.writeSurName.bind(this)}
            onFocus={() => this.setState({ errorName: true })}
          />
          <label>{this.state.errorName ? "Error" : "Surname"}</label>
          <button
            className="btn btn-outline-primary m-2"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <label>{this.state.alert}</label>
        </div>
      </React.Fragment>
    );
  }
}

export default RegForm;
