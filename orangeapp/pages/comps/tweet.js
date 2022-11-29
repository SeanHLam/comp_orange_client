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
    const [open, setOpen] = React.useState(false);
    const [conOpen, setConOpen] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const confirmOpen = () => setConOpen(true);
    const confirmClose = () => setConOpen(false);

    // follow button text change
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }


  return (
    <FlexBox
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
                >{ active ? "Follow" : "Unfollow" }</Button>
        
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
                    <FlagCircleIcon 
                    style={{
                        color: "#f4a261",
                        margin:"3%",
                    }}
                    onClick={handleOpen}>Report</FlagCircleIcon>
                    <ConfirmModal handleClose={confirmClose} on={conOpen}></ConfirmModal>
                    <ReportModal handleNext={confirmOpen} handleClose={handleClose}  on={open}></ReportModal>
                </FlexBox>
            </FlexBox>
            <p
                style={{
                    fontSize: '.8em',
                    alignSelf: 'flex-start',
                }}
            >{text}</p>
        </FlexBox>
        
      </Grid>
      
    </FlexBox>

  )
}
