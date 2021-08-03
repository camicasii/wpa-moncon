import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Tab, Tabs} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import IconIdentity from '../../Assets/svg/IconIdentity';
import IconDocuments from '../../Assets/svg/IconDocuments';
import IconScan from '../../Assets/svg/IconScan';
import IconHistory from '../../Assets/svg/IconHistory';
import IconSettings from '../../Assets/svg/IconSettings';
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
  flexGrow: 1,
    maxWidth: 500,
    top: 'auto',
    bottom: 0,
  },
  tabs: {
    background: '#272727',
    color: '#ffff',
    textTransform: 'none'
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 100,
  },
  tabLabel:{
 textTransform: 'none',
  fontSize: '1.2rem',
  lineHeight: '1.6rem'
  },
  tabScan: {
    background: '#03DAC5'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  offset: theme.mixins.toolbar,
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color='secondary' className={classes.appBar}>
        <Paper square >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            className={classes.tabs}     
            aria-label="icon label tabs example"
          >
            
            <Tab 
              component={Link}
              to="/identity"
              icon={<IconIdentity/>} 
              label={
                <span className={classes.tabLabel}>
                Identity
                </span>
              }
            />
            <Tab 
              component={Link}
              to="/documents"
              icon={<IconDocuments/>} 
              label={
                <span className={classes.tabLabel}>
                  Documents
                </span>
              } 
            />
            <Tab
              component={Link} 
              to="/scan" 
              className={classes.tabScan} 
              icon={<IconScan/>} 
              label={
                <span className={classes.tabLabel}>
                  Scan
                </span>
              } 
            />
            <Tab 
              component={Link} 
              to="/history" 
              icon={<IconHistory/>} 
              label={
                <span className={classes.tabLabel}>
                  History
                </span>
              } 
            />
            <Tab 
              component={Link} 
              to="/settings" 
              icon={<IconSettings/>} 
              label={
                <span className={classes.tabLabel}>
                  Settings
                </span>
              }
            />
          </Tabs>
        </Paper>

      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}
