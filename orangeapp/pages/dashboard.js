import { BackGround, Wrapper, FlexBox } from "../styles/globals";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import HeaderComp from "./comps/header";

 
// Basic dashboard structure - to be updated
export default function Home() {
 return (
  <BackGround>
     <Wrapper>
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
       <Grid item xs={12}>
         <FlexBox>
{/* Header containing logo, profile and some buttons*/}
            <HeaderComp></HeaderComp>
           {/* <FlexBox>Logo</FlexBox>
           <FlexBox>Buttons</FlexBox> */}
         </FlexBox>
       </Grid>
       <Grid item xs={6}>
{/* Text area where users can post their tweets/spritz*/}
         <FlexBox dir="column">Text Area
           <textarea></textarea>
           <Button variant="contained" disableElevation>Post</Button>
         </FlexBox>
       </Grid>
       <Grid item xs={6}>
{/* Area where users can see their posted tweets/spritz*/}
         <FlexBox>Real time tweets</FlexBox>
       </Grid>
       <Grid item xs={12}>
{/* Placeholder Footer */}
         <FlexBox>Footer</FlexBox>
       </Grid>
     </Grid>
   </Box>
     </Wrapper>
  </BackGround>
 )
}
