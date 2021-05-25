import { lazy } from 'react';

import { authSelectors } from '../redux/auth';
import Section from '../components/Section';
import SignUpForm from '../components/auth/SignUpForm';
import { useAppSelector } from '../redux/hooks';

const Error = lazy(() =>
  import('../components/Error' /* webpackChunkName: "error-page" */),
);

export default function SignUpPage() {
  const isError = useAppSelector(authSelectors.getIsSignUpError);
  return (
  <Section>
    {isError && <Error error={isError} />}
    <SignUpForm />
  </Section>
)
};

