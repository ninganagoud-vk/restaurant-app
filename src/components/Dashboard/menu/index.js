import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { MenuUnfoldOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const manuList = [{
    name: "Tacos"
},
{
    name: "Beers"
}, {
    name: "Wines"
}, {
    name: "Desserts"
}, {
    name: "Reservations"
},

]

class Menu extends Component {
    state = {
        isToggle: false
    }
    handleClick = () => {
        this.setState(prevState => {
            return { isToggle: !prevState.isToggle }
        }, () => console.log('ewhjbfr', this.state.isToggle))
    }
    render() {
        return (
            <div className="menu">
                <div className={"navbar-toggle-icon"} onClick={this.handleClick}>

                    <Button type="primary" icon={this.state.isToggle ?
                        <CloseOutlined style={{ color: "#d3d3d3", fontSize: '20px' }} />
                        : <MenuUnfoldOutlined style={{ color: "#d3d3d3", fontSize: '20px' }} />
                    }
                        style={{ backgroundColor: 'navy' }}
                    >
                        Menu
    </Button>
                </div>
                <ul className={this.state.isToggle ? "menu-list" : "main-nav-toggle"}>
                    {manuList.map((list) => <Link to={`/${list.name}`} className="menu_link">
                        <li>
                            <a href="/#">{list.name}</a>
                        </li></Link>
                    )}
                </ul>
            </div>
        )
    }
}

export default Menu;