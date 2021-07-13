import { BrowserRouter as Router, Route } from "react-router-dom";
import { Admin, Details, Home, Login, SignIn } from "../../pages";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/details/:name/:description/:id" component={Details} />
    </Router>
  );
};

export default AppRouter;
