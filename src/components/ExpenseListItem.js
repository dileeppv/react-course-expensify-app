import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
import {BrowserRouter,Route, Switch, Link,NavLink} from 'react-router-dom';



 const ExpenseListItem  = ({id,description,amount,createdAt}) => (
 <div>
 <NavLink to={`/edit/${id}`} activeClassName='is-active'><h3>{description}</h3> </NavLink>
  
  <p> Amount: {amount} - createdAt: {createdAt} </p>
  
  
 </div>
);

export default ExpenseListItem;