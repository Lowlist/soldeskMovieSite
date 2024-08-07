import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createQuestion } from './QuestionApi'; 

function QuestionCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // 이미지 상태 추가

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('questionTitle', title.trim() !== "" ? title : "");
      formData.append('questionContent', content.trim() !== "" ? content : "");
      if (image) {
        formData.append('questionImage', image);
      }
      
      await createQuestion(formData);
      navigate('/support/question');
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h2>질문 추가</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '20px' }}>제목</label>
          <br />
          <input 
            style={{ width: '80%', resize: 'vertical', padding: '10px', boxSizing: 'border-box' }}
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
            style={{ width: '80%', height: '400px', resize: 'vertical', padding: '10px', boxSizing: 'border-box', border: '5px solid #ccc', resize: 'none'}}
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '20px' }}>이미지</label>
          <br />
          <input 
            type="file"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
  
export default QuestionCreate;