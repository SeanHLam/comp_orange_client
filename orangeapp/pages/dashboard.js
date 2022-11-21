import { BackGround, Wrapper, FlexBox } from "../styles/globals";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import HeaderComp from "./comps/header";
import PostComp from "./comps/post";
import PostDashboardComp from "./comps/spritzboard";

 
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
         </FlexBox>
       </Grid>
       <Grid item xs={4}>
{/* Text area where users can post their tweets/spritz*/}
      <PostComp />
       </Grid>
       <Grid item xs={8}>
{/* Area where users can see their posted tweets/spritz*/}
        <PostDashboardComp />
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
