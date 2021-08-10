import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Container,  Grid, Button} from "@material-ui/core";
import { useHistory } from 'react-router';
import PhoneField from './CustomPhoneNumber'
import { useStyles } from "./style";
import ArrowLeft from "../../../Assets/svg/ArrowLeft";
import toast, { Toaster } from 'react-hot-toast';

const EditMobile = () => {
  const classes = useStyles();
  const history = useHistory();
  const [mobilePhone, setMobile ] = useState('');
  const dispatchUserData = useDispatch();
 const mobileValue = useSelector((state)=> state.UserReducer.mobile.value)
  const handleClick = (event) => {
 event.preventDefault();
    const payload = { id : 'mobile' };
    if(mobilePhone){
      payload.value = mobilePhone;
    }
    dispatchUserData({
      type: 'update',
      payload,
    })
        setTimeout(()=>{
 return history.push('/identity')

      },2500)
   toast.success('Has been added successfully');
  };

useEffect(() => {
  setMobile(mobileValue)
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
          <h1 className={classes.title}>Mobile Phone</h1>
          <form onSubmit={handleClick} className={classes.root} noValidate autoComplete="off">
        
            <Grid container item xs justifyContent="center">
              <PhoneField 
 value={mobilePhone}
              onChange={setMobile}

              />
</Grid>

          </form>
<Button onClick={handleClick}
className={classes.buttonBlue}
                      variant="contained"
                      color="primary"
                      type="submit"
                      data-cy="create-user"
                    >
                        ADD CLAIM
                    </Button>
     <Toaster  toastOptions={{duration: 1000}}/>
        </Container>
      </div>
    </>
  );
};
export default EditMobile;
