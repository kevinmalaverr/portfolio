import React from 'react'

import './styles/Project.css'
import Tech from '../components/Tech'
import {Link} from 'react-router-dom'

import Techs from '../utils/Techs'


class Project extends React.Component{
    render(){
        return(
            <div className="project">
                <img className="project__image" src={this.props.image}></img>
                <div className="project__title">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="project__des">
                    <p>{this.props.des}</p>
                </div>
                <div className="project__tech">
                    {this.props.techs.map((tech)=>{
                        console.log(tech.url)
                        return <Tech url={Techs[tech.url]}
                                    name = {tech.name}>
                                </Tech>
                    })}
                </div>
                <div className="project__btn">
                    {this.props.buttons.map(boton=>{
                        return <a href={boton.url} className="btn btn-primary">{boton.name}</a>
                    })}
                    <Link to={`/portfolio/${this.props.id}`} className="btn btn-primary">leer más</Link>
                </div>
            </div>

        )
    }
}

export default Project;