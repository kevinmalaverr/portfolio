import React from 'react'

import Menu from '../components/Menu'

class Contact extends React.Component{
    render(){
        return(
          <div className="contact">
            <Menu></Menu>
            <form action="">
              <input type="text"/>
            </form>
          </div>
          
        )
    }
}

export default Contact;