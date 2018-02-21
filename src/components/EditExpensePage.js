import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses';
import {removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/index.html');
    }
    onClick = () => {
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push('/index.html');
    }
    render(){
        return(
            <div>
            <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit}/>
            <button onClick={this.onClick}>Remove</button>
           </div>
        );
    }
} 

// const EditExpensePage = (props) => {
//   // console.log(props);
    
    
// }
const mapDispatchToProps = (dispatch) =>({
    editExpense : (id,updates) => dispatch(editExpense(id,updates)),
    removeExpense : (id) => dispatch(removeExpense(id))
});
const mapStateToProps = (state,props) => {
    return {
     expense:state.expenses.find((expense) => 
     expense.id === props.match.params.id)
     
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);