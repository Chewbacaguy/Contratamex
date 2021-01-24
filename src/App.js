import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Navbar from "./Navbar";
import LandingPage from "./landingPage";

function App() {
  // Home page perfilTrabajador
  //     Home page perfilContratador
  //     Bandeja mensajes
  //     Search bar funcional
  //     perfil

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
