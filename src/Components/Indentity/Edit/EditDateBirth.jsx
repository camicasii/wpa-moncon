import { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { Container, TextField,Button } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from 'react-router';
import ArrowLeft from "../../../Assets/svg/ArrowLeft";
import { useToasts } from 'react-toast-notifications'
const EditDateBirth = (  ) => {
  const classes = useStyles();
 const { addToast } = useToasts()
  const [dateBirth, setDateBirth ] = useState('');
  const history = useHistory();
  const dispatchUserData  = useDispatch();
 const datebirthValue = useSelector((state)=> state.UserReducer.datebirth.value);

  const handleClick = (event) => {
  event.preventDefault();
    let payload = {id: 'datebirth'};
    if(dateBirth){
      payload.value = dateBirth;
    }

    if(localStorage.hasOwnProperty('credential_birthday'))
    localStorage.removeItem("credential_birthday");
    dispatchUserData({
      type: 'update',
      payload,
    })
       setTimeout(()=>{
 return history.push('/identity')

      },500)
   addToast('Has been added successfully', { appearance: 'success',autoDismiss: true, autoDismissTimeout: 2000 });
  };

useEffect(() => {
  setDateBirth(datebirthValue)
}, [datebirthValue])


  const handleReturn = () => {

    if( history.length <=2 ) {
      history.push('/identity');
    } else {
      history.goBack();
    }

  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "20px",
          background: "#272727",
          fontWeight: 500
        }}
      >
        <Container className={classes.root}>
          <div 
            onClick={ handleReturn }
            className={classes.return}
          >
            <ArrowLeft /> <p style={{marginLeft:'15px'}}>Return</p>          
          </div>
          <h1 className={classes.title}>Date Birth</h1>
          <form onSubmit={handleClick} className={classes.root} noValidate autoComplete="off">
            <TextField
              style={{ marginTop: "20px" }}
              type="date"
              InputProps={{
                className: classes.input
              }}
              value={dateBirth}
              onChange={(event) => setDateBirth(event.target.value)}
              id="standard-secondary"
              
            />
            <br/>
   <Button onClick={handleClick}
className={classes.buttonBlue}
                      variant="contained"
                      color="primary"
                      type="submit"
                
                    >
                        ADD CLAIM
                    </Button>

          </form>

     
        </Container>
      </div>
    </>
  );
};
export default EditDateBirth
