import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ErrorNotFound from "./components/ErrorNotFound";
import Register from "./components/Forms/Register";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            {/* <Route component={ErrorNotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
