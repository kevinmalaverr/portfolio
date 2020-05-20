import React from 'react'
import Menu  from './Menu'

import'./styles/Layout.css'

function Layout(props){
    return(
        <div className="layout">
            <Menu/>
            {props.children}
        </div>
    )
}

export default Layout;