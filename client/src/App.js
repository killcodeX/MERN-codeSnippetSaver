import './App.css';
import { ThemeProvider } from "styled-components";
import { Header, SideMenu } from './layout';
import { lightTheme, darkTheme } from "./layout/theme";
import {AllSnippets} from './components'

function App() {
  const blackMode = true;
  return (
    <ThemeProvider theme={blackMode === true ? darkTheme : lightTheme}>
      <Header/>
      <SideMenu>
      </SideMenu>
      <AllSnippets/>
    </ThemeProvider>
  );
}

export default App;
