import { BackGround, Wrapper, FlexBox } from "../styles/globals";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
 
 
export default function Home() {
 return (
  <BackGround>
     <Wrapper>
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
       <Grid item xs={12}>
         <FlexBox>
           <FlexBox>Logo</FlexBox>
           <FlexBox>Buttons</FlexBox>
         </FlexBox>
       </Grid>
       <Grid item xs={6}>
         <FlexBox dir="column">Text Area
           <textarea></textarea>
           <Button variant="contained" disableElevation>Post</Button>
         </FlexBox>
       </Grid>
       <Grid item xs={6}>
         <FlexBox>Real time tweets</FlexBox>
       </Grid>
       <Grid item xs={12}>
         <FlexBox>Footer</FlexBox>
       </Grid>
     </Grid>
   </Box>
     </Wrapper>
  </BackGround>
 )
}
