import React from 'react';
import { useParams } from "react-router-dom";
import styles from './style/Support.module.css';

const mockQuestions = [
    { id: 1, title: '질문 1', content: '질문 내용 1', date: '2024-07-05', hit: '0' },
    { id: 2, title: '질문 2', content: '질문 내용 2', date: '2024-07-05', hit: '0' },
    { id: 3, title: '질문 3', content: '질문 내용 3', date: '2024-07-05', hit: '0' },
    { id: 4, title: '질문 4', content: '질문 내용 4', date: '2024-07-05', hit: '0' },
    { id: 5, title: '질문 5', content: '질문 내용 5', date: '2024-07-05', hit: '0' },
    { id: 6, title: '질문 6', content: '질문 내용 6', date: '2024-07-12', hit: '0' },
    { id: 7, title: '질문 7', content: '질문 내용 7', date: '2024-07-12', hit: '0' },
    { id: 8, title: '질문 8', content: '질문 내용 8', date: '2024-07-12', hit: '0' },
    { id: 9, title: '질문 9', content: '질문 내용 9', date: '2024-07-12', hit: '0' },
    { id: 10, title: '질문 10', content: '질문 내용 10', date: '2024-07-12', hit: '0' },
  ];
function QuestionDetail(){
    const {id} = useParams();
    const question = mockQuestions.find(q => q.id === parseInt(id));

    if(!question){
        return(<div>질문을 찾을 수 없습니다.</div>);
    }
    return(
        <div className={styles.colsDetail}>
            <div className="custom-top">
                <h2>질문게시판</h2>
                솔무비의 주요한 이슈 및 여러가지 소식들을 확인 할 수 있습니다.
            </div>
            <div className={styles.boardViewArea}>
                <div className={styles.titleFaq}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>{question.title}</h2>
                        <div className={styles.stitArea}>
                            작성일: <div className={styles.day}>{question.date}</div>
                            <div className={styles.hitArea}>
                                조회수: 
                                <div className={styles.checkHit}>
                                    {question.hit}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.viewArea}>
                    <p>{question.content}</p>
                </div>
                <button>이전</button>
                <button>다음</button>
            </div>
        </div>
    )
}

export default QuestionDetail;