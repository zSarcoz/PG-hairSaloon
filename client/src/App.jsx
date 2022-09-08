import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ErrorNotFound from "./components/ErrorNotFound";
import Register from "./components/Forms/Register";
import RegisterBr from "./components/Forms/RegisterBr";
import Login from "./components/Forms/Login.jsx";
import Timer from "./components/Timer.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>  
            <Route exact path="/register/employee">
              <RegisterBr />
            </Route>
            <Route exact path="/timer">
              <Timer />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            {/* <Route component={ErrorNotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
