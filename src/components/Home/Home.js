import React, { Component } from 'react';
import './Home.css'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import phone from "./../../uPhone XR.png"
import xs from "./../../Xs.png"

class Home extends Component {
    render() {
        return (
            <HashRouter>
                <div className="home-body">
                    <div className="offer-box">
                        <div className="offer-content">
                            <div><p className="limited">Limited Time</p></div>
                            <div className="offer-wrapper">
                                <h2 className="offerh2">uPhone X<span className="smallCaps">R</span> from $449.</h2>
                                <h2 className="offerh2 last">uPhone X<span className="smallCaps">S</span> from $699.</h2>
                                <h3>Trade in your current uPhone and upgrade to a new one.</h3>
                                <div className="offerLink">
                                    <Link className="home-links" to="/uPhone">Buy now ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iphonebox">
                        <h2 className="imageWrapper">
                            <img className="uphonepic" src={phone} />
                        </h2>
                        <div className="infowrap">
                            <p className="uphone-info">
                                All-screen design. Longest battery life ever in a uPhone.
                                Fastest performance. Studio-quality photos.
                            </p>
                            <div className="justlinks">
                                <Link className="home-links" to='/uPhoneXR/info'>Learn more ></Link>
                            </div>
                            <div className="xrwrap">
                                <div className="xrpic"></div>
                            </div>
                        </div>
                    </div>
                    <div className="iphonebox">
                        <h2 className="imageWrapper">
                            <img className="uphonepic" src={xs} />
                        </h2>
                        <div className="infowrap">
                            <p className="uphone-info">
                                Largest Super Retina display. Fastest performance with A12 Bionic.
                                Most secure facial authentication with Face ID.
                                Breakthrough dual cameras with depth control.
                            </p>
                            <div className="justlinks">
                                <Link className="home-links" to='/uPhoneXR/info'>Learn more ></Link>
                            </div>
                            <div className="xrwrap">
                                <img className="xrpic" src="https://www.apple.com/v/home/dz/images/heroes/iphone-xs/iphone_xs_0afef_small_2x.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="shipping-box">
                        <div className="shipping-text-wrap">
                            <div className="stupid">
                                <p className="shipping-text">Free same-day delivery on any in‑stock iPhone in select metro areas, or free next‑business‑day delivery anywhere else.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="offerbox specialbox">
                            <img className="holiday" src="https://www.apple.com/v/home/dz/images/heroes/holiday/holiday_hero_2a_small_2x.jpg"/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Home;