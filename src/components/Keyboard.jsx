import { useState, useEffect } from 'react'
import '../keyboardStyles.css';
import '../myJavascript.js';

export function Keyboard({ nextKeyToType }) {

    const [pressedKeys, setPressedKeys] = useState([]);

    useEffect(() => {
        const keydownHandler = (e) => {
            if (e.repeat) return; // keydown event trigger rapidly if you hold the key, we only want to detect keydown once.
            if (e.code === 'Space') {
                e.preventDefault(); //stop scrolling
            }
            setPressedKeys(prevKeys => [...prevKeys, e.key]);
        };

        const keyupHandler = (e) => {
            setPressedKeys(prevKeys => {
                const newKeys = [...prevKeys];
                newKeys.splice(newKeys.indexOf(e.key), 1); //remove it 
                return newKeys;
            });
        };

        window.addEventListener("keydown", keydownHandler);
        window.addEventListener("keyup", keyupHandler);

        return () => {
            window.removeEventListener("keydown", keydownHandler);
            window.removeEventListener("keyup", keyupHandler);
        };
    }, []);


    return (
        <div className="keyboard">
            <div className="keyboard-row">
                {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].map(key => (
                    <div key={key} className={`keyboard-key ${pressedKeys.includes(key) && 'active'} ${nextKeyToType === key ? 'highlighted' : ''}`}>{pressedKeys.includes('Shift') || pressedKeys.includes('Caps Lock') ? key.toUpperCase() : key}</div>
                ))}
            </div>
            <div className="keyboard-row">
                {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'].map(key => (
                    <div key={key} className={`keyboard-key ${pressedKeys.includes(key) && 'active'} ${nextKeyToType.toLowerCase() === key.toLowerCase() ? 'highlighted' : ''}`}>{pressedKeys.includes('Shift') || pressedKeys.includes('Caps Lock') ? key.toUpperCase() : key}</div>
                ))}
            </div>
            <div className="keyboard-row">
                {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"].map(key => (
                    <div key={key} className={`keyboard-key ${pressedKeys.includes(key) && 'active'} ${nextKeyToType.toLowerCase() === key.toLowerCase() ? 'highlighted' : ''}`}>{pressedKeys.includes('Shift') || pressedKeys.includes('Caps Lock') ? key.toUpperCase() : key}</div>
                ))}
            </div>
            <div className="keyboard-row">
                <div className={`keyboard-key shift ${pressedKeys.includes("Shift") && 'active'} ${!(nextKeyToType == nextKeyToType.toLowerCase()) ? 'highlighted' : ''}`}>Shift</div>
                {['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'].map(key => (
                    <div key={key} className={`keyboard-key ${pressedKeys.includes(key) && 'active'} ${nextKeyToType.toLowerCase() === key.toLowerCase() ? 'highlighted' : ''}`}>{pressedKeys.includes('Shift') || pressedKeys.includes('Caps Lock') ? key.toUpperCase() : key}</div>
                ))}
                <div className={`keyboard-key shift ${pressedKeys.includes("Shift") && 'active'} ${!(nextKeyToType == nextKeyToType.toLowerCase()) ? 'highlighted' : ''}`}>Shift</div>
            </div>
            <div className="keyboard-row">
                <div className={`keyboard-key space-bar ${pressedKeys.includes(" ") && 'active'} ${nextKeyToType === " " ? 'highlighted' : ''}`}></div>
            </div>
        </div>
    );
}

export default 10;
