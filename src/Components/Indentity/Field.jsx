import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStyles } from "./styled";
import { post } from "../../services/apiHandler.js";
import { Fab, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import IconEdit from "../../Assets/svg/IconEdit";
import Check from "../../Assets/svg/Check";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

export default function Field({ to, path, title, field }) {
  const [isCredential] = useState(true);
  const [data, setData] = useState(null);
  const state = useSelector((state) => state.UserReducer[path].value);
  const id = useSelector((state) => state.UserReducer[path].id);
  const [sellStatus, setSellStatus ] = useState('');
  const dispatchUserData = useDispatch();
  const classes = useStyles();

  const credential = async () => {
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
    console.log(res);

    console.log(res.data);
 const payload = {id: `${id}`,value: `${state}`};
    if(hasCredentials !== true){
      payload.status = true
    }
    dispatchUserData({
      type: 'update',
      payload 
    })


    //storage res data
  };

    useEffect(() => {
      if (data) {
        localStorage.setItem(`credential_${field}`, JSON.stringify(data));
   toast.success('Verified credential');
      }


    }, [data]);



const hasCredentials = localStorage.hasOwnProperty(`credential_${field}`) || Boolean(data)



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
    <Toaster  toastOptions={{duration: 3000,style:{fontSize: '1.6rem'}}}/>
          </div>
        </div>
      </div>
    </>
  );
}
