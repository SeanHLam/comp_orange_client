import React from 'react'
import { FlexBox } from '../../styles/globals'
import { Button } from '@mui/material'
import { useState, useEffect } from "react"

export default function PostComp({ onAddPost }) {

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddPost(text)
        setText("")
      }


  return (
    <FlexBox dir="column"
        style={{
            width: '110%',
            marginTop: -15
        }}
    >
        <h2
            style={{
                fontSize: '1em',
                alignSelf: 'flex-start',
                margin: '2%'
            }}>
            Sprit something
        </h2>
        <textarea
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder='Say something here'
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
            onClick={handleSubmit}
            variant="contained" 
            disableElevation
            style={{
                backgroundColor: '#f4a261'
            }}
        >Post</Button>
  </FlexBox>
  )
}