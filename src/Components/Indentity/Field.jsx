import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStyles } from "./styled";
import { post } from "../../services/apiHandler.js";
import { Fab, Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import IconEdit from "../../Assets/svg/IconEdit";
import Check from "../../Assets/svg/Check";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from 'react-toast-notifications'

export default function Field({ to, path, title, field }) {

  const { addToast } = useToasts()
  const [data, setData] = useState(null);
  const state = useSelector((state) => state.UserReducer[path].value);
  const id = useSelector((state) => state.UserReducer[path].id);
  const [hasCredentials, sethasCredentials] = useState(localStorage.hasOwnProperty(`credential_${field}`))

  const dispatchUserData = useDispatch();
  const classes = useStyles();

  const credential = async () => {
    if(state !== ''){
   let credentialSubject = {
      id: `did:moncon:${uuidv4()}`,
      credential: {
        id: `did:moncon:${uuidv4()}`,
      },
    };
    credentialSubject.credential[field] = state;
    const res = await post(credentialSubject);
    let data = res.data;
    setData(data);
    console.log(res.data);
 const payload = {id: `${id}`,value: `${state}`};
 
 localStorage.setItem(`credential_${field}`, JSON.stringify(data));
 sethasCredentials(true)
    if(hasCredentials !== true){
      payload.status = 'true'
    }
    dispatchUserData({
      type: 'update',
      payload 
    })
    } else {
 addToast('Add a value to the identity', { appearance: 'error',autoDismiss: true, autoDismissTimeout: 4000 });
    }
 


    //storage res data
  };

    useEffect(() => {
      if (data) {
        localStorage.setItem(`credential_${field}`, JSON.stringify(data));
 addToast('Verified credential', { appearance: 'success',autoDismiss: true, autoDismissTimeout: 2000 });

      }


    }, [data,addToast,field]);







  return (
    <>
      <div className={classes.contentPersonal}>
        <Fab
          component={Link}
          to={to}
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
            alignItems: "center",
          }}
        >
          <div>
            <p className={classes.titleName}> {title}</p>
            <Link to={to}>
              <h1 className={classes.name}>
                {state || <span className={classes.add}>+ add</span>}
              </h1>
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {hasCredentials !== true ? (
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                onClick={credential}
              >
                Ask Credential
              </Button>

            ) : (
              <div className={classes.check}>
                <Check />
              
              </div>

            )}

          </div>
        </div>
      </div>
    </>
  );
}
