import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Header, SideMenu } from "./layout";
import { lightTheme, darkTheme } from "./layout/theme";
import { Home, Login, Register } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import { verifyStorage, logOut } from "./redux/actions/actions";
import decode from 'jwt-decode';

function App() {
  let history = useHistory();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Codes.theme);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const token = localStorage.getItem('userToken')
  useEffect(() => {
    dispatch(verifyStorage());
    if (!isAuthenticated) {
      history.push("/login");
    } else{
      history.push('/')
    }

    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        dispatch(logOut())
      }
    }
  }, [isAuthenticated]);
  return (
    <ThemeProvider theme={theme === false ? darkTheme : lightTheme}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
