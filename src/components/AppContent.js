import React from 'react'
import AppLayout from './AppLayout'
import Navigation from './Navigation'

const AppContent = (props) => {
    return (
        <>
            <div className="app-container">
                <Navigation {...props}/>
                <AppLayout  {...props}/>
            </div>
        </>
    )
}

export default AppContent;
