import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import LanguageButton from './components/LanguageButton';

import Styles from './styles/Menu.scss';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    renderMenuItems() {
        const items = this.props.menuItems.map((menuItem, index) => (
            <li className="nav-item" key={menuItem.name}>
                <NavLink exact className="nav-link" to={menuItem.link}>{menuItem.name}</NavLink>
            </li>
        ));

        return items;
    }

    renderLanguageButtons() {
        return (
            <div>
                <LanguageButton language="pl"/>
                <LanguageButton language="en"/>
            </div>
        )
    }

    render() {

        console.log('activate language: ' + this.props.activeLanguage);

        return (
            <div className="container-menu col-2">
                <div className="container-logo">

                </div>

                <ul className="nav flex-column">
                    {this.renderMenuItems()}
                </ul>

                {this.renderLanguageButtons()}

                <h1>
                    {this.props.activeLanguage}
                </h1>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Menu);