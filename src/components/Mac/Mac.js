import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from "react-router-dom";

class Mac extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div>
                        <ul>
                            <li>
                                <Link to='/PacBook'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/PacBookAir'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/PacBookPro'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/iPac'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/iPacPro'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/PacPro'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Pacmini'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Accessories'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Gobi'>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Compare'>
                                </Link>
                            </li>
                        </ul>
                        <div>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Mac;
