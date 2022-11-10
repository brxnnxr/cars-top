import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalog from './Components/Catalog';
import Navbar from './Components/NavBar';
import { Home } from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
