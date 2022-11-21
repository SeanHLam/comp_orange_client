import React from 'react'
import { FlexBox } from '../../styles/globals'
import { Button } from '@mui/material'
import { margin } from '@mui/system'

export default function PostComp() {
  return (
    <FlexBox dir="column">
        <h2
            style={{
                fontSize: '1em',
                alignSelf: 'flex-start',
                margin: '2%'
            }}>
            Sprit something
        </h2>
        <textarea
            style={{
                minHeight: 90,
                width: '90%',
                backgroundColor: 'white',
                borderRadius: '5px',
                marginTop: '5%',
                marginBottom: '5%',
                color: 'black'
            }}
        ></textarea>
        <Button 
            variant="contained" 
            disableElevation
            style={{
                backgroundColor: '#f4a261'
            }}
        >Post</Button>
  </FlexBox>
  )
}