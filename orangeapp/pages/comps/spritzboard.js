import React, { useState, useEffect } from 'react'
import { FlexBox } from '../../styles/globals'
import { Button } from '@mui/material'
import TweetComp from './tweet'
import PostComp from './post'

export default function PostDashboardComp() {

//2 hardcoded posts and adds when state is used
  const [posts, setPosts] = useState([
    {
      username: 'grumpycat',
      handle: '@grumpycat',
      id: 1,
      text: "Why did the developer quit their job? Because they didn't get arrays.",
      date: "Mon Nov 21 2022"
    },
    {
      username: 'grumpycat',
      handle: '@grumpycat',
      id: 2, 
      text: "I'm afraid for the calendar. Its days are numbered.",
      date: "Mon Nov 21 2022"
    }
  ])

  // useEffect( async () => {
  //   // get current posts from backend
  //   await fetch('http://localhost:3001/posts')
  //   .then(res => console.log(res.text))
  //   // .then(async (res) => {
  //   //   const data = await res.json()
  //   //   alert(data)
  //   // })
  //   // .then(data => console.log(data))

  //   // setPosts([data, ...posts])
  // }, [])

  const handleAddPost = (text) => {
    const post = {
      username: 'grumpycat', //this will be changed once user auth is defined
      handle: '@grumpycat', //this will be changed once user auth is defined
      // id: self.crypto.randomUUID(),
      text: text,
      date: new Date().toDateString('en-US')
    }

    //sends post to backend to create static api
    fetch(`http://localhost:3001/add-post?post=${post.text}&id=${post.id}&user=${post.username}&userhandle=${post.handle}&date=${post.date}`)
    .then(async (res) => {
        const data = await res.json()
        console.log(data)
    })

    setPosts([post, ...posts])
    console.log("New Post:", text)
  }
  
  return (
    <FlexBox dir="column"
      style={{
        justifyContent: 'flex-start',
        minHeight: '100%'
      }}  
    >
  {/* Text area where users can post their tweets/spritz*/}
      <PostComp onAddPost={handleAddPost}/>
        <h2
            style={{
                fontSize: '1em',
                alignSelf: 'flex-start',
                margin: '2%'
            }}>
            Spritz
        </h2>
  {posts.map(post =>(
        <TweetComp 
          key={post.id} 
          id={post.id} 
          text={post.post}
          username={post.username}
          handle={post.handle}
          {...post}
          />
  ))}
  </FlexBox>
  )
}