import React from "react";
import AppBarAndDrawer from "./AppBarAndDrawer/AppBarAndDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Search from "./Search/Search";
import Driver from "./People/Driver"

export default function App() {
  
  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={currentTheme}>
              <Router>
                <div>
                  <AppBarAndDrawer
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />
                  <Switch>
                    <Route path="/search">
                      <Search/>
                    </Route>
                    <Route path="/profile">
                      <Driver/>
                    </Route>
                    <Route path="/jobs">
                      
                    </Route>
                    <Route path="/message">
                      
                    </Route>
                    
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </Router>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}
