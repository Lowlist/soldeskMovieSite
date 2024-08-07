import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNotice } from './NoticeApi';

function NoticeCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('noticeTitle', title.trim() !== "" ? title : "");
    formData.append('noticeContent', content.trim() !== "" ? content : "");
    if (image) {
      formData.append('noticeImage', image);
    }

    try {
      await createNotice(formData);
      navigate('/support/notice');
    } catch (error) {
      console.error('Error creating notice:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div>
      <h2>공지사항 추가</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '20px' }}>제목</label>
          <br />
          <input 
            style={{ width: '80%', padding: '10px', boxSizing: 'border-box' }}
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '20px' }}>내용</label>
          <br />
          <textarea
            style={{ width: '80%', height: '400px', padding: '10px', boxSizing: 'border-box', border: '5px solid #ccc', resize: 'none' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '20px' }}>이미지 업로드</label>
          <br />
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default NoticeCreate;