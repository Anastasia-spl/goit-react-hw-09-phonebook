import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth';

import Form from '../../Form';
import TextField from '../../TextField';
import FormButton from '../../FormButton';
import { useState } from 'react';
import {ISignUpUser} from '../../../interfaces/User.interface';

export default function SignUpForm() {
  const dispatch = useDispatch();
  const onFormSubmit = (credentials: ISignUpUser) => dispatch(authOperations.signUp(credentials));

  const [name, setName] = useState('');
  const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  
  const [email, setEmail] = useState('');
  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail( e.currentTarget.value);
  };

  const [password, setPassword] = useState('');
  const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword( e.currentTarget.value);
  };

  const  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit({name, email, password});
   setName('');
   setEmail('');
   setPassword('');
  };

    return (
      <Form onSubmit={handleFormSubmit}>
        <TextField
          type="text"
          name="name"
          onChange={handleChangeName}
          value={name}
          label="Name"
          required
        />

        <TextField
          type="email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
          label="Email"
          required
        />
        <TextField
          type="password"
          name="password"
          onChange={handleChangePassword}
          value={password}
          label="Password"
          required
        />
        <FormButton type="submit">Sign up</FormButton>
      </Form>
    );
}


