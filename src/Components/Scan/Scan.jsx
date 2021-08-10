import React,{useState} from 'react'
import ReadQrCode from '../ReadQrCode';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  flexGrow: 1,
    maxWidth: 500,
    top: 'auto',
    bottom: 0,
  },
button: {
    margin: "20px 50px !important",
    textAlign: 'center !important',
    borderRadius: "4px !important",
    fontSize: "14px !important",
    fontWeight: 600,
    textTransform: 'none !important',
    padding: "12px 31px 14px !important",
    background: "#03DAC5 !important",
    color: "#fff !important",
    cursor: "pointer !important",
    "@media screen and (max-width: 800px)": {
        textAlign: 'center !important',
        margin: "20px 10px !important",
        borderRadius: "4px !important",
        fontSize: "12px !important",
        fontWeight: 600,
        padding: "12px 15px 14px !important",
        background: "#03DAC5 !immportant",
        color: "#fff !important",
        cursor: "pointer",
    },
        '&:hover': {
            opacity: '.8',
            boxShadow: 'none',
        },
  },

}));

const Scan = (  ) =>{
  const classes = useStyles();
const [display, setDisplay] = useState(false)


  const handleClick = () => {
    setDisplay(!display);
  };
  return(
  <>
    <Grid style={{marginTop: display ? '0px' : '30px',overflowX: 'hidden',overflowY: 'hidden'}} container justifyContent='center' >
      <Grid container justifyContent='center'>
        <Button
          style={{display: display ? 'none' : 'block'}}
          color='primary' 
          variant='contained'
          className={classes.button}
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
