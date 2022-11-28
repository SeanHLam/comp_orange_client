import { Avatar, Button, requirePropFactory } from '@mui/material';
import styled from 'styled-components';
import { FlexBox } from '../../styles/globals';
import { useState, useEffect } from "react"
// import { useRouter } from 'next/router'
// import avatar from '../../public/static/grumpycat.jpeg' 

export default function HeaderComp() { 

const [follow, setFollow] = useState();


    return (
//Parent div>
        <FlexBox style={{
            width: '100%',
            padding: 0
        }}>
{/* Left div with avatar, username, logo and bio */}
            <FlexBox style={{
                width: '60%',
                padding: 0
            }}>
                {/* Avatar */}
                <FlexBox style={{
                width: '60%',
                padding: 0
                 }}>
                    <Avatar
                        src='/static/grumpycat.jpeg'
                        sx={{ width: 150, height: 150}}
                        style ={{padding: 0}}
                    />
                </FlexBox>
                {/* Username,logo and bio */}
                <FlexBox 
                    dir='column'
                    style={{
                    width: '40%',
                    padding: 5,
                    alignItems: 'flex-start'
                 }}>
                    <h1 style={{
                        margin: '5%',
                        color: '#f4a261'
                    }}>ORNG.</h1>
                    <h3 style={{
                        margin: '5%',
                        fontSize: '1.2em'
                    }}>Username</h3>
                    <h4 style={{
                        margin: '5%',
                        marginTop: '1%',
                        color: 'grey',
                        fontSize: '.9em'
                    }}>@userhandle</h4>
                    <p style={{
                        margin: '5%',
                        marginTop: '0%',
                        color: 'grey',
                        fontSize: '.8em'
                    }}>Lorem ipsum bio stuff</p>
                </FlexBox>
            </FlexBox >
{/* Follow button and statistics */}
            <FlexBox 
                dir='column'
                style={{
                    width: '40%',
                    alignItems: 'flex-end'
            }}>
                {/* Follow Button */}
                <Button 
                    variant="contained"
                    style={{
                        backgroundColor: '#f4a261'
                    }}
                >Follow</Button>
                 {/* Tweets Stats */}
                <p
                    style={{
                        margin: '.5em'
                    }}
                >
                   0 Spritz 
                </p>
                 {/* Following Stats */}
                <p
                    style={{
                        margin: '.5em'
                    }}
                >
                   0 Following 
                </p>
                 {/* Followers Stats */}
                <p
                    style={{
                        margin: '.5em'
                    }}
                >
                   0 Followers
                </p>
            </FlexBox>
        </FlexBox>
    )

}
