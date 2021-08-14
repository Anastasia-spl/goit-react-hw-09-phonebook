import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useAppSelector } from '../../redux/hooks';
/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

interface Props {
  children: React.ReactNode,
  redirectTo: string,
  path: string,
  exact?: boolean,
}

const PrivateRoute = ({ redirectTo, children, ...routeProps }: Props) => {
  const isAuthenticated: boolean = useAppSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
