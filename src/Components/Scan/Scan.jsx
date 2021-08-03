import React,{useState} from 'react'
import ReadQrCode from '../ReadQrCode';
import {Grid, Button } from '@material-ui/core';
const Scan = (  ) =>{

const [display, setDisplay] = useState(false)


  const handleClick = () => {
    setDisplay(!display);
  };
  return(
  <>
    <Grid style={{marginTop: '30px',overflowX: 'hidden',overflowY: 'hidden'}} container justifyContent='center' >
      <Grid container justifyContent='center'>
        <Button 
          color='primary' 
          variant='contained'
          
          onClick={handleClick}
        >
          Read Qr Code
        </Button>
        { display && <ReadQrCode/>  }
      </Grid>  
    </Grid>
  </>
)}
export default Scan
