import styled from 'styled-components';


export const FSBackground = styled.div` 
background-color: ${props => props.backgroundcolor || "#7D4D2B"};
display: flex;
flex-direction: column; 
align-items: center;
justify-content: ${props => props.justifycontent || "center"};
width: 100vw;
height: 100vh;
`;

export const ImgBackground = styled(FSBackground)`
background: ${props => `url(${props.background}) bottom center/ cover no-repeat`};

`

export const Box = styled.div`
background: #FFFAF1;
display: flex;
border-radius:25px; 
max-width: 750px;
width: ${(props) => props.width || "55%"};
flex-direction: column;
align-items: center;
margin: 5%, 10%;
`;

export const Wrapper = styled.div.attrs(props => ({
        margintop: props.margintop || "1em",
        marginbottom: props.marginbottom || "1em",
}))`
max-width: 75%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
position: relative;
margin-top: ${props => props.margintop};
margin-bottom: ${props => props.marginbottom};
`

export const Heading = styled.h1`
color: ${props => props.color};
font-size: 1.5rem;
font-weight: 600;
`