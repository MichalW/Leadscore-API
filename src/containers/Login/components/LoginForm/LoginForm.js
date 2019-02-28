import React, {PureComponent} from 'react';
import {
  Button, Form, Input, Message, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class LoginForm extends PureComponent {
  state = {
    username: '',
    password: '',
  };

  onChangeUsername = ({target: {value}}) => {
    this.setState({username: value});
  };

  onChangePassword = ({target: {value}}) => {
    this.setState({password: value});
  };

  onSubmit = () => {
    const {signInRequest} = this.props;
    const {username, password} = this.state;

    signInRequest(username, password);
  };

  render() {
    const {error, loading} = this.props;
    const {username, password} = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Segment>
          <Form.Field
            control={Input}
            label="Login"
            onChange={this.onChangeUsername}
            placeholder="Login"
            required
            value={username}
          />

          <Form.Field
            control={Input}
            label="Password"
            onChange={this.onChangePassword}
            placeholder="Password"
            required
            type="password"
            value={password}
          />

          {error && (
            <Message negative>
              <p>Invalid credentials</p>
            </Message>
          )}

          <Button type="submit" fluid primary loading={loading}>Login</Button>
        </Segment>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  signInRequest: PropTypes.func.isRequired,
};

export default LoginForm;
