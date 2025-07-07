import { useState, useEffect, useRef } from 'react'
import axios from 'axios';

function App() {
  const [input, setInput] = useState(""); 
  const [error, setError] = useState(null); 
  const [allMessages, setAllMessages] = useState([]); // chat history 
  const chatBoxRef = useRef(null); // to persist the scrolled value of the chat box accross renders 

  const callAPI = async (e) => {
    e.preventDefault(); 
    const newMessage = { userText: input, botText: '' }; // create a new message object with the user input and the bot input text 
    setAllMessages([...allMessages, newMessage]); // update chat history 

    try {
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        userMessage: input 
      }); 
      const reply = response.data.response;
      newMessage.botText = reply; // update the reply for this message and answer 
      setAllMessages([...allMessages, newMessage]); // update chat history 
    } catch (error) {
      setError("Error communcating with the server, please try again later."); 
    }
    setInput("");   
  }

  
  useEffect(() => {

    // scroll to the bottom of the content when the element renders on the page 
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [allMessages]);  // run whenever messages update



  return (
    <>
      <header className="page-header">
        <h1>AI Revision Questions Maker</h1>
      </header>

    <div className='main-content'>
      <div className="chat-box" ref={chatBoxRef}>

        {/* Only take the 5 most recent messages */}
        {allMessages.slice(-5).map((message, index) => (
          <div key={index}>
            <p><strong>You:</strong> {message.userText}</p>
            <p><strong>AI:</strong> {message.botText}</p>
          </div>
        ))}
      </div>
      <textarea 
      onChange={(e) => setInput(e.target.value)} // set the value of the prompt input
      placeholder='Paste study notes here.. ' 
      rows = {10} 
      cols = {50}></textarea>
    </div>
    <div>
      <button onClick={callAPI}>Get practise questions and answers from OpenAI API</button>
    </div>
    <div>
      {/* Show error message if there is one */}
      { error } 
    </div>
    <footer className="page-footer">
      <p>This app takes your study notes and uses OpenAI to generate quiz questions to help you practice effectively. It is limited to 500 tokens. </p>
    </footer>
    </>
  )
}

export default App
