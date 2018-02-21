
const expensesReducerdefaultState = [];

const expensesReducer = (state=expensesReducerdefaultState,action)=>{
 switch(action.type){
    case 'ADD_EXPENSE':
                           fetch('/api/v1/expenses',{
                               method:'POST',
                               headers:{
                                   "Content-Type": "application/json",
                                   "Accept":"application/json",
                                //    "Access-Control-Allow-Origin":"*"
                                
                               },
                               body:JSON.stringify(action.expense)
                           });
                          
                           return [...state,action.expense]; 
    case 'ADD_EXPENSE_DATABASE':return [...state,action.expense]                       
    case 'REMOVE_EXPENSE':  
                          fetch('/api/v1/expenses/'+action.id,{
                              method:'DELETE',
                            //   headers:{
                            //       "Content-Type":"application/json",
                            //       "Accept":"application/json"
                            //   }
                            //   body:action.id
                          });
                           return state.filter(({id})=>id !== action.id);
    case  'EDIT_EXPENSE': 
                         
                              fetch('/api/v1/expenses/'+action.id,{
                                  method:'PUT',
                                  headers:{
                                      "Content-Type":"application/json",
                                      "Accept":"application/json"
                                  },
                                  body:JSON.stringify({id:action.id,...action.updates})
                              })
                               return state.map((expense)=>{
                                if(expense.id === action.id){
                                    return{...expense,...action.updates};
                                     }
                                else{
                                 return expense;
                                    }
                               })
                         
    default:
     return state;
 }
};

export default expensesReducer;