import React from 'react'

import './styles/Project.css'

class Project extends React.Component{
    render(){
        return(
            <div className="project">
                <div className="project__image"></div>
                <div className="project__title">
                    <h2></h2>
                </div>
                <div className="project__des">
                    <p></p>
                </div>
                <div className="project__tech">

                </div>
                <div className="project__btn">
                    <a href="" className="btn btn-primary">Web</a>
                    <a href="" className="btn btn-primary">leer más</a>
                </div>
            </div>

        )
    }
}

export default Project;