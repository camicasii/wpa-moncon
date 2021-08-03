import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    boxSizing: "border-box",
    margin: "0",
    padding: 0,
    position: 'relative',
  },
  proofContainer:{
    background: '#272727',
    padding: '10px 10px 10px 10px',
    borderRadius: '4px',
  },
  documentDetailsContainer:{
    background: '#ffff',
    borderRadius: '4px',
    margin: '10px 50px',
    padding: '10px 10px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

 "@media screen and (max-width: 800px)": {
 margin: '0px 0px',

 },
  },
  proofContainerWhite:{
    background: '#ffff',
borderRadius: '4px',
    margin: '10px 50px',
    padding: '10px 10px',
     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
   display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',
 "@media screen and (max-width: 800px)": {
   margin: '0px 0px',
   display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',    },
  },
  proofTitle:{
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
   color: 'rgba(255, 255, 255, 0.84)',
    marginLeft: '15px',
    paddingTop:'10px',
 "@media screen and (max-width: 800px)": {
      fontSize: '1.4rem',
    lineHeight: '24px',
    letter: '0.15px',
    },

  },
  link:{
  fontSize: '1.7rem',
  lineHeight: '20px',
  color: '#00C4B4 !important',
"@media screen and (max-width: 800px)": {
      fontSize: '1.4rem',
    lineHeight: '20px',
  },
  },
  proofSubtitle:{
  fontWeight: 500,
  fontSize: '1.8rem',
  lineHeight: '24px',
   color: 'rgba(255, 255, 255, 0.84)',
  
    paddingTop:'10px',
 "@media screen and (max-width: 800px)": {
      fontSize: '1.5rem',
    lineHeight: '24px',
    letter: '0.15px',
    },
  },
  issuedSubtitle:{
  fontWeight: 500,
  fontSize: '1.8rem',
  lineHeight: '24px',
  paddingTop:'10px',
 "@media screen and (max-width: 800px)": {
  fontSize: '1.4rem',
  lineHeight: '24px',
  paddingTop:'10px',
    },
  },
  documentsSubtitle:{
  fontWeight: 400,
  fontSize: '1.5rem',
  lineHeight: '20px',
  color: 'rgba(0, 0, 0, 0.6)',
  paddingTop:'10px',
 "@media screen and (max-width: 800px)": {
 fontSize: '1.2rem',
  lineHeight: '16px',

 },
  },
  documentsMessage:{
    fontSize: '1.6rem',
    lineHeight: '24px',
    fontWeight: 400,
  
  },
  warningH1:{
    marginLeft: '15px',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    marginTop: '10px',
    lineHeight: '24px',
    color: 'rgba(255, 255, 255, 0.84)',
 "@media screen and (max-width: 800px)": {
      fontSize: '1.2rem',
    lineHeight: '16px',
    letter: '0.15px',
    },
  },
  warningDemoH1:{
    marginLeft: '15px',
    fontWeight: 'bold',
    fontSize: '1.6rem',
    marginTop: '10px',
    lineHeight: '16px',
    color: 'rgba(255, 255, 255, 0.84)',

  },
  warningDemoP: {
    marginTop: '5px',
     marginBottom: '5px',
    marginLeft: '15px',
    fontWeight: 'normal',
    fontSize: '1.4rem',
    lineHeight: '20px',
    paddingRight: '20px',
    color: 'rgba(255, 255, 255, 0.84)',
  },
  contentPersonal:{
    marginTop: '3px',
 
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',

  },

  warningP: {
    marginTop: '5px',
     marginBottom: '5px',
    marginLeft: '15px',
    fontWeight: 'normal',
    fontSize: '1.6rem',
    lineHeight: '18px',
    paddingRight: '20px',
    color: 'rgba(255, 255, 255, 0.84)',
 "@media screen and (max-width: 800px)": {
      fontSize: '1rem',
    lineHeight: '16px',
    letter: '0.15px',
    },
  },
  titleH1:{
    marginLeft: '15px',
    fontWeight: 500,
    fontSize: '2.1rem',
    lineHeight: '24px',
    marginTop: '40px',
    textAlign:'center',
 "@media screen and (max-width: 800px)": {
 textAlign:'left',
 fontWeight: 400,
      fontSize: '1.6rem',
    lineHeight: '24px',
    letter: '0.15px',
    },
  },
  fab:{
    boxShadow: 'none',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '5px',
    display: 'flex',
  background: '#272727',

  },
  fabWhite:{
    boxShadow: 'none',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '5px',
    display: 'flex',

  },
  contentMenu:{
    background: '#272727',
    display: 'flex',


  },
  contentWarning:{
    marginTop: '15px',
    padding: '12px 10px',
    background: '#F1A008',
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',
    borderRadius: '4px',
  },
  contentWarningDemo:{
      background: '#F1A008',
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',
   
  },
  titleName: {
    color: 'rgba(0, 0, 0, 0,1)',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
  },
  name: {
    fontSize: '1.6rem',
    lineHeight: '24px',
    letter: '0.15px',
  },
  add:{
    color: '#03DAC5',
    fontSize: '1.4rem',
  }
}));

