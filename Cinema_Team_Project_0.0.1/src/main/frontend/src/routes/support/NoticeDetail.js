import React from 'react';
import { useParams } from "react-router-dom";
import styles from './style/Support.module.css';

const mockNotices = [
    { id: 1, title: '공지사항 1', content: '공지사항 내용 1', date: '2024-07-05', hit: '0' },
    { id: 2, title: '공지사항 2', content: '공지사항 내용 2', date: '2024-07-05', hit: '0' },
    { id: 3, title: '공지사항 3', content: '공지사항 내용 3', date: '2024-07-05', hit: '0' },
    { id: 4, title: '공지사항 4', content: '공지사항 내용 4', date: '2024-07-05', hit: '0' },
    { id: 5, title: '공지사항 5', content: '공지사항 내용 5', date: '2024-07-05', hit: '0' },
    { id: 6, title: '공지사항 6', content: '공지사항 내용 6', date: '2024-07-12', hit: '0' },
    { id: 7, title: '공지사항 7', content: '공지사항 내용 7', date: '2024-07-12', hit: '0' },
    { id: 8, title: '공지사항 8', content: '공지사항 내용 8', date: '2024-07-12', hit: '0' },
    { id: 9, title: '공지사항 9', content: '공지사항 내용 9', date: '2024-07-12', hit: '0' },
    { id: 10, title: '공지사항 10', content: '공지사항 내용 10', date: '2024-07-12', hit: '0' },
  ];
function NoticeDetail(){
    const {id} = useParams();
    const notice = mockNotices.find(n => n.id === parseInt(id));
    return(
        <div className={styles.colsDetail}>
            <div className="custom-top">
                <h2>공지사항</h2>
                솔무비의 주요한 이슈 및 여러가지 소식들을 확인 할 수 있습니다.
            </div>
            <div className={styles.boardViewArea}>
                <div className={styles.titleFaq}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>{notice.title}</h2>
                        <div className={styles.stitArea}>
                            작성일: <div className={styles.day}>{notice.date}</div>
                            <div className={styles.hitArea}>
                                조회수: 
                                <div className={styles.checkHit}>
                                    {notice.hit}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.viewArea}>
                    <p>{notice.content}</p>
                </div>
                <button>이전</button>
                <button>다음</button>
            </div>
        </div>
    )
}

export default NoticeDetail;