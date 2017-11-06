import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Menu from './Menu/Menu';
import View from './View/View'
//Views
import Main from '../views/Main';
import Form from '../views/Form';
import About from '../views/About';

const views = [
    {name: 'Main', link: '/', component: Main, exact: true},
    {name: 'Form', link: '/form', component: Form, exact: false},
    {name: 'About', link: '/about', component: About, exact: false}
];

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Menu menuItems={views}/>
                    <div className='container-content col-10 offset-2'>
                        {views.map((view) => <View key={view.name} item={view}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter( connect(mapStateToProps)(App) );