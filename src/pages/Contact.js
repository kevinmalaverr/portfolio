import React from 'react'
import './styles/Contact.css'
import firebase from 'firebase'
import Loading from '../components/Loading.js'
import $ from 'jquery'
import { Link } from 'react-router-dom'

class Contact extends React.Component{

  state= {
    form:{
      email: "",
      subject: "",
      description: "",
    },
    loading:false,
    error: undefined,
    success:true
  }

  constructor () {
    super()
    
  }

  componentDidMount(){
    
  }

  writeUserData = async (objeto) => {

    this.setState({loading:true})
    
    try {
      await firebase.database().ref().child("form").push(objeto)
      this.setState({loading:false, error:false, success:true})
      $('#modal').modal('show')
    } catch (e) {
      this.setState({loading:false, error: e })
      console.log(e)
    }
    
    
  }

  handleChange = e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  
  handleSubmit= e => {
    e.preventDefault()
    this.writeUserData(this.state.form) 
  }

  render(){
    
    if(this.state.loading == true){
      return <Loading></Loading>
    }

    if(this.state.error){
      return <h1>Error</h1>
    }

      return(
        <div>
<div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Success</h5>
              </div>
              <div className="modal-body">
                The form has been send
              </div>
              <div className="modal-footer">
                <Link to="/" type="button" className="btn btn-primary" data-dismiss="modal" >Ok</Link>
              </div>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email</label>
            <input onChange={this.handleChange} name="email" type="email" className="form-control" placeholder="name@example.com" value={this.state.form.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Subject</label>
            <input onChange={this.handleChange} name="subject" className="form-control"  placeholder="subject" value={this.state.form.subject}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Messagge</label>
            <textarea onChange={this.handleChange} className="form-control" name="description" id="exampleFormControlTextarea1" rows="5" value={this.state.form.description}></textarea>
          </div>
          <button className="btn btn-primary btn-send" onClick={this.handleClick}>Send</button>
        </form>

        </div>
          
      )
  }
}

export default Contact;