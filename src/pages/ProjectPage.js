import React from 'react'
import firebase from 'firebase'
import firebaseConfig from '../FirebaseConf'
import Loading from '../components/Loading'
import './styles/ProjectPage.css'
import Carousel from '../components/Carousel'
import Tech from '../components/Tech'
import Techs from '../utils/Techs'


class ProjectPage extends React.Component{

    state = {
        loading:true
    }


    componentDidMount(){
        this.getProjects()
    }

    async getProjects(){
        var self = this
        await firebase.database().ref('projects').child(
            self.props.match.params.projectId
        ).once('value').then(function(snapshot){
            self.state.project = snapshot.val()
        });

        this.setState({loading:false})
    }

    componentWillUpdate(){
        
    }
 
    render(){

        if(this.state.loading == true){
            return <Loading></Loading>
        }

        

        return(
            <div className="projectPage">
               
               <Carousel imgId={this.props.match.params.projectId}></Carousel>

               <div className="project__tech">
                    {this.state.project.techs.map((tech)=>{
                        console.log(tech.url)
                        return <Tech url={Techs[tech.url]}
                                    name = {tech.name}>
                                </Tech>
                    })}
                </div>
                    
                    
                <h1>{this.state.project.title}</h1>
                <p>{this.state.project.des}</p>
                


                <div className="project__btn">
                    {this.state.project.buttons.map(boton=>{
                        return <a href={boton.url} className="btn btn-primary">{boton.name}</a>
                    })}
                </div>

            </div>
        )
    }
}

export default ProjectPage