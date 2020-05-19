import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import firebase from "../FirebaseConf"

class Home extends React.Component{ 

  state = {
    loading: true,
    imgUrls : [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ddcf3.appspot.com/o/React.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ddcf3.appspot.com/o/Sass.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ddcf3.appspot.com/o/html5.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ddcf3.appspot.com/o/css3.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ddcf3.appspot.com/o/JS.png?alt=media",
    ]
  }

  render(){
      return(
        <div className="home">
          <div className="hero">
            <div className="text">
                <h1>WELCOME</h1>
                <h1>I AM A</h1>
                <h1>WELCOME</h1>
            </div>
            <p></p>
            <div className="images">
            {this.state.imgUrls.map((value)=>{
              return(
                <img className="image" src={value} alt=""/>
              ) 
            })}
            </div>
            <Link to="/portfolio" className="btn btn-primary" id="goPort">SEE PORTFOLIO</Link>
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