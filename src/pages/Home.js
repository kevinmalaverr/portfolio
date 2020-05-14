import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'

import './styles/Home.css'

class Home extends React.Component{ 

  state = {
    imgUrls : [
      "React.png",
      "JS.png",
      "Sass.png"
    ]
  }

  render(){


    const url = ""

    const storage = firebase.storage();
    const urlReact = storage.ref('');

      return(
        <div className="home">
          <div className="hero">
            <div className="text">
                <h1>HELLO, I AM A</h1>
                <h1 className="l2">FRONTEND</h1>
                <h1 className="l3">DEVELOPER</h1>
            </div>
            <div className="images">
            {this.state.imgUrls.map((key)=>{
              return(
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-ddcf3.appspot.com/o/React.png?alt=media" alt=""/>
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