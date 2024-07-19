import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './style/Support.module.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

function RealtimeQuestion(){
  let navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: inputMessage }]);
      setInputMessage('');
      // 여기에 서버로 메시지를 전송하는 로직을 추가할 수 있습니다.
    }
  };

  return (
    <div className={styles.chatContainer}>
      <h2>실시간 문의 페이지</h2>
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.chatInputContainer}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
          className={styles.chatInput}
        />
        <button onClick={handleSendMessage} className={styles.chatSendButton}>
          전송
        </button>
      </div>
    </div>
  )
}

export default RealtimeQuestion;