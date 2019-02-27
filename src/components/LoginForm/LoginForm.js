import React, {PureComponent} from 'react';
import {
  Button, Form, Input, Label, Segment, Message,
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
          <Form.Field>
            <Label>Login</Label>
            <Input placeholder="Login" onChange={this.onChangeUsername} value={username} />
          </Form.Field>

          <Form.Field>
            <Label>Password</Label>
            <input placeholder="Password" type="password" onChange={this.onChangePassword} value={password} />
          </Form.Field>

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
