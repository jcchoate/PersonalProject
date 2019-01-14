import React, { Component } from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'
import './Signin.css'

export default class Signin extends Component {
    constructor() {
        super()
    
        this.state = {
          username: '',
          password: '',
          loggedInUser: {}
        }
      }
      async login(){
        let {username,password}= this.state 
        let res = await axios.post('/auth/login', {username,password})
        this.setState({loggedInUser: res.data})
      }
      async signup(){
        let {username, password} = this.state
        let res = await axios.post('/auth/signup', {username, password})
        this.setState({loggedInUser: res.data})
      }
      async logout(){
        await axios.get('/auth/logout')
        this.setState({loggedInUser: {}})
      }
    render() {
        return (
            <HashRouter>
                <div>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <h1>Sign in for faster checkout</h1>
                    <input className="input" placeholder="Pineapple ID" onChange={(e) => this.setState({ username: e.target.value })}></input>
                    <input className="input" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                    <p>Your Pineapple ID is the email address you use to sign in to uTunes, the Stuff Store, and uCloud.</p>
                    <button className="button" onClick={()=>this.login()}>Sign In</button>
                    <p>Forgot your Pineapple ID or password?</p>
                    <Link to="/register">
                    <p>Don't have a Pineapple ID? Create one now</p>
                    </Link>
                </div>
            </HashRouter>
        )
    }
}
