import styled from 'styled-components';

export const FlexBox = styled.div`
justify-content:center;
align-items:center;
border-radius: .5em;
display:flex;
flex-direction:${props=>props.dir || "row"};
background-color:${props=>props.color || "white"};
color: black;
opacity: 1;
padding: 5%;
border: 1px solid black;
`

// Reusuable Wrapper for all the pages
export const Wrapper = styled.div`
width:80%;
height:100%;
display:flex;
justify-content:center;
align-items:flex-start;
padding: 5%;
background-color: #F8C8A0;
`
// Reusuable Wrapper for all the pages
export const BackGround = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#f4a261;
`