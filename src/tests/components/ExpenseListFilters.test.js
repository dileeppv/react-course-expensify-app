import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters , altFilters } from '../fixtures/filters';
import moment from 'moment';
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate,wrapper;

beforeEach(()=>{
setTextFilter = jest.fn();
sortByDate = jest.fn();
sortByAmount = jest.fn();
setStartDate = jest.fn();
setEndDate = jest.fn();
wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate = {sortByDate}
      sortByAmount = {sortByAmount}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
    />
 );
});

test('should render expenseListFilters correctly',()=>{
 expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilters with altFilters correctly',()=>{
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
   });

test('should handle text change',()=>{
    const value= 'some text';
  wrapper.find('input').at(0).simulate('change',{target:{value}});
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date',()=>{
    wrapper.setProps({
        filters:altFilters
    });
    const value = 'date';
  wrapper.find('select').simulate('change',{target:{value}});
  expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort bt amount',()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change',{target:{value}});
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date changes',()=>{
wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:moment(0),endDate:moment(0).add(3,'days')});
expect(setStartDate).toHaveBeenLastCalledWith(moment(0));
expect(setEndDate).toHaveBeenLastCalledWith(moment(0).add(3,'days'));
});

test('should handle date focus change',()=>{
    const calendarFocused = 'startDate';
wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});