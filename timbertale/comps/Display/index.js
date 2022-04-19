import styled from 'styled-components';


// background: ${props => `url(${props.background}) center center/ cover no-repeat`};
export const FSBackground = styled.div` 
background-color: ${props => props.backgroundColor || "#7D4D2B"};
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`;

export const Box = styled.div`
background: #FFFAF1;
display: flex;
border-radius:25px; 
max-width: 750px;
width: 65%;
flex-direction: column;
align-items: center;
margin: 5%, 10%;
`;

export const Wrapper = styled.div.attrs(props => ({
        margintop: props.margintop || "1em"
}))`
max-width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
position: relative;
margin-top: ${props => props.margintop};
`