import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch, Link,NavLink} from 'react-router-dom';


const Header = () => (
    <header>
    <h1>Expensify</h1>
    <NavLink to='/index.html' activeClassName='is-active' exact={true}>Go home</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
    
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
    );

    export default Header;