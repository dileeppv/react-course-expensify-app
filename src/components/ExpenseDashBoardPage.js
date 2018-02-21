import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashBoardPage = () => {
    return(
        <div>
        <ExpenseListFilters />
        <ExpenseList />
       </div>
    );
    
}
 export default ExpenseDashBoardPage;