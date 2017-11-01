import React from 'react';
import i18n from '../../services/i18n/i18n';
import {
    Link
} from 'react-router-dom'


import Styles from './styles/Menu.scss';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    renderMenuItems(){
        const items = this.props.menuItems.map((menuItem, index) => (
            <div className="menu-item" key={menuItem.name}>
                <Link to={menuItem.link} >{menuItem.name}</Link>
            </div>
        ));

        return items;
    }

    render() {

        return (
            <div className="container-menu col-2">
                <div className="container-logo">

                </div>
                <div className="container-menu-items">
                    {this.renderMenuItems()}
                </div>
                <div>
                    <button onClick={() => { i18n.changeLanguage('en') }}>en</button>
                    <button onClick={() => { i18n.changeLanguage('pl') }}>pl</button>
                </div>
            </div>
        )
    }

}

export default Menu;