import React, { useState, useEffect, useRef } from 'react'
import "./App.css"

function App() {
    const [result, setResult] = useState("0");
    const inputRef = useRef(null);
    var allowedChars = ['.', '+', '-', '/', '*'];

    useEffect(() => {
        inputRef.current.focus();
    });

    function handleClick(e) {
        switch (e.target.innerText) {
            case 'AC':
                clear();
                break;
            case '⌫':
                backspace();
                break;
            case '÷':
                division();
                break;
            case '×':
                multiplication();
                break;
            case '=':
                calcResult();
                break;
            default:
                inputText(e.target.innerText);
                break;
        }
        inputRef.current.focus()
    }

    function check(text) {
        if(!Number.isNaN(Number.parseInt(text))) {
            return true;
        } else if(allowedChars.includes(text)) {
            return true;
        } else {
            return false;
        }
    }

    function inputText(text) {
        if(result==='0' && text==='0') {
            clear();
        } else if(result==='0' && text!=='0' && check(text)) {
            if(allowedChars.includes(text)) {
                setResult(result.concat(text));
            } else {
                setResult(text.toString());
            }
        } else if(check(text)) {
            setResult(result.concat(text));
        }
    }

    function calcResult() {
        try {
            let text = (result.toString()).replaceAll(/(?!\D+)0+(?=[1-9])/g, "");
            setResult(Function('"use strict";return ('+text+').toString()')());
        } catch (error) {
            console.error(error);
            setResult("Error");
        }
    }

    function clear() {
        setResult("0");
    }

    function backspace() {
        setResult(result.slice(0, -1));
        if(result.length===1) {
            clear();
        }
    }

    function division() {
        setResult(result.concat("/"));
    }

    function multiplication() {
        setResult(result.concat("*"));;
    }

    function handleUserInput(e) {
        switch (e.key) {
            case 'Enter':
                calcResult();
                break;
            case 'Backspace':
                backspace();
                break;
            default:
                inputText(e.key);
        }
    }

    return (
        <div className="calc-app">
            <input type="text" value={result} ref={inputRef} onChange={handleUserInput} onKeyUp={handleUserInput} />

            <div className="keypad">
                <button className="highlight" id="btn-clear" onClick={handleClick}>AC</button>
                <button className="highlight" id="btn-backspace" onClick={handleClick}>&#9003;</button>
                <button className="highlight" onClick={handleClick}>+</button>
                <button onClick={handleClick}>7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button className="highlight" onClick={handleClick}>-</button>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button className="highlight" onClick={handleClick}>&times;</button>
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button className="highlight" onClick={handleClick}>&divide;</button>
                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>.</button>
                <button className="highlight" id="btn-result" onClick={handleClick}>=</button>
            </div>
        </div>
    )
}

export default App
