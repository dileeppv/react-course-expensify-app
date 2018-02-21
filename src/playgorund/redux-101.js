import  {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy:incrementBy 
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy:decrementBy
});

const set = ({count = 1} = {}) => ({
    type:'SET',
    count:count
});

const reset = () => ({
    type:'RESET'
});

const countReducer = (state={ count:0 },action)=>{
    switch(action.type){
      case 'INCREMENT':  
                              return {
                                 count: state.count + action.incrementBy
                               };
      case 'DECREMENT': 
                        return {
                                 count: state.count - action.decrementBy
                               };
      case 'SET':      
                        return     {
                                   count:action.count
                                 };             
      case 'RESET': return     {
                                 count: 0
                               };                                
      default: return state;                        

}
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(decrementCount({decrementBy:2}));
store.dispatch(incrementCount({incrementBy:2}));
store.dispatch(set({count:10}));

// unsubscribe();

store.dispatch(reset());

