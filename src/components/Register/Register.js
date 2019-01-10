import React, { Component } from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'

export default class Register extends Component {
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
                    <p>One Pineapple ID is all you need to access all Pineapple services.</p>
                    <p>Already have a Pineapple ID?</p>
                    <Link to='/sign-in'>
                        <p>Sign in here</p>
                    </Link>
                    <input placeholder="fist name"></input>
                    <input placeholder="last name"></input>
                    <p>COUNTRY/REGION</p>
                    <select>
                        <option value="United States">United States</option>
                        <option value="Russia">Russia</option>
                        <option value="Cuba">Cuba</option>
                    </select>
                    <input placeholder="birthday"></input>
                    <br />
                    <input placeholder="name@example.com" onChange={(e) => this.setState({ username: e.target.value })}></input>
                    <p>This will be your new Pineapple ID.</p>
                    <input placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                    <br />
                    <select>
                        <option value="SSN">What is your SSN?</option>
                        <option value="Credit">What is your credit card number?</option>
                        <option value="License">What is your driver license number?</option>
                    </select>
                    <input placeholder="answer"></input>
                    <button onClick={()=> this.signup()}>Continue</button>
                </div>
            </HashRouter>
        )
    }
}
