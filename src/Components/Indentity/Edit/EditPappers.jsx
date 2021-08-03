import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Container, TextField,Button } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from 'react-router';
import ArrowLeft from "../../../Assets/svg/ArrowLeft";
const EditPappers = (  ) => {
  const classes = useStyles();
  const [pappers, setPappers ] = useState('');
  const history = useHistory();
  const dispatchUserData  = useDispatch();

  const handleClick = (event) => {
    let payload = {id: 'pappers'};
    if(pappers){
      payload.value = pappers;
    }
    dispatchUserData({
      type: 'update',
      payload,
    })
    return history.push('/identity')
  };


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
          <h1 className={classes.title}>Pappers</h1>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              style={{ marginTop: "20px" }}
              InputProps={{
                className: classes.input
              }}
              value={pappers}
              onChange={(event) => setPappers(event.target.value)}
              id="standard-secondary"
              label="Value"
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
export default EditPappers
