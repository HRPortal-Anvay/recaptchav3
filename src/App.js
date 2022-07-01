import React from "react";
import Captcha from "react-numeric-captcha";

import "./App.css";

export default class App extends React.Component {
  state = {
    captchaSuccess: false
  };

  render() {
    const { captchaSuccess } = this.state;
    return (
      <div className="App">
        <h1>Numeric-captcha with Voice</h1>
        <form>
          <Captcha
            onChange={status => this.setState({ captchaSuccess: status })}
          />
          <br />
          <button disabled={!captchaSuccess} className="submit">Submit Form</button>
        </form>
      </div>
    );
  }
}


