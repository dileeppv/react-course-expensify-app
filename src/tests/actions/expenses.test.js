import { addExpense,removeExpense,editExpense } from '../../actions/expenses';

test('should setup remove expense action object',()=>{
  const action = removeExpense({id:'abc'});
  expect(action).toEqual({
      type:'REMOVE_EXPENSE',
      id:'abc'
  });
});

test('should setup edit expense action object',()=>{
    const action = editExpense('abc',{note:''});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'abc',
        updates: {note:''}
    });
});

test('should setup add Expense action object with provided values',()=>{
   const action = addExpense({description:' ',note:'',amount:20,createdAt:0});
   expect(action).toEqual({
  type:'ADD_EXPENSE',
  expense:{
      description:' ',
      note:'',
      amount:20,
      createdAt:0,
      id:expect.any(String)
  }
   }); 
});

test('should setup add expense action object with default values',()=>{
const action = addExpense();
expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        description:'',
        note:'',
        amount:0,
        createdAt:0,
        id:expect.any(String)
    }
})
});