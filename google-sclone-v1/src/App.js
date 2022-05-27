import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

//this app contain 2 pages search Home & search results
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            {/* search page */}
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
