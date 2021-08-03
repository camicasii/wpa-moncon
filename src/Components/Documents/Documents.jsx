import React from "react";
import { useStyles } from "./styled";
import { Container } from "@material-ui/core";

import IconUse from "../../Assets/svg/IconUse";
import { Link } from "react-router-dom";
const Documents = () => {
  const classes = useStyles();

  return (
    <>
      <Container>


        <div className={classes.contentWarning}>
          <div style={{ marginLeft: "15px" }}>
            <h1 className={classes.warningH1}>
              Confirmation is needed
            </h1>
            <p  className={classes.warningP}>
              Your data may be lost because you did not confirm the seed phrase.
              We advise you to complete the registration.
            </p>
          </div>
        </div>

        <div className={classes.proofContainer}>
          <Link to="/documents/demo">
          <h1 className={classes.proofTitle}>
            Proof Of ID Credential Demo
          </h1>
          <div className={classes.contentPersonal}>
            <Link
            
              to="/documents/demo"
              
              className={classes.fab}
            >
              <IconUse />
            </Link>
            <div>
              <div  className={classes.proofSubtitle}>
                Mobile Phone
              </div>
              <Link to="/" className={classes.link}>
                +58-424-222-22-22
              </Link>
            </div>
          </div>
          </Link>
        </div>


      
       
      </Container>
    </>
  );
};
export default Documents;
