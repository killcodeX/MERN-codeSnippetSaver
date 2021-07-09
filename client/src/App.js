import './App.css';
import { ThemeProvider } from "styled-components";
import { Header, SideMenu } from './layout';
import { lightTheme, darkTheme } from "./layout/theme";
import {AllSnippets} from './components';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state => state.Codes.theme)
  console.log('hhhh-->', theme)
  return (
    <ThemeProvider theme={theme === false ?  darkTheme : lightTheme}>
      <Header/>
      <SideMenu>
      </SideMenu>
      <AllSnippets/>
    </ThemeProvider>
  );
}

export default App;
