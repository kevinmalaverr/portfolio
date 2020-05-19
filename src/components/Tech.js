import React from 'react'
import './styles/Tech.css'

class Tech extends React.Component{
    render(){
        return(
            <div className="tech">
                <img src={this.props.url} alt=""/>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Tech