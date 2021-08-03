import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Header from './Components/Header'
import { NOT_DISPAY_HEADER_IN, LS_USER_KEY  } from './Const';
import { ContextProvider } from './AppContext';
import './App.css';

const ReactLazyPreload = (importStatement) => {
  const Component = lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};
const EditField = ReactLazyPreload(() => import('./Components/Indentity/Edit/EditField')); 

const EditAdd = ReactLazyPreload(() => import('./Components/Indentity/Edit/Add')); 
const Identity = ReactLazyPreload(() => import('./Components/Indentity/Indentity')); 
const Documents = ReactLazyPreload(() => import('./Components/Documents'));
const History = ReactLazyPreload(() => import('./Components/History'));
const Settings = ReactLazyPreload(() => import('./Components/Settings/Settings'));
const Scan = ReactLazyPreload(() => import('./Components/Scan')); 
const Demo = ReactLazyPreload(() => import('./Components/Documents/Demo/Demo')); 
const EditName = ReactLazyPreload(() => import('./Components/Indentity/Edit/EditName'));
const EditEmail = ReactLazyPreload(() => import('./Components/Indentity/Edit/EditEmail'));
const EditMobile = ReactLazyPreload(() => import('./Components/Indentity/Edit/EditMobile'));
const EditPostal = ReactLazyPreload(() => import('./Components/Indentity/Edit/EditPostal'));
const EditDateBirth = ReactLazyPreload(() => import('./Components/Indentity/Edit/EditDateBirth'));

function App() {

  const location = useLocation();
  const dispatch = useDispatch(); 

  useEffect(() => {
    const lsData = JSON.parse(localStorage.getItem(LS_USER_KEY));
    if(lsData){
      dispatch({
        payload: lsData,
        type: 'load_store_data',
      })
    }
  },[dispatch]);

  return (
 
    <div>
      <Switch>
        <ContextProvider value={{
          EditName,
          EditEmail,
          EditMobile,
          EditPostal,
          EditAdd,
        }}>

          <Route exact path="/identity">
            <Suspense fallback={<div>Loading...</div>}>
              <Identity/>
            </Suspense>
          </Route>
       
          <Route exact path="/identity/edit/name" >
            <Suspense fallback={<div>Loading...</div>}>
              <EditName/>
            </Suspense>
          </Route>
          
          <Route exact path="/identity/edit/email" >
            <Suspense fallback={<div>Loading...</div>}>
              <EditEmail/>
            </Suspense>
          </Route>
          
          <Route exact path="/identity/edit/mobile" >
            <Suspense fallback={<div>Loading...</div>}>
              <EditMobile/>
            </Suspense>
          </Route>
       
          <Route exact path="/identity/edit/postal" >
            <Suspense fallback={<div>Loading...</div>}>
              <EditPostal/>
            </Suspense>
          </Route>

           <Route exact path="/identity/edit/datebirth" >
            <Suspense fallback={<div>Loading...</div>}>
              <EditDateBirth/>
            </Suspense>
          </Route>

          <Route exact path="/identity/add/field" >
            <Suspense fallback={<div>Loading...</div>}>
              <EditAdd/>
            </Suspense>
          </Route>


          <Route exact path="/documents" >
            <Suspense fallback={<div>Loading...</div>}>
              <Documents/>
            </Suspense>
          </Route>

          <Route exact path="/documents/demo" >
            <Suspense fallback={<div>Loading...</div>}>
              <Demo/>
            </Suspense>
          </Route>
       
          <Route exact path="/scan">
            <Suspense fallback={<div>Loading...</div>}>
              <Scan/>
            </Suspense>
          </Route>
       
          <Route exact path="/history" >
            <Suspense fallback={<div>Loading...</div>}>
              <History/>
            </Suspense>
          </Route>
            
          <Route exact path="/settings" >
            <Suspense fallback={<div>Loading...</div>}>
              <Settings/>
            </Suspense>
          </Route>

          <Route path="/identity/edit/field/:fieldId" >
            <Suspense fallback={<div>Loading...</div>}>
              <EditField/>
            </Suspense>
          </Route>
       
        </ContextProvider>
      </Switch>
      
      { (!NOT_DISPAY_HEADER_IN.includes(location.pathname)) && <Header/> }
    </div>
  );
}


export default App;
