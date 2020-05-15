import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import firebase from "../FirebaseConf"

class Home extends React.Component{ 

  state = {
    imgUrls : [
      firebase.images + "React.png" + "?alt=media",
      firebase.images + "Sass.png" + "?alt=media",
      firebase.images + "html5.png" + "?alt=media",
      firebase.images + "css3.png" + "?alt=media",
      firebase.images + "JS.png" + "?alt=media",
    ]

  }

  render(){
      return(
        <div className="home">
          <div className="hero">
            <div className="text">
                <h1>HELLO, I AM A</h1>
                <h1 className="l2">FRONTEND</h1>
                <h1 className="l3">DEVELOPER</h1>
            </div>
            <div className="images">
            {this.state.imgUrls.map((value)=>{
              return(
                <img className="image" src={value} alt=""/>
              ) 
            })}
            </div>
            <Link to="/portfolio" className="btn-1" id="goPort">SEE PORTFOLIO</Link>
            <div className="social">
                <a href="https://github.com/kevinmalaverr">
                    <div className="icon github-icon"></div>
                </a>
                <a href="https://www.linkedin.com/in/kevinmalaverr">
                    <div className="icon linkedin-icon"></div>
                </a>
                <a href="https://twitter.com/kevinMalaverr">
                    <div className="icon twitter-icon"></div>
                </a>
            </div>
        </div>
        </div>       
      )
  }
}

export default Home;