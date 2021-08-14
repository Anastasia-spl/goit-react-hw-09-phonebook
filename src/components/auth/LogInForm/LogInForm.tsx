import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth';

import Form from '../../Form';
import TextField from '../../TextField';
import FormButton from '../../FormButton';

export default function LogInForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword( e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('' );
    setPassword('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <TextField
        type="email"
        name="email"
        onChange={handleChangeEmail}
        value={email}
        label="Email"
      />
      <TextField
        type="password"
        name="password"
        onChange={handleChangePassword}
        value={password}
        label="Password"
      />
      <FormButton type="submit">Log in</FormButton>
    </Form>
  );
}
