import { useState,useEffect,useRef } from "react";
import ReadQrCode from '../ReadQrCode';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import io from 'socket.io-client';

import IconLeft from "../../Assets/svg/IconLeft";
const useStyles = makeStyles((theme) => ({
  root: {
  flexGrow: 1,
    maxWidth: 500,
    top: 'auto',
    bottom: 0,
  },
  contentMenu:{
    background: '#272727',
    display: 'flex',
    width: '100%',

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
  const socketRef = useRef()
  const classes = useStyles();
const [display, setDisplay] = useState(false)
  const history = useHistory();
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/documents");
    } else {
      history.goBack();
    }
  };

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_MONCON_API_BASE_URL_SOCKET);    
    socketRef.current.on('connect', () => {        
      console.log(socketRef.current.id);
      
      
    });
    
    return () => {
      socketRef.current.on('disconnect', () => {
        console.log('disconnect');
      });
    }
    
    
  }, [])
  
  const handleScan2 = () => {      
    let  data={
      idProvider: "ClGLRW0zOt62BUywAAA5",
      idUser: socketRef.current.id,
      hostnama:"localhost",
      request:"credential_birthday"
      }  


  const validate = localStorage.hasOwnProperty(data.request)

  if(!validate) return alert('credential fail')
  const credential = JSON.parse(localStorage.getItem(data.request))
  data.credential =credential
  
  
    
  socketRef.current.emit('webCredentialRequest', data);

};

  const handleClick = () => {
    setDisplay(!display);
  };
  return(
  <>
 <div className={classes.contentMenu}  style={{display: display ? 'none' : 'flex'}}>
        <div
          onClick={handleReturn}
          style={{ marginTop: "17px", marginRight: "12px", cursor: "pointer" }}
        >
          <IconLeft />
        </div>

    <h1 style={{ color: "#ffff", fontSize: '2.2rem' }}>Return</h1>
      </div>
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
        
        { display && <ReadQrCode socket={socketRef}/>  }
      </Grid>  
    </Grid>
  </>
)}
export default Scan
