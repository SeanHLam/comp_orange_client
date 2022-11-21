import { Avatar } from '@mui/material'
import React from 'react'
import { FlexBox } from '../../styles/globals'

export default function FollowAvatarComp({
    username = 'username'
}) {
  return (
    <FlexBox dir="column">
        <Avatar src='/static/grumpycat.jpeg'></Avatar>
        <h6
            style={{
                fontSize: '.4em',
                alignSelf: 'flex-start',
                margin: '2%'
            }}>
            {username}
        </h6>
  </FlexBox>
  )
}