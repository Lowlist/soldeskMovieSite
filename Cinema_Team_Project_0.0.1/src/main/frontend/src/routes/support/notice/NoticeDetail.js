import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from '../style/Support.module.css'; 
import { getNoticeById } from './NoticeApi';

function NoticeDetail() {
    const { id } = useParams();
    const [notice, setNotice] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const data = await getNoticeById(id);
                setNotice(data); 
                setLoading(false); 
            } catch (err) {
                console.error('Error fetching notice:', err);
                setError(err); 
                setLoading(false); 
            }
        };

        fetchNotice(); 
    }, [id]);

    if (loading) return <div>Loading...</div>; 
    if (error) return <div>Error: {error.message}</div>; 

    if (!notice) return <div>질문이 없습니다.</div>; 

    return (
        <div className={styles.colsDetail}>
            <div className="custom-top">
                <h2>공지사항</h2>
                솔무비의 주요한 이슈 및 여러가지 소식들을 확인할 수 있습니다.
            </div>
            <div className={styles.boardViewArea}>
                <div className={styles.titleFaq}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>{notice.noticeTitle}</h2>
                        <div className={styles.stitArea}>
                            작성일: <div className={styles.day}>{new Date(notice.createdAt).toLocaleDateString()}</div>
                            <div className={styles.hitArea}>
                                조회수: 
                                <div className={styles.checkHit}>
                                    {notice.noticeHit}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.viewArea}>
                    <p>{notice.noticeContent}</p>
                </div>
                <div className={styles.pagination}>
                    <button className={styles.paginationButton}>이전</button>
                    <button className={styles.paginationButton}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeDetail;