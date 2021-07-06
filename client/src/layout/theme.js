import styled from 'styled-components';

export const lightTheme = {
    body: '#E9F1FC',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#fff',
    boxShadow: '0px 8px 20px rgba(0,0,0,0.06)'
}
export const darkTheme = {
    body: '#1A1C22',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#292929',
    boxShadow:''
}

// components styles

//NavLinked
 export const NavLinked = styled.nav`
    background: #0F0F0F;
    height:80px;
    padding:20px 40px;
    color:white;
    font-family: 'Lobster', cursive;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow:${props => props.theme.boxShadow};
    position:absolute;
    top:0;
    left:0;
    width:100%;
    z-index:1;
`;

// side menu
export const SideLinked = styled.div`
    background: #191B1F;
    position:absolute;
    top:60px;
    left: 0;
    width:200px;
    height:100%;
    padding:15px;
    color:white;
    font-family:poppins;
    border-right:1px solid #2A2C31;
    margin-top:25px;
`;

// main content margin-left:200px;

export const MainLinked = styled.div`
    padding: 90px 0 50px 200px;
    background:#1A1C22;
    color:white;
    height:100%;
    overflow:auto;
`;

export const CardWrapper = styled.div`
    background:#25262C;
    color:white;
    padding:10px;
    height:150px;
    font-family:poppins;
    margin-top:10px;
    width:100%;
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