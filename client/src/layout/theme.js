import styled from "styled-components";

export const lightTheme = {
  body: "#FFF", // for body background
  head: "#FFF", // for Main mneu head background
  headText: "#0f0f0f", // for Main menu head text
  headerInputBackground: "#FFF", // for input background in head
  headerInputShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)", // for input search in head
  headerInputtext: "#000", // for input serach text
  headShadow: "1px 8px 17px -12px rgb(0 0 0 / 15%)", // for Main menu head shadow
  sideMenu: "#FFF", // for side menu background
  sidetext: "#0f0f0f", // for side menu text
  cardBackground: "#FFF", // for card background
  cardShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)", // for card shadow
  cardText: "#000", // for card text
  tagBackground: "#000", // for tag background
  tagText: "#FFF", //for tag text
  toggleBorder: "#FFF",
  background: "#fff",
  boxShadow: "0px 8px 20px rgba(0,0,0,0.06)",
};
export const darkTheme = {
  body: "#1a1c22", // for body background
  head: "#0f0f0f", // for Main mneu head background
  headText: "#FFF", // for Main menu head text
  headerInputBackground: "#25262c", // for input background in head
  headerInputShadow: "", // for input search in head
  headerInputtext: "#FFF", // for input serach text
  headShadow: "", // for Main menu head shadow
  sideMenu: "#191b1f", // for side menu background
  sideText: "#FFF", // for side menu text
  cardBackground: "#25262c", // for card background
  cardShadow: "", // for card shadow
  cardText: "#FFF", // for card text
  tagBackground: "#efefef", // for tag background
  tagText: "#000", //for tag text
  toggleBorder: "#6B8096",
  background: "#292929",
  boxShadow: "0px 8px 20px rgba(0,0,0,0.116)",
};

// components styles

//NavLinked
export const NavLinked = styled.nav`
  background: ${(props) => props.theme.head};
  box-shadow: ${(props) => props.theme.headShadow};
  color: ${(props) => props.theme.headText};
  height: 80px;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

// header searchbar

export const HeaderSearch = styled.input`
  background: ${(props) => props.theme.headerInputBackground};
  box-shadow: ${(props) => props.theme.headerInputShadow};
  color: ${(props) => props.theme.headerInputtext};
  padding: 10px;
  width: 480px;
  border: 2px solid #000;
  height: 35px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 2px;
  right: 43px;
  padding: 4px;
  width: 40px;
  height: 31px;
  cursor: pointer;
  background: #0f0f0f;
  color: white;
  border:none;
`;

export const CancelButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  padding: 4px;
  border: none;
  width: 40px;
  height: 31px;
  cursor: pointer;
  background: #0f0f0f;
  color: white;
`;

// side menu
export const SideLinked = styled.div`
  background: ${(props) => props.theme.sideMenu};
  color: ${(props) => props.theme.sideText};
  position: absolute;
  top: 60px;
  left: 0;
  //width: 200px;
  height: 87.2vh;
  padding: 15px;
  font-family: poppins;
  border-right: 1px solid #2a2c31;
  margin-top: 25px;
`;

// main content margin-left:200px;

export const MainLinked = styled.div`
  background: ${(props) => props.theme.body};
  padding: 90px 0 50px 200px;
  color: white;
  height: 100vh;
  overflow-y: scroll;
`;

export const CardWrapper = styled.div`
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.cardText};
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 15px;
  min-height: 250px;
  font-family: poppins;
  margin-top: 15px;
  width: 100%;
  border-radius: 10px;
`;

export const Tag = styled.div`
  background: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.tagText};
  padding: 2px 7px;
  display: inline-block;
  border-radius: 5px;
`;

export const CodeSnippetModal = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;

export const AuthBody = styled.div`
  background: ${(props) => props.theme.body};
  padding-top: 70px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.cardText};
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 15px;
  font-family: poppins;
  width: 450px;
  min-height: 400px;
  border-radius: 10px;
`;

// position:absolute;
//   left:50%;
//   top:50%;
//   transform: translate(-50%, -50%);
