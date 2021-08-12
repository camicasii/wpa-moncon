import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStyles } from "./styled";
import { post } from "../../services/apiHandler.js";
import { Fab, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import IconEdit from "../../Assets/svg/IconEdit";
import Check from "../../Assets/svg/Check";
import { useDispatch } from "react-redux";
import { useToasts } from 'react-toast-notifications'

export default function DinamycField({values,index}) {
   
    const classes = useStyles();
  const [data, setData] = useState(null);
  const dispatchUserData = useDispatch()
  const { addToast } = useToasts()


 const credential = async () => {
    let credentialSubject = {
      id: `did:moncon:${uuidv4()}`,
      credential: {
        id: `did:moncon:${uuidv4()}`,
      },
    };
    credentialSubject.credential[values.value] = values.id;
    const res = await post(credentialSubject);
    let data = res.data;
    setData(data);
    console.log(res);

    console.log(res.data);
   const payload = {value: `${values.value}`, id: `${values.id}`};
    if(hasCredentials !== 'true'){
      payload.status = 'true'
    }
    dispatchUserData({
      type: 'update-dynamic-field',
      payload 
    })


    //storage res data
  };

    useEffect(() => {
      if (data) {
        localStorage.setItem(`credential_${values.id}`, JSON.stringify(data));
        addToast('Verified credential', { appearance: 'success',autoDismiss: true, autoDismissTimeout: 2000 });
;
      }


    }, [data,addToast,values.id]);



const hasCredentials = localStorage.hasOwnProperty(`credential_${values.id}`) || Boolean(data)

    return (              
        <div className={classes.contentPersonal} key={index}>
          <Fab
            component={Link}
            to={`/identity/edit/field/${values.id}`}
            color="secondary"
            aria-label="edit"
            className={classes.fab}
          >
            <IconEdit />
          </Fab>
          <div style={{ flexGrow: 1, marginLeft: "1px" }}>
            <p className={classes.titleName}>{values.id}</p>

            <h1 className={classes.name}>{values.value}</h1>
          </div>

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
              <div className={classes.check} style={{marginTop: '30px'}}>
                <Check />

              </div>
            )}
   
        </div>
      );
}
