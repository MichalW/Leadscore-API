import React, {PureComponent} from 'react';
import {
  Button, Form, Input, Label, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class LoginForm extends PureComponent {
  state = {
    username: '',
    password: '',
  };

  onChangeUsername = (event) => {
    this.setState({username: event.target.value});
  };

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  onSubmit = () => {
    const {signInRequest} = this.props;
    const {username, password} = this.state;

    signInRequest(username, password);
  };

  render() {
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

          <Button type="submit" fluid primary>Login</Button>
        </Segment>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

export default LoginForm;
