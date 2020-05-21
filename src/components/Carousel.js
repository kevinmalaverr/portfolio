import React from 'react'
import images from '../utils/images'
import './styles/Carousel.css'

function Carousel(props){
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">

      <div className="carousel-inner">

        {images[props.imgId].map((image,i)=>{
          console.log(image)

          if(i == 0){
            return(
              <div className="carousel-item active" key={i}>
                <img src={image} key={i}/>
              </div>
            )
          }

          return(
            <div className="carousel-item" key={i}>
              <img src={image} key={i}/>
            </div>
          )
        })}
        
      </div>

      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  )
}

export default Carousel