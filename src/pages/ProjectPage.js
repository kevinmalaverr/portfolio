import React from 'react'
import firebase from 'firebase'
import firebaseConfig from '../FirebaseConf'
import Loading from '../components/Loading'
import './styles/ProjectPage.css'

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
            <div>
                
                <h1>{this.state.project.title}</h1>
                <p>{this.state.project.des}</p>
                <img src={this.state.project.image} alt=""/>
            </div>
        )
    }
}

export default ProjectPage