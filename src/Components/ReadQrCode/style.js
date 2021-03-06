import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  previewStyle: {
    top: '0px',
    left: '0px',
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    width: '60%',
    height: '60%',
    objectFit: 'cover',
    background: '#272727 !important',
 zIndex: 0,
     "& div": {
       boxShadow: '#ffff 0px 0px 0px 5px inset !important' 
    },
    "& div:after": {
       boxShadow: '#ffff 0px 0px 0px 5px inset !important' 
    },
 "@media screen and (max-width: 800px)": {
  width: '100%',
    height: '130%',

 },
  },
  contentMenu:{
    background: '#272727 !important',
    display: 'flex !important',
    width: '100% !important',

  },
  contentMenu_2:{
    padding: '20px 20px',
    background: '#343434 !important',
    display: 'flex !important',
    width: '100% !important',
    textAlign: 'center',

  },
fab:{
    boxShadow: 'none !important',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px',
    display: 'flex',
},
  link:{
  fontSize: '14px',
  lineHeight: '20px',
  color: '#00C4B4 !important'
  },
  fabWhite:{
    boxShadow: 'none',
    marginLeft: '14px',
    marginRight: '20px',
    marginTop: '5px',
    display: 'flex',

  },
  titleH1:{
    marginLeft: '15px',
    fontWeight: 400,
    fontSize: '1.6rem',
    lineHeight: '24px',
    marginTop: '40px'
  },
  serviceContainer:{
    background: '#272727',
 padding: '10px 10px',
    borderRadius: '4px',
  },
  ServiceDetailsContainer:{
    background: '#ffff',
     display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',
    borderRadius: '4px',

  },
  serviceContainerWhite:{
    background: '#ffff',
       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
   display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',
    padding: '10px 10px'
  },
  appBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#141414',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1100,
  },
  boxShadow:{
    top: '15vh',
    left: '0px',
    zIndex: 20,
    boxSizing: 'border-box',
    border: '50px solid transparent',
    boxShadow: '#ffff 0px 0px 0px 5px inset',
    position: 'absolute',
    backgroundColor: 'transparent !important',
    width: '100%',
    height: '100%',
    display: 'none',
 "@media screen and (max-width: 800px)": {
  width: '100%',
   display: 'block',
    height: '60%',

 },
  },
  add:{
    color: '#03DAC5',
    fontSize: '1.6rem',
    "@media screen and (max-width: 800px)": {
      fontSize: '1.4rem',
  
    },
  },
contentPersonal:{
    margin: '0px 90px',
    marginTop: '3px',
    background: '#ffff',
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    "@media screen and (max-width: 800px)": {
        margin: '0px 0px',
        marginTop: '3px',
        background: '#ffff',
        display: 'flex',
        textAlign: 'left',
        flexDirection: 'row',
    },
},
  boxtext:{
      alignItems: "center",
          display: "flex",
          justifyContent: "center",
          textAlign: 'center',
          position: "absolute",
          left: 0,
          top: 390,
          padding: '0px 20px',
          right: 0,
          bottom: 0,
          color: '#ffff',
          fontSize: '20px',
          fontWeight: 500,
 zIndex: 20,
  },
  container:{
    top: '0px',
    left: '0px',
    zIndex: 10,
    boxSizing: 'border-box',
    border: '400px solid rgba(0, 0, 0, 0.3)',
 
    position: 'absolute',
    backgroundColor: 'transparent !important',
    width: '100%',
    height: '120%',
    display: 'none',
 "@media screen and (max-width: 800px)": {
  width: '100%',
   display: 'block',
    height: '120%',
   
  }},
  serviceSubtitleBlack:{
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
  paddingTop:'10px',

  },
  textField: {
    marginTop: theme.spacing(4),
  },
  serviceTitle:{
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
   color: 'rgba(255, 255, 255, 0.84)',
    marginLeft: '15px',
    paddingTop:'10px',
flexGrow: 1
  },
  contentService:{
    marginTop: '3px',
    paddingBottom: '10px',
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',

  },
  serviceSubtitle:{
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
   color: 'rgba(255, 255, 255, 0.84)',
  
    paddingTop:'4px',

  },
buttonBlue: {
    margin: "30px 0px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 600,
    padding: "12px 51px 14px",
    background: "#03DAC5",
    color: "#fff",
    cursor: "pointer",
'&:hover': {
  opacity: '.8',
            boxShadow: 'none',
          },
  },
buttonBlack: {
    margin: "30px 10px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 600,
    padding: "12px 41px 14px",
    background: "#141414",
    color: "#fff",
    cursor: "pointer",
    border: '2px solid #fff !important',
'&:hover': {
  opacity: '.8',
            boxShadow: 'none',
          },
  },
icon: {
    borderRadius: '9999px',
    width: 20,
    height: 20,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
titleName: {
    color: 'rgba(0, 0, 0, 0,1)',
    fontWeight: 400,
    fontSize: '1.6rem',
    lineHeight: '16px',
},
name: {
    fontSize: '2.1rem',
    lineHeight: '24px',
    letter: '0.15px',
    fontWeight: 400,
    wordBreak: 'break-all',
    color: 'black !important',
    "@media screen and (max-width: 800px)": {
        fontSize: '1.6rem',
        lineHeight: '24px',
        letter: '0.15px',
    },
},

  checkedIcon: {
    backgroundColor: '#00C4B4',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#00C4B4',
    },
  },
}));

