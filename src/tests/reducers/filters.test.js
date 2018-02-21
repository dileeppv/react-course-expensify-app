import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values',()=>{
  const state = filtersReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual({
      text:'',
      sortBy:'date',
      startDate:moment().startOf('month'),
      endDate:moment().endOf('month')
  })
});

test('should set sortBy to amount',()=>{
  const state = filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});
  expect(state.sortBy).toBe('amount');
});


test('should set sortBy to date',()=>{
    const currentState = {
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount'
    };
    const action = {type:'SORT_BY_DATE'};
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
  });

  test('should set start date',()=>{
  const currentState = {
text:'',
startDate:moment(0),
endDate:undefined,
sortBy:undefined
  };
  const action = {
                   type:"SET_START_DATE",
                   startDate:moment(100)
                 };
  const state = filtersReducer(currentState,action);
  expect(state.startDate).toEqual(moment(100));               
  });

  test('should set end date',()=>{
    const currentState = {
  text:'',
  startDate:undefined,
  endDate:moment(0),
  sortBy:undefined
    };
    const action = {
                     type:"SET_END_DATE",
                     endDate:moment(100)
                   };
    const state = filtersReducer(currentState,action);
    expect(state.endDate).toEqual(moment(100));               
    });

    test('should setup text filter value',()=>{
      const currentState = {
          text:'e',
          startDate:undefined,
          endDate:undefined,
          sortBy:undefined
      };
      const action = {
                        type:'SET_TEXT_FILTER',
                        text:'p'   
                    }
      const state = filtersReducer(currentState,action);
      expect(state.text).toBe('p');              
    });