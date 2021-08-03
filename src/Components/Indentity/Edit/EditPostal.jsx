import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Container, TextField } from "@material-ui/core";
import { useHistory } from 'react-router';
import { useStyles } from "./style";
import ArrowLeft from "../../../Assets/svg/ArrowLeft";

const EditPostal = () => {

  const classes = useStyles();
  const [addressLine1, setAddressLine1 ] = useState('');
  const [addressLine2, setAddressLine2 ] = useState('');
  const [postalCode, setPostalCode ] = useState('');
  const [city, setCity ] = useState('');
  const [country, setCountry ] = useState('');

  const history = useHistory();
  const dispatchUserData = useDispatch();

  const handleClick = (event) => {
    let payload = {value:{}, id: 'postal'};
    if(addressLine1.trim()){
      payload.value.addressLine1 = addressLine1.trim();
    }
    if(addressLine2.trim()){
      payload.value.addressLine2 = addressLine2.trim();
    }
    if(postalCode.trim()){
      payload.value.postalCode = postalCode;
    }
    if(country.trim()){
      payload.value.country = country;
    }
    if(city.trim()){
      payload.value.city = city;
    }
    if(addressLine1.trim() || addressLine2.trim() || country.trim() || city.trim() ){
      payload.value.address = `${addressLine1.trim()} ${addressLine2.trim()} ${city} ${country}`.trim();
    }

    dispatchUserData({
      type: 'update',
      payload,
    })
    return history.push('/identity')
  };
  
  const handleReturn = () => {

    if( history.length <= 2 ) {
       history.push('/identity');
    } else {
      history.goBack();
    }

  }

  return(
  <>
    <div  
      style={{
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
        background: '#272727',
        fontWeight: 500,
      }}
    >
      <Container className={classes.root}>        
        <div 
          onClick={ handleReturn } 
          className={classes.return}
        >
          <ArrowLeft /> <p style={{marginLeft:'15px'}}>Return</p>    
        </div>
        <h1 className={classes.title}>Postal Address</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            style={{marginTop: '20px'}}  
            InputProps={{
            className: classes.input
            }} 
            value={addressLine1}
            onChange={(event) => setAddressLine1(event.target.value)}
            id="standard-secondary" 
            label="Address Line 1"  
          />
          <br/>
          <TextField 
            style={{marginTop: '20px'}}  
            InputProps={{
              className: classes.input
            }} 
            value={addressLine2}
            onChange={(event) => setAddressLine2(event.target.value)}
            id="standard-secondary" 
            label="Address Line 2"
          />
          <br/>
          <TextField 
            style={{marginTop: '20px'}} 
            InputProps={{
              className: classes.input
            }}
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            id="standard-secondary" 
            label="Postal Code"  
          />
          <br/>
          <TextField 
            style={{marginTop: '20px'}}  
            InputProps={{
              className: classes.input
            }} 
            value={city}
            onChange={(event) => setCity(event.target.value)}
            id="standard-secondary" 
            label="City"
          />
          <br/>
          <TextField 
            style={{marginTop: '20px'}}
            InputProps={{
              className: classes.input
            }} 
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            id="standard-secondary" 
            label="Country"
          />

        </form>
        <div 
        className={classes.buttonBlue}  
        onClick={handleClick}> 
          ADD CLAIM
        </div>
      </Container> 
    </div>
  </>
)}
export default EditPostal
