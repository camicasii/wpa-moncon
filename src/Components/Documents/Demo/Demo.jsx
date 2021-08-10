import React from "react";
import { useStyles } from "../styled";
import { useSelector } from 'react-redux';
import Fab from "@material-ui/core/Fab";
import IconUse from "../../../Assets/svg/IconUse";
import { Link } from "react-router-dom";
import IconLeft from "../../../Assets/svg/IconLeft";
import IconWarning from "../../../Assets/svg/IconWarning";
import { useHistory } from "react-router-dom";
const Demo = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/documents");
    } else {
      history.goBack();
    }
  };

  const mobile = useSelector((state) => state.UserReducer.mobile)

  return (
    <>
      <div className={classes.contentMenu}>
        <div
          onClick={handleReturn}
          style={{ marginTop: "10px", marginRight: "15px", cursor: "pointer" }}
        >
          <IconLeft />
        </div>

        <h1 style={{ color: "#ffff" }}>Proof Of ID Credential Demo</h1>
      </div>

      {mobile.status === false ? (
   <div className={classes.contentWarningDemo}>
        <div style={{ marginLeft: "15px", marginTop: "12px" }}>
          <IconWarning />
        </div>
        <div style={{ marginLeft: "15px" }}>
          <h1 className={classes.warningDemoH1}>
            Confirmation is needed
          </h1>
          <p className={classes.warningDemoP}>
            Your data may be lost because you did not confirm the seed phrase.
            We advise you to complete the registration.
          </p>
        </div>
      </div>

      ) : null}
   

      <h1 className={classes.titleH1}>Issued by</h1>
      <div style={{ marginTop: "15px" }} >
        <div className={classes.proofContainerWhite}>
          <Fab aria-label="edit" className={classes.fabWhite}>
            <IconUse />
          </Fab>
          <div>
            <div  className={classes.issuedSubtitle}>
              Mobile Phone
            </div>
            <Link to="https://www.moncon.co" className={classes.link}>
              https://www.moncon.co
            </Link>
          </div>
        </div>
      </div>



      <h1 className={classes.titleH1}>Document details/claims</h1>
      <div
        style={{ marginTop: "15px" }}
        className={classes.documentDetailsContainer}
      >
        <div>
          <div style={{ marginLeft: "20px" }}>
            <div  className={classes.documentsSubtitle}>
              Message
            </div>
            <p className={classes.documentsMessage}>
              {mobile.value}
            </p>
          </div>
        </div>
      </div>

    </>
  );
};
export default Demo;
