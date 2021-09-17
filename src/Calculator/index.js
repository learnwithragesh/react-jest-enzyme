import React from 'react';
import { useState } from "react";
import { add, subtract, multiply, divide } from './calculations';

const style = {
    margin: {
        margin: 10
    }
}

export default function Calculator() {

    let [number1, setNumber1] = useState('');
    let [number2, setNumber2] = useState('');
    let [output, setOutput] = useState('');

    return (
        <div>
            <input type="text" placeholder="Number 1" style={style.margin} 
                value={number1} onChange={(e) => setNumber1(e.target.value)}/>
            <br />
            <input type="text" placeholder="Number 2" style={style.margin}
                value={number2} onChange={(e) => setNumber2(e.target.value)}/>
            <br />
            <input type="button" value="Add" style={style.margin}
                onClick={(e) => setOutput(add(number1, number2))}/>
            <input type="button" value="Sub" style={style.margin}
                onClick={(e) => setOutput(subtract(number1, number2))}/>
            <input type="button" value="Mul" style={style.margin}
                onClick={(e) => setOutput(multiply(number1, number2))}/>
            <input type="button" value="Div" style={style.margin}
                onClick={(e) => setOutput(divide(number1, number2))}/>
            <br />
            <h3 style={style.margin}>{output}</h3>
        </div>
    );
}