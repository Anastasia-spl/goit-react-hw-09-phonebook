import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useAppSelector} from '../../redux/hooks';
import { authSelectors } from '../../redux/auth';
/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */

 interface Props {
   children: React.ReactNode,
   path: string,
  redirectTo?: string,
  restricted?: boolean,
  exact?: boolean,
}

const PublicRoute = ({ redirectTo, children, ...routeProps }: Props) => {
  const isAuthenticated: boolean = useAppSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
       redirectTo && <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
