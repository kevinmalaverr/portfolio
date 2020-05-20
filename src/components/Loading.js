import React from 'react'
import './styles/Loading.css'

class Loading extends React.Component{
    render(){
        return(
            <div className="load">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
            
        )
    }
}

export default Loading