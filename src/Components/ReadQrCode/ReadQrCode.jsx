import { useState,useEffect,useRef } from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";
import ScanReceive from "./ScanReceive";
import IconLeft from "../../Assets/svg/IconLeft";
import ScanShare from "./ScanShare";
import toast, { Toaster } from 'react-hot-toast';


const ReadQRCode = ({socket}) => {
  const classes = useStyles();
  const [QrScan, setQrScan] = useState(false)
  const [QrResponse, setQrResponse] = useState({});  
  //this is the delay between each scan
  const delay = 400;
  const [selfie] = useState(false);
  const handleError = err => {
    //console.log(err);
    alert(err);
  };
  const history = useHistory();
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/documents");
    } else {
      history.goBack();
    }
  };

  const handleScan = data => {
    if (data) {
      
      const dataParse = JSON.parse(data)
      console.log(dataParse);      
      const validate = localStorage.hasOwnProperty(dataParse.request)
      if(!validate) return alert('credential fail')      
      setQrResponse(dataParse);           
      return       
    }
  }    
  useEffect(() => {    
    if(Object.keys(QrResponse).length > 0)
    setQrScan(true)
  }, [QrResponse])

  return (
    <> 
   <Grid container justifyContent="center" className={classes.root}>
      <Grid container justifyContent="center" className={classes.root}>      
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
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "180%"
              }}
            >
              <div className={classes.boxShadow}></div>
              <div className={classes.boxtext}>
                It's all automatic, just place your phone above the code
              </div>
              <div className={classes.container} />
              
              <QrReader
                delay={delay}
                className={classes.previewStyle}
                onError={handleError}
                onScan={handleScan}
                facingMode="environment"
            
                             />
            </div>
            <Grid container style={{ height: "100px" }} />
            
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
