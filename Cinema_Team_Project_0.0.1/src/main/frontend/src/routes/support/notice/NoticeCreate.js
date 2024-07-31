import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNotice } from './NoticeApi';

function NoticeCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNotice({ noticeTitle: title, noticeContent: content });
      navigate('/support/notice');
    } catch (error) {
      console.error('Error creating notice:', error);
    }
  };

  return (
    <div>
      <h2>공지사항 추가</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>내용</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

  export default NoticeCreate;