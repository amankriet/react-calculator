import React, {useState, useEffect, useRef} from 'react'
import "./App.css"

function App() {
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    function handleClick(e) {
        switch(e.target.innerText) {
            case 'Clear': 
                setResult("");
                break;
            case '␈':
                setResult(result.slice(0,-1));
                break;
            case 'Result':
                try {
                    setResult(eval(result).toString());
                } catch (error) {
                    setResult("Error");
                }
                break;
            default:
                setResult(result.concat(e.target.innerText));
                break;
        }
    }

    return (
        <div className="calc-app">
            <form action="">
                <input type="text" value={result} ref={inputRef} />
            </form>

            <div className="keypad">
                <button onClick={handleClick}>Clear</button>
                <button onClick={handleClick}>&#9224;</button>
                <button onClick={handleClick}>+</button>
                <button onClick={handleClick}>7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button onClick={handleClick}>-</button>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button onClick={handleClick}>&times;</button>
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button onClick={handleClick}>&divide;</button>
                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>.</button>
                <button onClick={handleClick}>Result</button>
            </div>
        </div>
    )
}

export default App
