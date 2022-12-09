import { BackGround, Wrapper, FlexBox } from "../styles/globals";
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderComp from "./comps/header";
import PostComp from "./comps/post";
import ReportModal from "./comps/resportmodal";
import ConfirmModal from "./comps/confirmmodal";
import PostDashboardComp from "./comps/spritzboard";
import FollowBoxComp from "./comps/followbox";
import { Button } from "@mui/material";

 
// Basic dashboard structure - to be updated
export default function Home() {
 
  const [numOfPosts, setNumOfPosts] = useState(0)

  useEffect(()=>{
    // get current posts number from backend
    fetch('http://localhost:3001/posts')
    .then(async(res)=> {
      const data = await res.json()
      console.log(data.data.length)
      setNumOfPosts(data.data.length)
    });
    return () => {
      };
  }, []);



 return (
  <BackGround>
    
     <Wrapper>
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
       <Grid item xs={12}>
         <FlexBox>
{/* Header containing logo, profile and some buttons*/}
            <HeaderComp 
              username={localStorage.getItem("currentUser")}
              userhandle={'@'+localStorage.getItem("currentUser")}
              numofspritz={numOfPosts}
            ></HeaderComp>
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
