import styled from "styled-components";

export const lightTheme = {
  body: "#E9F1FC",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#fff",
  boxShadow: "0px 8px 20px rgba(0,0,0,0.06)",
};
export const darkTheme = {
  body: "#1A1C22",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#292929",
  boxShadow: "0px 8px 20px rgba(0,0,0,0.116)",
};

// components styles

//NavLinked
export const NavLinked = styled.nav`
  background: #0f0f0f;
  height: 80px;
  padding: 20px 40px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // box-shadow: ${(props) => console.log('theme from css',props.theme.boxShadow)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

// header searchbar

export const HeaderSearch = styled.input`
  padding:10px;
  background: #25262c;
  width: 480px;
  border: none;
  border-radius: 10px;
  height: 35px;
  color:white;
  &:focus{
    outline:none;
  }
`;

// side menu
export const SideLinked = styled.div`
  background: #191b1f;
  position: absolute;
  top: 60px;
  left: 0;
  //width: 200px;
  height: 87.2vh;
  padding: 15px;
  color: white;
  font-family: poppins;
  border-right: 1px solid #2a2c31;
  margin-top: 25px;
`;

// main content margin-left:200px;

export const MainLinked = styled.div`
  padding: 90px 0 50px 200px;
  background: #1a1c22;
  color: white;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const CardWrapper = styled.div`
  background: #25262c;
  color: white;
  padding: 15px;
  min-height: 250px;
  font-family: poppins;
  margin-top: 15px;
  width: 100%;
  border-radius: 10px;
`;

export const Tag = styled.div`
  color: #25262c;
  background: #efefef;
  padding: 2px 7px;
  display: inline-block;
  border-radius: 5px;
`;

export const CodeSnippetModal = styled.div`
  max-height: 400px;
  overflow-y: scroll;
`;

// export const CardWrapper = styled.div`
//     background: ${props => props.theme.background};
//     color:${props => props.theme.text};
//     box-shadow:${props => props.theme.boxShadow};
//     padding:20px;
//     display: flex;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     background-clip: border-box;
//     border: 1px solid rgba(0,0,0,.125);
//     border-radius: .25rem;
// `;
