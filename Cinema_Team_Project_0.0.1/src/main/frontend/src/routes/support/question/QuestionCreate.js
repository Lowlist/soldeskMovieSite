import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createQuestion } from './QuestionApi'; 

function QuestionCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const questionData = {
        questionTitle: title.trim() !== "" ? title : "", // 백엔드와 일치하도록 변경
        questionContent: content.trim() !== "" ? content : "", // 백엔드와 일치하도록 변경
      };
      await createQuestion(questionData);
      navigate('/support/question');
    } catch (error) {
      console.error('Error creating question:', error);
      // 에러 처리 로직 추가 가능
    }
  };

  return (
    <div>
      <h2>질문 추가</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>내용</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
  
export default QuestionCreate;