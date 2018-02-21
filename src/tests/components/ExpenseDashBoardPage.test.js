import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';
// import expenses from '../fixtures/expenses';

test('should render expensedashboardpage ',()=>{
const wrapper = shallow(<ExpenseDashBoardPage />);
expect(wrapper).toMatchSnapshot();
});