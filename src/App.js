import React from "react";
import Home from "pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContext from "contexts/AppContext";
import useInitialState from "hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
