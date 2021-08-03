import { useState } from "react";
import { useSelector } from 'react-redux'
import { useStyles } from "./styled";
import {Fab,Button,Grid} from "@material-ui/core";
import { Link } from "react-router-dom";
import IconEdit from "../../Assets/svg/IconEdit";
import Check from "../../Assets/svg/Check";




const Identity = () => {
  const classes = useStyles();
  const [isCredential] = useState(true)


  const name = useSelector((state) => state.UserReducer.name.value )
  const lastName = useSelector((state) => state.UserReducer.lastName.value);
  const email = useSelector((state)=> state.UserReducer.email.value)
  const mobile = useSelector((state) => state.UserReducer.mobile.value)
  const address = useSelector((state) => state.UserReducer.postal.value.address)
  const dinamycFields = useSelector((state)=> state.UserReducer.dynamicFields);
  const datebirth = useSelector((state)=> state.UserReducer.datebirth.value);
 

  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.titleH1}>Personal</h1>
        <div className={classes.contentPersonal} >
          <Fab
            component={Link}
            to="/identity/edit/name"
            color="secondary"
            aria-label="edit"
            className={classes.fab}
          >
            <IconEdit />
          </Fab>
          <div>
            <p className={classes.titleName}>Give Name</p>

            <h1 className={classes.name}>
              { name || '---' }
            </h1>

            <p className={classes.titleName}>Family Name</p>
             <h1 className={classes.name}>
              { lastName || '---' }
            </h1>
          </div>
        </div>

        <div>
          <h1 className={classes.titleH1}>Contact</h1>
          <div className={classes.contentPersonal}>
            <Fab
              component={Link}
              to="/identity/edit/email"
              color="secondary"
              aria-label="edit"
              className={classes.fab}
            >
              <IconEdit />
            </Fab>
            <div style={{flexGrow: 1}}>
              <p className={classes.titleName} >Email</p>
              <Link to="/identity/edit/email">
                <h1 className={classes.name}>
                  {
                    email ||<span className={classes.add}>+ add</span>
                  }
                </h1>
              </Link>
            </div>
        {
              isCredential 
              ? (
                  <div className={classes.button} >
                    Ask for Credential 
                  </div>
                ) 
              : 
                (
                  <div className={classes.check}>
                    <Check />
                  </div>
                )
            }
          </div>

          <div className={classes.contentPersonal}>
            <Fab
              component={Link}
              to="/identity/edit/mobile"
              color="secondary"
              aria-label="edit"
              className={classes.fab}
            >
              <IconEdit />
            </Fab>
            <div style={{flexGrow: 1}}>
              <p className={classes.titleName}>Mobile Phone</p>
              <Link to="/identity/edit/mobile"> 
                <h1 className={classes.name}>
                  {
                    mobile || <span className={classes.add}>+ add</span>
                  }
                </h1>
              </Link>
            </div>
           
                 {
              isCredential 
              ? (
                  <div className={classes.button} >
                    Ask for Credential 
                  </div>
                ) 
              : 
                (
                  <div className={classes.check}>
                    <Check />
                  </div>
                )
            }
          </div>

          <div className={classes.contentPersonal}>
            <Fab
              component={Link}
              to="/identity/edit/postal"
              color="secondary"
              aria-label="edit"
              className={classes.fab}
            >
              <IconEdit />
            </Fab>
            <div style={{flexGrow: 1}}>
              <p className={classes.titleName}>Postal Address</p>
   <Link to="/identity/edit/postal">
                <h1 className={classes.name}>
                  {
                    address || <span className={classes.add}>+ add</span>
                  }
                </h1>
              </Link>
            </div>
            {
              isCredential 
              ? (
                  <div className={classes.button} >
                    Ask for Credential 
                  </div>
                ) 
              : 
                (
                  <div className={classes.check}>
                    <Check />
                  </div>
                )
            }

          </div>
          <div className={classes.contentPersonal}>
            <Fab
              component={Link}
              to="/identity/edit/datebirth"
              color="secondary"
              aria-label="edit"
              className={classes.fab}
            >
              <IconEdit />
            </Fab>
            <div style={{flexGrow: 1}}>
              <p className={classes.titleName}>Date Birth</p>
              <Link to="/identity/edit/datebirth">
                <h1 className={classes.name}>
                  {
                    datebirth || <span className={classes.add}>+ add</span>
                  }
                </h1>
              </Link>
          </div>
  
               {
              isCredential 
              ? (
                  <div className={classes.button} >
                    Ask for Credential 
                  </div>
                ) 
              : 
                (
                  <div className={classes.check}>
                    <Check />
                  </div>
                )
            }
        </div>
     {dinamycFields.map((values,index) => {
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
      <div style={{flexGrow: 1,marginLeft:'1px'}}>
              <p className={classes.titleName}>{values.id}</p>
              
                <h1 className={classes.name}>
                  {
                   values.value
                  }
                </h1>
            
          </div>
  
             {
              isCredential 
              ? (
                  <div className={classes.button} >
                    Ask for Credential 
                  </div>
                ) 
              : 
                (
                  <div className={classes.check}>
                    <Check />
                  </div>
                )
            }
        </div>
     
       ) 
    })}
        </div>
  <Grid container item xs justifyContent="center">
        <Link to ="/identity/add/field">
          <Button className={classes.button}   variant="contained"
                      color="primary"
                      type="submit">
            ADD 
          </Button>
        </Link>
  </Grid>
      </div>
    </>
  );
};
export default Identity;
