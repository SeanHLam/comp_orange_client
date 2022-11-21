
import styled from "styled-components"
export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.dir || "column"};
`

export const Wrapper = styled(FlexBox)`
    width:120vw;
    height: 100vh;
`


export const Backgroundcolor = styled.div` 
background-color:#F4A261;
height: 100vh;
`;

export const Whitecard = styled.div` 
background-color:#FFFFFF;
width: 70vw;
height: 30vh

`;

export const Offwhite = styled.div` 
background-color:#FFFFFF;
width: 80vw;
height: 90vh
opacity: 0.5;

`;