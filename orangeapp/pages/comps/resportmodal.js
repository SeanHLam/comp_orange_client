import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { flexbox } from '@mui/system';
import { FlexBox } from '../../styles/globals';
import { useState, useEffect } from "react"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,

};



//sets the modal to be visible or not
export default function ReportModal({ 
  handleClose = () => {},
  handleNext = () => {},
  on=false,
  postid="",
}) {
  

const [reportTxt, setReportTxt] = useState('');


const handlePage = (e) => {
    e.preventDefault()
}

//set text of report text box
const updateBody = (e) => {
  setReportTxt(e.target.value)
}

//sends the report text and the post id to the server
  const handleReport = () => {
    fetch(`http://localhost:3001/send-report?report=${reportTxt}&postid=${postid}`)
        .then(async (res) => {
        })
    handleNext()
  }

  

  return (
    <div>
      
      <Modal
        open={on}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FlexBox
          dir='column'
        >
        <h2
            style={{
                fontSize: '1em',
            
                margin: '2%'
            }}>
            Send a Report
        </h2>
          <form 
          onSubmit={handlePage} method="post"
          style={{
            minHeight: 90,
            width: '90%',
            backgroundColor: 'white',
            borderRadius: '5px',
            marginTop: '5%',
            marginBottom: '5%',
            color: 'black'
        }}>
            <textarea
                onChange={updateBody}
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

        

              <FlexBox>
                <Button 
                  type="submit"
                  onClick={handleReport} 
                  variant="contained"
                  style={{
                  backgroundColor: '#f4a261',
                  width: 100,
                  marginRight:30
                  }}
                >Report</Button>

                  <Button
                   
                    onClick={handleClose} 
                    variant="contained"
                    style={{
                    backgroundColor: 'gray',
                    width: 100
                      }}
                  >Back</Button>
                </FlexBox>
              </form>
            </FlexBox>
           
        </Box>
        
      </Modal>
    </div>
  );
}