import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
 const state = expensesReducer(undefined,{type:'@@INIT'});
 expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
 const action = {
  type:"REMOVE_EXPENSE",
  id:expenses[1].id
 };

 const state = expensesReducer(expenses,action);
 expect(state).toEqual([expenses[0],expenses[2]]);
});


test('should not remove expense by id which is not there',()=>{
    const action = {
     type:"REMOVE_EXPENSE",
     id:'-1'
    };
   
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
   });

test('should add expense',()=>{
const action = {
  type:"ADD_EXPENSE",
  expense:{
  id:'4',
  description:'water bill',
  amount:500,
  note:'some note',
  createdAt:0
  }
};
const state = expensesReducer(expenses,action);
expect(state).toEqual([...expenses,action.expense]);
});

test('should edit expense by id',()=>{
    const action = {
    type:'EDIT_EXPENSE',
    id:'3',
    updates:{
        note:'new note'
    }
    };
    
    const state = expensesReducer(expenses,action);
    expect(state[2].note).toEqual('new note');
    });
 
 
test('should not edit expense by id',()=>{
    const action = {
    type:'EDIT_EXPENSE',
    id:'-1',
    updates:{
        note:'new note'
    }
    };
    
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
    });   