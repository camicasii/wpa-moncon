import React from "react";
import { useStyles } from "./styled";
import Fab from "@material-ui/core/Fab";

import IconHeart from "../../Assets/svg/IconHeart";

const Settings = () => {
  const classes = useStyles();

  return (
    <>

 <div className={classes.root}>
        <h1 className={classes.titleH1}>Security</h1>
        <div className={classes.contentSetting}>
          <Fab color="secondary" aria-label="edit" className={classes.fab}>
            <IconHeart />
          </Fab>
          <div>
            <h1 className={classes.titleSettings}>Change passcode</h1>
          </div>
        </div>
        <div className={classes.contentWarning}>
          <Fab
            style={{ background: "#F1A008", marginLeft: "9px" }}
            aria-label="edit"
            className={classes.fab}
          >
            <IconHeart />
          </Fab>
          <div >
            <h1 className={classes.titleSettings}>Backup Your Identity</h1>
            <p className={classes.settingsP}>
              Set up a secure phrase to recover your acccount in the future if
              your phone is stolen or is damaged.
            </p>
          </div>
        </div>
        <div>
          <h1 className={classes.titleH1}>Contact</h1>

          <div className={classes.contentSetting}>
            <Fab color="secondary" aria-label="edit" className={classes.fab}>
              <IconHeart />
            </Fab>
            <div>
              <h1 className={classes.titleSettings}>Send error report</h1>
            </div>
          </div>
          <div className={classes.contentSetting}>
            <Fab color="secondary" aria-label="edit" className={classes.fab}>
              <IconHeart />
            </Fab>
            <div>
              <h1 className={classes.titleSettings}>Privacy Policy</h1>
            </div>
          </div>

          <div className={classes.contentSetting}>
            <Fab color="secondary" aria-label="edit" className={classes.fab}>
              <IconHeart />
            </Fab>
            <div>
              <h1 className={classes.titleSettings}>Terms of service</h1>
            </div>
          </div>
        </div>
      </div>
         </>
  );
};
export default Settings;
