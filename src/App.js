import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // Home page perfilTrabajador

  //     Home page perfilContratador

  //     Bandeja mensajes

  //     Search bar funcional

  //     perfil

  return (
    <Router>
      <Switch>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/SignIn">
          <Users />
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <h1>Contratamex</h1>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
