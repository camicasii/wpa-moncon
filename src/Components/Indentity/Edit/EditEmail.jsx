import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Container,Button } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from 'react-router';
import ArrowLeft from "../../../Assets/svg/ArrowLeft";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import toast, { Toaster } from 'react-hot-toast';
const EditEmail = () => {
  const classes = useStyles();
  const [email, setEmail ] = useState('');
  const history = useHistory();
  const dispatchUserData  = useDispatch();
  const emailValue = useSelector((state)=> state.UserReducer.email.value)
  const handleClick = (event) => {
     event.preventDefault();
let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!filter.test(email)){
     console.log(email);
    } else {
  dispatchUserData({
      type: 'update',
      payload: {id: 'email', value: email },
    })
      setTimeout(()=>{
 return history.push('/identity')

      },2500)
   toast.success('Has been added successfully');
    }
    };

useEffect(() => {
  setEmail(emailValue)
}, [])


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
          <h1 className={classes.title}>Email</h1>
          <ValidatorForm className={classes.root} onSubmit={handleClick} noValidate autoComplete="off"    onError={errors => console.log(errors)}>
            <TextValidator
              style={{ marginTop: "20px" }}
              InputProps={{
                className: classes.input
              }}
             
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="standard-secondary"
              label="Email"
   validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
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
<Toaster  toastOptions={{duration: 1000}}/>
          </ValidatorForm>

     
        </Container>
      </div>
    </>
  );
};
export default EditEmail;
