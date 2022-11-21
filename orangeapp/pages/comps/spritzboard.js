import React from 'react'
import { FlexBox } from '../../styles/globals'
import { Button } from '@mui/material'
import TweetComp from './tweet'

export default function PostDashboardComp() {
  return (
    <FlexBox dir="column">
        <h2
            style={{
                fontSize: '1em',
                alignSelf: 'flex-start',
                margin: '2%'
            }}>
            Spritz
        </h2>
        <TweetComp></TweetComp>
        <TweetComp></TweetComp>
        <TweetComp></TweetComp>
  </FlexBox>
  )
}