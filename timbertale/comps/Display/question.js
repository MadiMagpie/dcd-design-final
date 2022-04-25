import styled from "styled-components";

export const QuestionBox = styled.div`
background: #FFFAF1;
display: flex;
border-radius:25px; 
max-width: 500px;
min-width: 200px;
max-height: 500px;
flex-direction: column;
align-items: center;
margin: 15% 5%;
padding: 0px 15px 15px 15px;
justify-content: center;
`;

export const AnswerBox = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
max-width: 250px;
max-height: 125px;
`;

export const Question = styled.div`
display: flex;
align-items: center;
padding: 10px;
margin: 10px;
justify-content: center;
text-align: center;
`;

export const Answer = styled.div`
background: #EB6A00;
display: flex;
margin: 10px;
padding: 10px;
border-radius: 15px;
text-align: center;
`;