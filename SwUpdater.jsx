import React from 'react'
import './index.css'
import RefreshIcon from '@material-ui/icons/Refresh';


const SwUpdater = () => (
  <div className="notification-wrapper">
    <p>Tiene una actualización disponible.</p>
    <div className="icon-wrapper">
      <RefreshIcon onClick={() => window.location.reload()} />
    </div>
  </div>
)

export default SwUpdater
