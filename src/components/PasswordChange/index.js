import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form className="mt-4" onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label">New Password</label>
          <div className="control">
            <input
              name="passwordOne"
              className="input"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="New Password"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm New Password</label>
          <div className="control">
            <input
              name="passwordTwo"
              className="input"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
        </div>
        <button className="button is-info" disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p className="help is-danger">{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);