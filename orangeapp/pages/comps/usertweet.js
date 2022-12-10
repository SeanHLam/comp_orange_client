import React from 'react'
import { FlexBox } from '../../styles/globals'
import { Avatar, Button, Grid } from '@mui/material'
import { useState, useEffect } from "react"
import ReportModal from './resportmodal'
import ConfirmModal from './confirmmodal'
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import { TextareaAutosize } from '@mui/material'
import { RefreshOutlined } from '@mui/icons-material'

export default function UserTweetComp({
    onDeletePost,
    id,
    text,
    username,
    handle,
    date,
    vis=false,
    onUpdate =() => {}
    //handleEditClick =() => {}
}) {

    const [editVis, setEditVis] = useState(false)
    const [editText, setEditText] = useState(text)


    const handleEditClick = ()=>{
        setEditVis(true)
        
       
    }
   

    const handleSaveClick = async ()=>{
        fetch(`http://localhost:3001/edit-post?id=${id}&text=${editText}`)
        .then(async (res) => {
        })

        onUpdate()
        setEditVis(false)
        console.log(editText, id)
    }

    const handleDelete = () => {
        onDeletePost()
    }


  return (
    <FlexBox
        class="tweet"
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
                <Button
                
                variant="contained"
                    onClick={handleEditClick}
                    style={{
                        backgroundColor: '#f4a261',
                        width: "8em",
                        height: "2em",
                        marginLeft: 10,
                        fontSize: ".7em"
                    }}
               >  Edit 
                </Button>
{/* Delete's post */}
                <Button
                    variant="contained"
                    onClick={handleDelete}
                    style={{
                        backgroundColor: '#f4a261',
                        width: "8em",
                        height: "2em",
                        marginLeft: 10,
                        fontSize: ".7em"
                    }}
               >  Delete
                </Button>
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
                </FlexBox>
            </FlexBox>
            <p class = 'pbox'
                style={{
                    fontSize: '.8em',
                    alignSelf: 'flex-start',
                }}
            >{text}</p>
            
            {editVis &&
             <div> 
                <TextareaAutosize
                onChange={e => setEditText(e.target.value)}
                >{editText}</TextareaAutosize>
                <button onClick={handleSaveClick}> Save </button>
            </div>
            }
    
        
        
        </FlexBox>
        
      </Grid>
      
    </FlexBox>

  )
}
