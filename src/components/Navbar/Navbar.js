import React, { Component } from 'react';
import "./Navbar.css"
import shopping from './../../shoppingbag.svg'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import pineapple from "./../../pineapple-01.svg"
import axios from 'axios'
import Card from './../Cart/Card'

class Navbar extends Component {
    constructor() {
        super()


        this.state = {
            changer: false,
            changer2: false,
            items: [],

        }
        this.switch = this.switch.bind(this)
        this.switch2 = this.switch2.bind(this)
        this.switch3 = this.switch3.bind(this)
    }
    switch() {
        let { changer } = this.state
        this.setState({ changer: !changer })
    }
    switch2() {
        this.setState({ changer: false })
    }
    switch3() {
        let { changer2 } = this.state
        this.setState({ changer2: !changer2 })
    }

    componentDidMount() {
        axios.get('/items').then((res) => this.setState({ items: res.data }))
    }

    render() {
        let cards = "Your bag is empty"
        if (this.state.items[0]) {

            cards = this.state.items.map((item) => {
                return (<Card
                    image={item.imageAddress}
                    name={item.name}
                />)
            })
        }
        return (
            <HashRouter>

                <div className={this.state.changer ? "navbar navbar-activated" : "navbar"}>
                    <div className="burger">
                        <div onClick={this.switch} className={this.state.changer ? "bread bread-activated" : "bread"}>
                            <div className={this.state.changer ? "bread-top bread-top-activated" : "bread-top"}></div>
                            <div className={this.state.changer ? "bread-bottom bread-bottom-activated" : "bread-bottom"}></div>
                        </div>
                    </div>

                    <Link to="/">
                        <img onClick={this.switch2} className="pineapple" src={pineapple} alt="pineapple" />
                    </Link>
                    <div className="link-cont">
                    <ul className="menu-full">
                        <Link to='/Pac'>
                        <li>Pac</li>
                        </Link>

                        <Link to='/uPad'>
                        <li>uPad</li>
                        </Link>

                        <Link to='/uPhone'>
                        <li>uPhone</li>
                        </Link>

                        <Link to='/Watch'>
                        <li>Watch</li>
                        </Link>

                        <Link to='/tv'>
                        <li>TV</li>
                        </Link>

                        <Link to='/music'>
                        <li>Music</li>
                        </Link>

                        <Link to='/support'>
                        <li>Support</li>
                        </Link>
                        <ion-icon className="icon icon-full" name="search"></ion-icon>
                    <img onClick={this.switch3} className={this.state.changer ? "bag bag-activated" : "bag"} src={shopping} alt="shopping bag" />
                    </ul>
                    <img onClick={this.switch3} className={this.state.changer ? "bag bag-activated" : "bag bagnew"} src={shopping} alt="shopping bag" />
                    </div>
                    <div className={this.state.changer2 ? "dropmenu dropmenu-active" : "dropmenu"}>
                        {cards}
                        <Link to='/bag'>
                            <button onClick={this.switch3} className="cartcheck">Check Out</button>
                        </Link>
                        <div className="slidelinks">
                        <Link to='/bag'>
                            <div className="linkbox">
                                <img className="bag bagdrop" src={shopping} />
                                <p className="cartchecklink">Bag</p>
                            </div>
                        </Link>
                            <br/>
                            <div className="linkbox">
                                <img src="" />

                                <p className="cartchecklink">Favorites</p>
                            </div>
                            <br/>
                            <div className="linkbox">
                                <img src="" />

                                <p className="cartchecklink">Orders</p>
                            </div>
                            <br/>
                            <div className="linkbox">
                                <img src="" />

                                <p className="cartchecklink">Account</p>
                            </div>
                            <br/>
                            <Link onClick={this.switch3} to ="/sign-in">
                            <div className="linkbox">
                                <img src="" />

                                <p className="cartchecklink">Sign in</p>
                            </div>
                            </Link>
                            <div className="square"></div>
                        </div>
                    </div>
                    <div className={this.state.changer ? "menu" : "menu menu-hidden"}>
                        <div className="search-wrapper">
                            <div className="icon-wrapper">
                                <ion-icon className="icon" name="search"></ion-icon>
                            </div>
                            <input className="search-input" placeholder="Search pineapple.com">
                            </input>
                        </div>
                        <div className="line1"></div>
                        <ul>
                            <Link to="/Pac">
                                <li onClick={this.switch}>Pac</li>
                            </Link>
                            <div className="line2"></div>
                            <Link to="/uPad">
                                <li onClick={this.switch}>uPad</li>
                            </Link>
                            <div className="line2"></div>
                            <Link to="/uPhone">
                                <li onClick={this.switch}>uPhone</li>
                            </Link>
                            <div className="line2"></div>
                            <Link to="/Watch">
                                <li onClick={this.switch}>Watch</li>
                            </Link>
                            <div className="line2"></div>
                            <li onClick={this.switch}>TV</li>
                            <div className="line2"></div>
                            <li onClick={this.switch}>Music</li>
                            <div className="line2"></div>
                            <li onClick={this.switch}>Support</li>
                        </ul>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Navbar;