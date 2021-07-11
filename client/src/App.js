import "./App.css";
import { ThemeProvider } from "styled-components";
import { Header, SideMenu } from "./layout";
import { lightTheme, darkTheme } from "./layout/theme";
import { Home, Login, Register } from "./components";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.Codes.theme);
  return (
    <Router>
      <ThemeProvider theme={theme === false ? darkTheme : lightTheme}>
        <Header/>
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
