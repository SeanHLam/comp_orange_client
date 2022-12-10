import React, { useState, useEffect } from 'react'
import { FlexBox } from '../../styles/globals'
import { Button } from '@mui/material'
import TweetComp from './tweet'
import PostComp from './post'
import UserTweetComp from './usertweet'

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
  const [user, setUser] = useState(typeof window !== 'undefined' ? localStorage.getItem("currentUser") : "")


  useEffect(()=>{
    // get current notes from backend
    fetch('http://localhost:3001/posts')
    .then(async(res)=> {
      const data = await res.json()
      console.log(data.data)
      setPosts(data.data)
    });
    return () => {
      };
      }, []);

  const handleAddPost = (text) => {
    const post = {
      username: localStorage.getItem("currentUser"), //uses currently logged in username
      handle: '@' + localStorage.getItem("currentUser"), 
      id: localStorage.getItem("currentId"),
      text: text,
      date: new Date().toDateString('en-US')
    }
    
    //sends post to backend to create static api
    fetch(`http://localhost:3001/add-post?post=${post.text}&id=${post.id}&user=${post.username}&handle=${post.handle}&date=${post.date}`)
    .then(async (res) => {
      //  const data = await res.json()
      //   console.log(data)
    })

    fetch('http://localhost:3001/posts')
    .then(async(res)=> {
      const data = await res.json()
      setPosts(data.data)
    });
  }


  const handleDeletePost = (params) => {
    fetch(`http://localhost:3001/delete-post?id=${params}`)
    .then(async (res) => {
      // alert(params)
    })

    fetch('http://localhost:3001/posts')
    .then(async(res)=> {
      const data = await res.json()
      console.log(data)
      setPosts(data.data)
    });
  }

  const handleEditPost = () => {
    fetch('http://localhost:3001/posts')
    .then(async(res)=> {
      const data = await res.json()
      console.log(data)
      setPosts(data.data)
    });
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
    (post.name === user ?

        <UserTweetComp
          onDeletePost={() => handleDeletePost(post.id)} 
          key={post.id} 
          id={post.id} 
          text={post.post}
          username={post.name}
          handle={post.handle}
          {...post}
          onUpdate={handleEditPost}

          />
        :
        <TweetComp 
          key={post.id} 
          id={post.id} 
          text={post.post}
          username={post.name}
          handle={post.handle}
          {...post}
          
          />
    )
  ))}
  </FlexBox>
  )
}