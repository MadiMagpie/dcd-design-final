import { Box } from "../Display";
import styled from 'styled-components';

const LifeBox = styled.div`
color: #FFF8EC;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 15%;
position: fixed;
`

export default function LifeHolder(){
        return(
                <LifeBox></LifeBox>
        )
}