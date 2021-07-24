// import logo from "./logo.svg";
import GetMovie from "./Components/getMovie";
import NavBar from "./Components/navBar";
import Customers from "./Components/customers";
import Rental from "./Components/rental";
import NotFound from "./comman/notFound";
import MovieForm from "./Components/movieForm";
import LoginForm from "./Components/loginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterForm from "./Components/registerForm";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/customers" exact component={Customers}></Route>
        <Route path="/rental" exact component={Rental}></Route>
        {/* <Route path="/movie/new" component={MovieForm}></Route> */}
        <Route path="/movie/:id" component={MovieForm}></Route>
        <Route path="/movie" exact component={GetMovie}></Route>
        <Route path="/notFound" component={NotFound}></Route>
        <Redirect from="/" exact to="/movie" />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
