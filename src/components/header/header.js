import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
    render(){
        return(
            <div>
                <ul>
                    <img class="logo" src="https://image.pngaaa.com/304/1395304-middle.png"/>
                    <a class="name">Stock Influencer</a>
                    <li><a class="active" href="./home">Home</a></li>
                    <li><a href="./trending">Trending</a></li>
                    <li><a href="./description">About</a></li>
                </ul>
            </div>
        )
    }
}