import { useState } from 'react';
import '../styles/Chatroom.css'

export default function Chatroom() {
    const [inputValue, setInputValue] = useState('');
    const [chat, setChat] = useState([]); // a temp array to represent the sql db
    // a chat box
    // input box
    function handleEnter(event) {
        if (event.key === 'Enter') {
            console.log('Enter key was pressed');
            console.log(inputValue);
            // when enter is pressed, or when button is pressed
            // take value from input, post it, then clear input
            //setInputValue('');
            postValue();
        }
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function postValue() {
        // post value of input text to SQL server
        console.log('Post value');
        // new values go on top of the stack
        const newChat = [inputValue, ...chat];
        setChat(newChat);
        setInputValue('');
    }

    return (
        <div className="Chatroom">
            <div className="ChatBox">
                {
                    chat.map((text, index) =>(
                        <div className="ChatMessage" key={index} dangerouslySetInnerHTML={{__html: text}}/>
                    ))
                }
            </div>
            <div className="InputBox">
                <input type="text" value={inputValue} onChange={handleChange} onKeyDown={handleEnter}/>
                <button>Send</button>
            </div>
        </div>
    );
}