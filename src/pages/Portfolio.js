import React from 'react'
import Project from '../components/Project'
import firebase from 'firebase'
import firebaseConfig from '../FirebaseConf'
import Loading from '../components/Loading'
import './styles/Portfolio.css'
import images from '../utils/images'


class Portfolio extends React.Component{

    state = {
        loading:true,
        projects:{}
    }

    constructor(){
        super()
    }
 
    componentDidMount(){
        this.getProjects()
    }

    async getProjects(){
        var self = this
        await firebase.database().ref('projects').once('value').then(function(snapshot){
            self.state.projects = snapshot.val()
            console.log(self.state)
        });
        this.setState({loading:false})
    }

    mapObject = (object,fun) =>{
        const mapArr = [];
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
            const result = fun(object[key],key)
            mapArr.push(result) 
            }
        }
        return mapArr
    }


    render(){
        if(this.state.loading == true){
            return <Loading></Loading>
        }

        return(
            <div className="portfolio">
                
                {this.mapObject(this.state.projects,(project,i) => {
                    console.log(i)
                    return(
                        <Project key={i}
                        id={i}
                        image = {images[i][0]}
                        title = {project.title}
                        des = {project.des}
                        techs = {project.techs}
                        buttons = {project.buttons}
                        ></Project>
                    )
                })      
                }
            </div>
        )
    }
}

export default Portfolio;