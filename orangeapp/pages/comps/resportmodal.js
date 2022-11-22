import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { flexbox } from '@mui/system';
import { FlexBox } from '../../styles/globals';

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

export default function ReportModal({ 
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
            <FlexBox>
              <Button 
                variant="contained"
                style={{
                backgroundColor: '#f4a261',
                width: 100,
                marginRight:30
                }}
              >Report</Button>

              <Button 
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