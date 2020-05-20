import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import './styles/Home.css'

//images
import imgReact from "../images/react.png"
import imgSass from "../images/sass.png"
import imgHtml from "../images/html.png"
import imgCss  from "../images/css.png"
import imgJs  from "../images/js.png"


class Home extends React.Component{ 

  state = {
    loading: true,
    imgUrls : [
      imgReact,
      imgSass,
      imgHtml,
      imgCss, 
      imgJs
    ]
  }

  render(){
      return(
        <div className="home">
          <div className="hero">
            <div className="text">
                <h1>WELCOME</h1>
                <h1>I AM KEVIN</h1>
            </div>
            <p>TECHS</p>
            <div className="images">
            {this.state.imgUrls.map((value,i)=>{
              return(
                <img key={i} className="image" src={value} alt=""/>
              ) 
            })}
            </div>
            <Link to="/portfolio" className="btn btn-primary" id="goPort">SEE PORTFOLIO</Link>
        </div>
        </div>       
      )
  }
}

export default Home;