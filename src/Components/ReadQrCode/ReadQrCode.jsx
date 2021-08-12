import { useState,useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";
//import ScanReceive from "./ScanReceive";
import IconLeft from "../../Assets/svg/IconLeft";
import ScanShare from "./ScanShare";
import { useToasts } from 'react-toast-notifications';


const ReadQRCode = ({socket}) => {
  const classes = useStyles();
  const [QrScan, setQrScan] = useState(false)
  const [QrResponse, setQrResponse] = useState({});  
  const { addToast } = useToasts();
  const history = useHistory();
  //this is the delay between each scan
  const delay = 400;

  const handleError = err => {
    addToast(err.message, { appearance: 'error',autoDismiss: true, autoDismissTimeout: 3000 })    

  };

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/documents");
    } else {
      history.goBack();
    }
  };

  const handleScan = data => {
    try {      
    if (data) {
      console.log(data);
      const dataParse = JSON.parse(data)
      const validate = localStorage.hasOwnProperty(dataParse.request)
      if(!validate) {
      addToast('Credential Fail', { appearance: 'error',autoDismiss: true, autoDismissTimeout: 4000 })    
      return
      }
      setQrResponse(dataParse);  
    addToast('Correct QR code', { appearance: 'success',autoDismiss: true, autoDismissTimeout: 3000 }); 
      return       
    }
  }catch(error){
    console.log(error.message);
 addToast(error.message, { appearance: 'error',autoDismiss: true, autoDismissTimeout: 3000 })    
    setQrResponse({});           
  }
  }    
  
  useEffect(() => {        
    if(Object.keys(QrResponse).length > 0)
    setQrScan(true)

  }, [QrResponse])

  return (
    <> 
   <Grid container justifyContent="center" className={classes.root}>
      <Grid container justifyContent="center" style={{ background: '#272727 !important'}}>      
        {!QrScan && (
          <>          
  <div className={classes.contentMenu}>
        <div
          onClick={handleReturn}
          style={{ marginTop: "18px", marginRight: "12px", cursor: "pointer" }}
        >          
          <IconLeft />
        </div>       

    <h1 style={{ color: "#ffff", fontSize: '2.2rem' }}>Scan QR code</h1>
      </div>
  <Grid container justifyContent="center"  className={classes.contentMenu_2}>
           

    <Typography style={{ color: "#ffff", fontSize: '2.2rem', fontWeight: 'normal !important' }}>To use Moncon Wallet go to the web to unlock on your computer</Typography>
      </Grid>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "180%",
   background: '#272727 !important',
              }}
            > 
              <QrReader
                delay={delay}
                className={classes.previewStyle}
                onError={handleError}
                onScan={handleScan}
                facingMode="environment"           
                             />

            </div>

          
            
          </>
        )}
      </Grid>      
      {QrScan && (
        <ScanShare QrResponse={QrResponse} socket={socket}/>
             )}
   </Grid>
      </>  
  );
};

export default ReadQRCode;
