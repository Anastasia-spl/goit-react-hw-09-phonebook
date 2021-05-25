import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense , useEffect} from 'react';
import { useAppDispatch, useAppSelector} from './redux/hooks';
import routes from './routes';
import { authOperations, authSelectors } from './redux/auth';

import AppBar from './components/AppBar';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
  
const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "main-page" */))
const SingUpPage = lazy(() => import('./pages/SignUpPage' /* webpackChunkName: "signUp-page" */))
const LogInPage = lazy(() => import('./pages/LogInPage' /* webpackChunkName: "logIn-page" */))
const ContactsPage = lazy(() => import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */));
const Page404 = lazy(() => import('./pages/Page404' /* webpackChunkName: "404-page" */))

export default function App() {
  const isLoading: boolean = useAppSelector(authSelectors.getIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(authOperations.getCurrentUser())
  }, [dispatch]);

  return (
      <div className="App">
        <AppBar />
        <Suspense fallback={Loader}>
          {isLoading ? <Loader /> : 
          <Switch>
              <PublicRoute path={routes.HomePage} exact>
                <HomePage />
              </PublicRoute>
              <PublicRoute path={routes.SingUpPage} restricted redirectTo={routes.ContactsPage} >
                <SingUpPage/>
              </PublicRoute>
              <PublicRoute path={routes.LogInPage} restricted redirectTo={routes.ContactsPage} >
                <LogInPage/>
              </PublicRoute>
              <PrivateRoute path={routes.ContactsPage} redirectTo={routes.LogInPage} >
                <ContactsPage/>      
              </PrivateRoute>
              <Route component={Page404} />
          </Switch>
          }
        </Suspense>
    </div>
   );
}

