import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Header, SideMenu } from "./layout";
import { lightTheme, darkTheme } from "./layout/theme";
import { Home, Login, Register } from "./components";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { verifyStorage } from "./redux/actions/actions";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Codes.theme);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const isVerifying = useSelector((state) => state.Auth.isVerifying);
  useEffect(() => {
    dispatch(verifyStorage());
    // if (!isAuthenticated) {
    //   history.pushState("/login");
    // }
  }, [isAuthenticated]);
  return (
    <Router>
      <ThemeProvider theme={theme === false ? darkTheme : lightTheme}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
