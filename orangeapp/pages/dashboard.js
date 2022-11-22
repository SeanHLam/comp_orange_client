import { BackGround, Wrapper, FlexBox } from "../styles/globals";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderComp from "./comps/header";
import PostComp from "./comps/post";
import PostDashboardComp from "./comps/spritzboard";
import FollowBoxComp from "./comps/followbox";

 
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

       <Grid item xs={4}
       style={{height: '100%'}}
       >
            <Grid item xs={12}
            >
                <FollowBoxComp />
            </Grid>
            <Grid item xs={12}
                style={{
                    marginTop: '1em',
                }}
            >
                <FollowBoxComp title="Following" />
            </Grid>
       </Grid>
       <Grid item xs={8}>
{/* Area where users can see their posted tweets/spritz*/}
        <PostDashboardComp />
       </Grid>
     </Grid>
   </Box>
     </Wrapper>
  </BackGround>
 )
}
