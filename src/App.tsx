import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import List from "./List";

const data = localStorage.getItem("messages");
export interface IMessage {
  message: string;
  id: number;
}
const App = () => {
  const [messages, setMessages] = useState<IMessage[]>(
    data ? JSON.parse(data) : []
  );
  const [message, setMessage] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
    if (divRef.current) {
      if (divRef.current.scrollHeight > 0) {
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }
    }
  }, [messages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };
  const handleClick = (): void => {
    let newMessage = {
      message,
      id: Date.now() + Math.random(),
    };
    let newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setMessage("");
  };
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      let newMessage = {
        message,
        id: Date.now() + Math.random(),
      };
      let newMessages = [...messages, newMessage];
      setMessages(newMessages);
      setMessage("");
    }
  };
  const deleteMessage = (id: number): void => {
    let newMessages = messages.filter((message) => message.id !== id);
    setMessages(newMessages);
  };
  return (
    <div className="app">
      <div className="chat_body" ref={divRef}>
        <List messages={messages} deleteMessage={deleteMessage} />
      </div>
      <div className="inputs">
        <input
          onKeyUp={handleKey}
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type here"
          autoFocus
        />
        <button disabled={message === "" ? true : false} onClick={handleClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
