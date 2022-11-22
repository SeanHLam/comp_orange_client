import React from 'react'
import { FlexBox } from '../../styles/globals'
import { Button } from '@mui/material'
import FollowAvatarComp from './followavatar'

export default function FollowBoxComp({
    title = 'Followers'
}) {
  return (
    <FlexBox dir="column"
        style={{
            minHeight: 300,
            justifyContent: 'flex-start'
        }}
    >
        <h2
            style={{
                fontSize: '1em',
                alignSelf: 'flex-start',
                margin: '2%'
            }}>
            {title}
        </h2>
        <FlexBox style={{
            minWidth: '100%',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        }}>
                <FollowAvatarComp></FollowAvatarComp>
                <FollowAvatarComp></FollowAvatarComp>
        </FlexBox>
  </FlexBox>
  )
}