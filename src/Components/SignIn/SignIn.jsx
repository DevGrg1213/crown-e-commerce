import React from "react";
import FormInput from "../Form-input/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignIn.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I alrady have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="email"
            required
          />
          <FormInput
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
