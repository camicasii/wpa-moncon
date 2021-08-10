import { useState } from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";
import QrReader from "react-qr-reader";

import ScanReceive from "./ScanReceive";

const ReadQRCode = () => {
  const classes = useStyles();
  const [QrResponse, setQrResponse] = useState("");
  //this is the delay between each scan
  const delay = 400;
  const [selfie] = useState(false);
  const handleError = err => {
    //console.log(err);
    alert(err);
  };

  const handleScan = data => {
    if (data) {
      console.log(data);
      return setQrResponse(data.text);
    }

    // console.error('QrResponse is null', data);
  };

  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid container justifyContent="center" className={classes.root}>
        {!QrResponse && (
          <>
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
                             />
            </div>
            <Grid container style={{ height: "100px" }} />
          </>
        )}
      </Grid>
      {QrResponse && (
        <ScanReceive QrResponse={QrResponse}/>
             )}
    </Grid>
  );
};

export default ReadQRCode;
