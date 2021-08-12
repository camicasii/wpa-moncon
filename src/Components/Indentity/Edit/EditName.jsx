import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Container, TextField, Button } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from 'react-router';
import ArrowLeft from "../../../Assets/svg/ArrowLeft";
import { useToasts } from 'react-toast-notifications'
const EditName = () => {
  const classes = useStyles();
 const { addToast } = useToasts();
  const [name, setName ] = useState('');
  const [lastName, setLastName ] = useState('');
  const history = useHistory();
  const dispatchUserData = useDispatch();

  const handleReturn = () => {

    if( history.length <= 2 ) {
      history.push('/identity');
    } else {
      history.goBack();
    }

  }

  const handleClick = (event) => {
 event.preventDefault();
 dispatchUserData({ 
  type: 'update',
  payload: { id: 'name', value: name }
})

dispatchUserData({ 
  type: 'update',
  payload: { id: 'lastName', value: lastName }
})

      setTimeout(()=>{
 return history.push('/identity')

      },500)
      addToast('Has been added successfully', { appearance: 'success',autoDismiss: true, autoDismissTimeout: 2000 });
  };


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
          <h1 className={classes.title}>Name</h1>
          <form 
            className={classes.root} 
            noValidate 
            autoComplete="off"
          >
            <TextField
              style={{ marginTop: "20px" }}
              InputProps={{
                className: classes.input
              }}
              value={name}
              onChange={(event) => setName(event.target.value) }
              id="standard-secondary"
              label="Give Name"
            />
            <br/>
            <TextField
              style={{ marginTop: "20px" }}
              InputProps={{
                className: classes.input
              }}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="standard-secondary"
              label="Family Name"
            />
      
     
          </form>
     <Button onClick={handleClick}
className={classes.buttonBlue}
                      variant="contained"
                      color="primary"
                      type="submit"
                
                    >
                        ADD CLAIM
                    </Button>
        </Container>
      </div>
    </>
  );
};
export default EditName;
