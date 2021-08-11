import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from "react-router";
import Fab from "@material-ui/core/Fab";
import IconUse from ".././../Assets/svg/IconUse";
import Link from "../Link";

import Check from "../../Assets/svg/Check";
import IconEdit from "../../Assets/svg/IconEdit";
import toast, { Toaster } from 'react-hot-toast';

const ScanShare = ({ QrResponse,socket,data }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/identity");
    } else {
      history.goBack();
    }
  };  


  const handleClick = () => {          
  let  data = QrResponse
  const credential = JSON.parse(localStorage.getItem(data.request))
  data.idUser=socket.current.id
  data.credential =credential
  socket.current.emit('webCredentialRequest', data);
  
  return handleReturn()
  

};
  return (
    <>
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
                {QrResponse.hostnama}
              </Typography>              
            </div>
          </div>
        </div>

        <h1 className={classes.titleH1}>
          This service is asking you to share the following claims:
        </h1>
        <div className={classes.contentPersonal}>
          <Fab                        
            color="secondary"
            aria-label="edit"
            className={classes.fab}
          >
            <IconEdit />
          </Fab>
          <div
            style={{
              flexGrow: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center"
            }}
          >
            <div>
              <p className={classes.titleName}>{QrResponse.request}</p>              
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "20px"
              }}
            >
              <div className={classes.check}>
                <Check />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.appBar}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={classes.buttonBlue} onClick={handleClick} > SHARE CLAIMS</div>
            <div className={classes.buttonBlack} onClick={handleReturn}>
              {" "}
              DENY
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default ScanShare;
