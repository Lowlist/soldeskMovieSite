import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getQuestions, getQuestionById, addReply } from './QuestionApi';
import styles from '../style/Support.module.css'; 

function QuestionDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [question, setQuestion] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [allQuestions, setAllQuestions] = useState([]);
    const [prevQuestionId, setPrevQuestionId] = useState(null);
    const [nextQuestionId, setNextQuestionId] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // 전체 질문 목록을 가져옴
          const questions = await getQuestions();
          setAllQuestions(questions);
  
          // 현재 질문을 가져옴
          const currentQuestion = await getQuestionById(id);
          setQuestion(currentQuestion);
          setComments(currentQuestion.replies || []);
  
          // 현재 질문의 인덱스를 찾음
          const index = questions.findIndex(q => q.questionNo === parseInt(id, 10));
  
          // 이전 질문과 다음 질문의 ID를 설정함
          setPrevQuestionId(index > 0 ? questions[index - 1].questionNo : null);
          setNextQuestionId(index < questions.length - 1 ? questions[index + 1].questionNo : null);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [id]);
  
    const handleAddComment = async () => {
      if (newComment.trim() !== '') {
        try {
          const addedReply = await addReply(id, { replyContent: newComment });
          setComments([...comments, addedReply]);
          setNewComment('');
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      }
    };
  
    const handlePrevClick = () => {
      if (prevQuestionId) {
        navigate(`/support/question/${prevQuestionId}`);
      }
    };
  
    const handleNextClick = () => {
      if (nextQuestionId) {
        navigate(`/support/question/${nextQuestionId}`);
      }
    };
  
    if (!question) {
      return <div>질문을 찾을 수 없습니다.</div>;
    }
  
    return (
      <div className={styles.colsDetail}>
        <div className="custom-top">
          <h2>질문게시판</h2>
          솔무비의 주요한 이슈 및 여러 가지 소식들을 확인할 수 있습니다.
        </div>
        <div className={styles.boardViewArea}>
          <div className={styles.titleFaq}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{question.questionTitle}</h2>
              <div className={styles.stitArea}>
                작성일: <div className={styles.day}>{new Date(question.createdAt).toLocaleDateString()}</div>
                <div className={styles.hitArea}>
                  조회수:
                  <div className={styles.checkHit}>
                    {question.questionHit}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.viewArea}>
            <p>{question.questionContent}</p>
          </div>
          <div className={styles.commentsSection}>
            <h3>댓글</h3>
            {comments.length > 0 ? (
              <ul className={styles.commentList}>
                {comments.map((comment, index) => (
                  <li key={index} className={styles.commentItem}>
                    <div>{comment.replyContent}</div>
                    <div className={styles.commentDate}>{new Date(comment.createdAt).toLocaleString()}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>댓글이 없습니다.</p>
            )}
            <div className={styles.commentForm}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="댓글을 입력하세요"
                className={styles.commentInput}
              />
              <button onClick={handleAddComment} className={styles.commentButton}>댓글 추가</button>
            </div>
          </div>
          <div className={styles.pagination}>
            <button
              className={styles.paginationButton}
              onClick={handlePrevClick}
              disabled={!prevQuestionId}
            >
              이전
            </button>
            <button
              className={styles.paginationButton}
              onClick={handleNextClick}
              disabled={!nextQuestionId}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    );
}
  
export default QuestionDetail;