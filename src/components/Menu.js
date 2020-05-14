import React from 'react'

import { Link } from 'react-router-dom'

import './styles/Menu.css'
class Menu extends React.Component{

  state = {
    toggle: false,
  }

  toggleMenu(){
    if(this.state.toggle){
      document.getElementById("menuIcon").classList.remove("change")
      document.getElementById("menuList").classList.remove("show")
      this.state.toggle = false
      console.log(this.state.toggle)
    }else{
      document.getElementById("menuIcon").classList.add("change")
      document.getElementById("menuList").classList.add("show")
      this.state.toggle = true
      console.log(this.state.toggle)
    }
  }
  
  render(){
    return(
      <div className="menu">
        <div className="menu__title">
            <h1>KEVIN MALAVER</h1>
        </div>
        <nav className="menu__nav" >
        <div id="menuIcon" className="menu__icon" onClick={()=>this.toggleMenu()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
          <ul className="items" id="menuList">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> 
      </div>
    )
  }
}

export default Menu;