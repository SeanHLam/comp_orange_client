import { BackGround, Wrapper, FlexBox } from "../styles/globals";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderComp from "./comps/header";
import PostComp from "./comps/post";
import ReportModal from "./comps/resportmodal";
import ConfirmModal from "./comps/confirmmodal";
import PostDashboardComp from "./comps/spritzboard";
import FollowBoxComp from "./comps/followbox";
import { Avatar, Button } from '@mui/material'
 
// Basic dashboard structure - to be updated
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [conOpen, setConOpen] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirmOpen = () => setConOpen(true);
  const confirmClose = () => setConOpen(false);

 return (
  <BackGround>
    <Button onClick={handleOpen}>Report</Button>
    <ConfirmModal handleClose={confirmClose} on={conOpen}></ConfirmModal>
    <ReportModal handleNext={confirmOpen} handleClose={handleClose}  on={open}></ReportModal>
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
