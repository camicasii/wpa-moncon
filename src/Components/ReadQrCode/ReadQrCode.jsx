import { useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import QrReader from "react-qr-scanner";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from "@material-ui/core/Fab";
import IconUse from ".././../Assets/svg/IconUse";
import Link from "../Link";
import clsx from "clsx";

const ReadQRCode = () => {
  const classes = useStyles();
  const [QrResponse, setQrResponse] = useState("");
  //this is the delay between each scan
  const delay = 400;

  const handleError = err => {
    //console.log(err);
    alert(err);
  };

  const handleScan = data => {
    if (data) {
      // console.log(data);
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
                paddingTop: "100%"
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
        <Container>
          <h1 className={classes.titleH1}>Service</h1>
          <div style={{ marginTop: "15px" }}>
            <div className={classes.serviceContainerWhite}>
              <Fab aria-label="edit" className={classes.fabWhite}>
                <IconUse />
              </Fab>
              <div>
                <Typography
                  variant="body1"
                  className={classes.serviceSubtitleBlack}
                >
                  Demo Offline
                </Typography>
                <Link
                  target={"_blank"}
                  to={QrResponse}
                  className={classes.link}
                >
                  {QrResponse}
                </Link>
              </div>
            </div>
          </div>



          <h1 className={classes.titleH1}>
            Choose one or more documents provided by this service and we will
            generate them for you.
          </h1>



          <div
            style={{ marginTop: "15px" }}
            className={classes.serviceContainer}
          >
            <div style={{display: 'flex'}}>
              <Typography variant="body1" className={classes.serviceTitle}>
                Proof Of ID Credential Demo
              </Typography>
              <Checkbox
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
              />
            </div>
            <div className={classes.contentService}>
              <Fab
                style={{ marginLeft: "12px", marginRight: "14px" }}
                aria-label="edit"
                className={classes.fab}
              >
                <IconUse />
              </Fab>
              <div>
                <Typography variant="body1" className={classes.serviceSubtitle}>
                  Demo Offline
                </Typography>
                <Link  to={QrResponse} className={classes.link}>
                  {QrResponse}
                </Link>
              </div>
            </div>
          </div>
          <div style={{display: 'flex',justifyContent: 'center'}}>
 <div className={classes.buttonBlue}> RECIVE</div>
 <div className={classes.buttonBlack} > DENY</div>
          </div>
 


        </Container>
      )}
    </Grid>
  );
};

export default ReadQRCode;
