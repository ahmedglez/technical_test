import React from "react";
import Home from "pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContext from "contexts/AppContext";
import useInitialState from "hooks/useInitialState";
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


const App = () => {
  const initialState = useInitialState();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <AppContext.Provider value={initialState}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </LocalizationProvider>
  );
};

export default App;
