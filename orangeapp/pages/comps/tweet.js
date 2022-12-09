import React from 'react'
import { FlexBox } from '../../styles/globals'
import { Avatar, Button, Grid } from '@mui/material'
import { useState, useEffect } from "react"
import ReportModal from './resportmodal'
import ConfirmModal from './confirmmodal'
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

export default function TweetComp({
    id,
    text,
    username,
    handle,
    date
}) {
    //opens and closes both modals
    const [open, setOpen] = React.useState(false);
    const [conOpen, setConOpen] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const confirmClose = () => setConOpen(false);

    const handleModalReport = ()=>{
        setConOpen(true)
        setOpen(false)
    }

    // follow button text change
    const [active, setActive] = useState(false);
    
    const handleClick = () => {
          const relationship = {
            following: localStorage.getItem("currentUser"),
            followed: id
          }

        //current user name & user name they want to follow go to backend  
        
            fetch(`http://localhost:3001/relationship?following_name=${relationship.following}&followed_name=${relationship.followed}&state=${active}`)
            .then(async (res) => {
            }) 
            console.log(active)
        setActive(!active);
       
    }
  return (
    <FlexBox
        class="tweet"
        style={{
            width: '100%',
            borderRadius: 0,
            border: 'solid grey .5px',
            borderRightWidth: 0,
            borderLeftWidth:0
        }}
    >
{/* Avatar Area */}
      <Grid item xs={2}>
        <Avatar
            style={{
                marginRight: 0
            }} 
            src='/static/grumpycat.jpeg'></Avatar>
      </Grid>
{/* username, handle, date and tweet area */}
      <Grid item xs={10}>
        <FlexBox dir='column'
            style={{
                width: '100%',
                padding: 0,
                marginLeft: 5
            }}>
            <FlexBox 
                style={{
                    width: '100%',
                    padding: 0,
                    justifyContent: 'flex-start'
                }}>
{/* Div for username, handle and date */}
                <FlexBox
                 style={{
                    width: '100%',
                    padding: 0,
                    justifyContent: 'flex-start'
                }}
                >
                {/* Username */}
                <h5
                    style={{
                        padding:0,
                        margin: 0
                    }}
                >{username}</h5>
                {/* Userhandle */}
                <h6
                 style={{
                    padding:0,
                    margin: 0,
                    marginLeft: 5,
                    color: 'grey'

                }}>{handle}</h6>
{/* follow - unfollow button for each user */}
                <Button 
                    variant="contained"
                    onClick={handleClick}
                    style={{
                        backgroundColor: '#f4a261',
                        width: "8em",
                        height: "2em",
                        marginLeft: 10,
                        fontSize: ".7em"
                    }}
                >{ active ? "Unfollow" : "Follow" }</Button>
    
                </FlexBox>
                <FlexBox
                     style={{
                        width: '100%',
                        padding: 0,
                        justifyContent: 'flex-end'
                    }}
                >
                     {/* Date & Report*/}
                    <p
                    style={{
                        padding:0,
                        margin: 0,
                        fontSize: '.6em',
                        color: 'grey',
                    }}>{date}</p>
                    
                    {/* On click to turn on report modal */}
                    <FlagCircleIcon 
                    style={{
                        color: "#f4a261",
                        margin:"3%", 
                    }}
                    onClick={handleOpen}>Report</FlagCircleIcon>
                    <ConfirmModal handleClose={confirmClose} on={conOpen}></ConfirmModal>
                    <ReportModal postid={id} handleNext={handleModalReport} handleClose={handleClose}  on={open}></ReportModal>
                </FlexBox>
            </FlexBox>
        </FlexBox>
        
      </Grid>
      
    </FlexBox>

  )
}
