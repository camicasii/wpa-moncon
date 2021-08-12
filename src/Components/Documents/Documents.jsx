import React from "react";
import { useStyles } from "./styled";
import { Container } from "@material-ui/core";
import { useSelector } from 'react-redux'
import IconUse from "../../Assets/svg/IconUse";
import { Link } from "react-router-dom";
import DemoField from "./DemoField";
const Documents = () => {
  const classes = useStyles();
  const mobile = useSelector((state) => state.UserReducer.mobile)
  const email = useSelector((state) => state.UserReducer.email)
  const datebirth = useSelector((state) => state.UserReducer.datebirth)
  const dinamycFields = useSelector((state) => state.UserReducer.dynamicFields);
  const address = useSelector(
    (state) => state.UserReducer.postal
  );


  return (
    <div style={{marginBottom: '30px'}}>

      {
        email.status || mobile.status || datebirth.status  ? 
          (
  <Container>


    {
    email.status === 'true' && <DemoField to="/documents/demo/email" path="email" title="Email" field="email"/>
    } 
    {
    mobile.status === 'true' && <DemoField to="/documents/demo/mobile" path="mobile" title="Mobile Phone" field="phone"/>
    } 
    {
    datebirth.status === 'true' && <DemoField to="/documents/demo/datebirth" path="datebirth" title="Date Birth" field="birthday"/>
    }
    {
      address.status === 'true' &&
        (
 <div  className={classes.proofContainer} style={{marginTop: '20px'}}>
          <Link to={`/documents/demo/postal`}>
          <h1 className={classes.proofTitle}>
            Proof Of ID Credential Demo
          </h1>
          <div className={classes.contentPersonal}>
            <Link
            
              to={`/documents/demo/postal`}
              
              className={classes.fab}
            >
              <IconUse />
            </Link>
            <div>
              <div  className={classes.proofSubtitle}>
                Postal Adress 
              </div>
              <Link to="/" className={classes.link}>
                {address.value.address}
              </Link>
            </div>
          </div>
          </Link>
        </div>

        )
    }

 
 
      
 {dinamycFields.map((values, index) => { 
   
     return values.status === "true" && (
    <div index={index}>
  <div  className={classes.proofContainer} style={{marginTop: '20px'}}>
          <Link to={`/documents/demo/field/${values.id}`}>
          <h1 className={classes.proofTitle}>
            Proof Of ID Credential Demo
          </h1>
          <div className={classes.contentPersonal}>
            <Link
            
              to={`/documents/demo/field/${values.id}`}
              
              className={classes.fab}
            >
              <IconUse />
            </Link>
            <div>
              <div  className={classes.proofSubtitle}>
                {values.id} 
              </div>
              <Link to="/" className={classes.link}>
                {values.value}
              </Link>
            </div>
          </div>
          </Link>
        </div>

     </div>
  

     )

 })}

      
       
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
        </div>
  );
};
export default Documents;
