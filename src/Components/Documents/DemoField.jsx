import React from "react";
import { useSelector } from 'react-redux'
import IconUse from "../../Assets/svg/IconUse";
import { Link } from "react-router-dom";
import { useStyles } from "./styled";
const DemoField = ({ to, path, title, field }) => {
  const classes = useStyles();
      const state = useSelector((state) => state.UserReducer[path].value);

    return(
  <>
      <div className={classes.proofContainer} style={{marginTop: '20px'}}>
          <Link to={to}>
          <h1 className={classes.proofTitle}>
            Proof Of ID Credential Demo
          </h1>
          <div className={classes.contentPersonal}>
            <Link
            
              to={to}
              
              className={classes.fab}
            >
              <IconUse />
            </Link>
            <div>
              <div  className={classes.proofSubtitle}>
                {title}
              </div>
              <Link to="/" className={classes.link}>
                {state}
              </Link>
            </div>
          </div>
          </Link>
        </div>
  </>
  );
}
export default DemoField
