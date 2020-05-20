import React from 'react'
import firebase from 'firebase'
import firebaseConfig from '../FirebaseConf'
import Loading from '../components/Loading'
import './styles/ProjectPage.css'
import images from '../utils/images'

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
 
    render(){

        if(this.state.loading == true){
            return <Loading></Loading>
        }

        return(
            <div className="projectPage">


                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {images[this.props.match.params.projectId].map((isrc,i)=>{
                            if (i == 0){
                                return(
                                    <div className="carousel-item active">
                                        <img src={isrc} className="d-block w-100" alt="..."/>
                                    </div>
                                )
                            }
                            return(
                                <div className="carousel-item">
                                    <img src={isrc} className="d-block w-100" alt="..."/>
                                </div>
                            )
                        })}

                    </div>
                    
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                



                <h1>{this.state.project.title}</h1>
                <p>{this.state.project.des}</p>
            </div>
        )
    }
}

export default ProjectPage