import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Calculator from './index';

configure({adapter: new Adapter()});

test('Alert Displays on Clicking Add', () => {
    const calculator = shallow(
        <Calculator />,
    );
    expect(calculator.find({ type: 'button' })).toHaveLength(4);
    calculator.find({ type: 'button', value: 'Add'}).simulate('click');
});