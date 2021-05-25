import { lazy } from 'react';
import { authSelectors } from '../redux/auth';
import Section from '../components/Section';
import LogInForm from '../components/auth/LogInForm';
import { useAppSelector } from '../redux/hooks';

const Error = lazy(() =>
  import('../components/Error' /* webpackChunkName: "error-page" */),
);

export default function LogInPage() {
  const isError = useAppSelector(authSelectors.getIsLogInError)
  return (
  <Section>
    {isError && <Error error={isError} />}
    <LogInForm />
  </Section>
)
};
