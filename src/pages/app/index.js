import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../landing";
import Posts from "../posts";
import "../../css/global.scss";
import { UserProvider } from "../../_services/context/userContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/post" children={<Posts />} />
          <Route exact path="/" children={<LandingPage />} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
