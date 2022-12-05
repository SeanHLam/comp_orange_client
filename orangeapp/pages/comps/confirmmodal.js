import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { flexbox } from '@mui/system';
import { FlexBox } from '../../styles/globals';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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


export default function ConfirmModal({ 
  handleClose = () => {},
  on=false
}) {

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
        <CheckCircleIcon
        style={{ 
          color: "#f4a261" ,
          fontSize: 50
        }}
        ></CheckCircleIcon>
        <h2
            style={{
                fontSize: '1em',
                textAlign: 'center',
                margin: '2%'
            }}>
          Your report has been sent and
          is currently queued for review
        </h2>
    
            <FlexBox>


              <Button
                onClick={handleClose} 
                variant="contained"
                style={{
                backgroundColor: 'gray',
                width: 100
                  }}
              >Back</Button>
             </FlexBox>
           </FlexBox>
        </Box>
        
      </Modal>
    </div>
  );
}