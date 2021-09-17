import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Calculator from '../index';

configure({adapter: new Adapter()});

const calculator = shallow(
    <Calculator />,
);

test('Total 4 Buttons and 2 Inputs', () => {
    expect(calculator.find({ type: 'button' })).toHaveLength(4);
    expect(calculator.find({ type: 'text' })).toHaveLength(2);
});

test('Simulate Input Values', () => {
    calculator.find({ type: 'text', placeholder: 'Number 1' })
        .simulate('change', { target: { value: 10 } });
    calculator.find({ type: 'text', placeholder: 'Number 2' })
        .simulate('change', { target: { value: 20 } });
});

test('Simulate Add Button', () => {
    calculator.find({ type: 'button', value: 'Add'}).simulate('click');
    expect(calculator.find('h3').text()).toBe('30');
});

test('Simulate Sub Button', () => {
    calculator.find({ type: 'button', value: 'Sub'}).simulate('click');
    expect(calculator.find('h3').text()).toBe('-10');
});

test('Simulate Mul Button', () => {
    calculator.find({ type: 'button', value: 'Mul'}).simulate('click');
    expect(calculator.find('h3').text()).toBe('200');
});

test('Simulate Div Button', () => {
    calculator.find({ type: 'button', value: 'Div'}).simulate('click');
    expect(calculator.find('h3').text()).toBe('0.5');
});