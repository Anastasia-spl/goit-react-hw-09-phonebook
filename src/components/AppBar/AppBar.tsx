import {  useAppSelector} from '../../redux/hooks';
import { authSelectors } from '../../redux/auth';

import Container from '../Container';
import PublicHeader from '../PublicHeader';
import PrivateHeader from '../PrivateHeader';

const AppBar = () => {
  const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);
  return (
    <Container>
      {isAuthenticated ? <PrivateHeader /> : <PublicHeader />}
    </Container>
  );
};

export default AppBar;
