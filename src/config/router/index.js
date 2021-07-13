import { BrowserRouter as Router, Route } from "react-router-dom";
import { Admin, Home, Login, SignIn } from "../../pages";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/admin" component={Admin} />
    </Router>
  );
};

export default AppRouter;
