import React from 'react';
import {
  Button, Container, Form, Grid, Input, Label,
} from 'semantic-ui-react';

const Login = () => (
  <Container>
    <Grid columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Form>
            <Form.Field>
              <Label>Login</Label>
              <Input placeholder="Login" />
            </Form.Field>

            <Form.Field>
              <Label>Password</Label>
              <input placeholder="Password" type="password" />
            </Form.Field>

            <Button type="submit">Login</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Login;
