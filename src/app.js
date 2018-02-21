import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { addExpense,addExpenseDatabase } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import $ from 'jquery';
const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

var appRoot = document.getElementById('app');

//store.dispatch(addExpense({description:'Water bill',amount:300,createdAt:200}));
//store.dispatch(addExpense({description:'Gas bill',amount:400,createdAt:100}));
//store.dispatch(addExpense({description:'Rent',amount:3000,createdAt:2000}));

// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
// setTimeout(()=>{
//   store.dispatch(setTextFilter('bill'));
// },3000);
$.getJSON("/api/v1/expenses",(data)=>{
    console.log("data",data)
    data.forEach((i)=>{store.dispatch(addExpenseDatabase(i))});
})
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
); 

ReactDOM.render(jsx,appRoot);