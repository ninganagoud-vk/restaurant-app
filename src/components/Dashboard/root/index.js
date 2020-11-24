import React, { Component } from 'react';
import './style.css';
import Menu from '../menu';
import { Top } from '../top';
import Features from '../features';
import About from '../about';
import Gallery from '../gallery';

export default class Root extends Component {
    render() {
        return (
            <>
                <Menu />
                <Top />
                <Features />
                <About />
                <Gallery />
            </>
        )
    }

}
