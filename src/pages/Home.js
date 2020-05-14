import React from 'react'
import Menu from '../components/Menu'

import './styles/Home.css'

class Home extends React.Component{ 

  render(){
      return(
        <div className="home">
          <Menu/>
          <div className="hero">
            <div className="text">
                <h1>HELLO, I AM A</h1>
                <h1 className="l2">FRONTEND</h1>
                <h1 className="l3">DEVELOPER</h1>
            </div>
            <a href="#portfolio" className="btn-1" id="goPort">SEE PORTFOLIO</a>
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