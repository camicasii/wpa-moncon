import React from "react";
import { useStyles } from "./styled";
import { Container } from "@material-ui/core";
import { useSelector } from 'react-redux'
import IconUse from "../../Assets/svg/IconUse";
import { Link } from "react-router-dom";
const Documents = () => {
  const classes = useStyles();
  const mobile = useSelector((state) => state.UserReducer.mobile)



  return (
    <>
      {
        mobile.value !== '' ? 
          (
  <Container>

        {
          mobile.status === false ? (
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
          ) : null
        }


      { mobile.value !== '' ? (
        <div className={classes.proofContainer} style={{marginTop: '20px'}}>
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
                {mobile.value}
              </Link>
            </div>
          </div>
          </Link>
        </div>
          ) : null }
      


      
       
      </Container>

          ) : (
            <>
               <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          textAlign: 'center',
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: '20px',
          fontWeight: 500,
        }}
        >
        No document found
    </div>  
            </>
          )


      }
        </>
  );
};
export default Documents;
