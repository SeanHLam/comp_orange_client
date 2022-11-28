import React from 'react'
import { FlexBox } from '../../styles/globals'
import { Avatar, Button, Grid } from '@mui/material'
import { useState, useEffect } from "react"

export default function TweetComp() {

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
                >Username</h5>
                {/* Userhandle */}
                <h6
                 style={{
                    padding:0,
                    margin: 0,
                    marginLeft: 5,
                    color: 'grey'
                }}>@userhandle</h6>
{/* follow button for each user */}
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
                     {/* Date */}
                    <p
                    style={{
                        padding:0,
                        margin: 0,
                        fontSize: '.6em',
                        color: 'grey',
                    }}>21 Nov</p>
                </FlexBox>
            </FlexBox>
            <p
                style={{
                    fontSize: '.8em',
                    alignSelf: 'flex-start',
                }}
            >Duis dolore cupidatat magna cupidatat.</p>
        </FlexBox>
      </Grid>
    </FlexBox>
  )
}