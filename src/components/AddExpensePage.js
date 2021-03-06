import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component{
    addExpense = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/index.html');
    }

    render(){
     return(
             <div>
                <h1>ADD EXPENSE</h1>
                <ExpenseForm 
                  onSubmit={this.addExpense}
                />
             </div>
           );
    
      }
}

const mapDispatchToProps = (dispatch) => ({
    
     addExpense: (expense) => dispatch(addExpense(expense))
    
});
export default connect(undefined,mapDispatchToProps)(AddExpensePage);