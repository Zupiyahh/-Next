import LScreen from './page/LoginScreen'
import pScreen from './page/page39'
import p17Screen from './page/page17'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pScreen} />
        <Route exact path="/LoginScreen" component={LScreen} />
        <Route exact path="/page17" component={p17Screen} />
      </Switch>
    </BrowserRouter>
  );

}
export default App;