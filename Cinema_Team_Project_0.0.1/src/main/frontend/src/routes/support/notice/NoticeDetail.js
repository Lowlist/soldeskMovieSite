import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from '../style/Support.module.css'; 
import { getNotices, getNoticeById } from './NoticeApi';

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);
  const [allNotices, setAllNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [prevNoticeId, setPrevNoticeId] = useState(null);
  const [nextNoticeId, setNextNoticeId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 전체 공지사항 목록을 가져옴
        const notices = await getNotices();
        setAllNotices(notices);

        // 현재 공지사항을 가져옴
        const currentNotice = await getNoticeById(id);
        setNotice(currentNotice);

        // 현재 공지사항의 인덱스를 찾음
        const index = notices.findIndex(n => n.noticeNo === parseInt(id, 10));

        // 이전 공지사항과 다음 공지사항의 ID를 설정함
        setPrevNoticeId(index > 0 ? notices[index - 1].noticeNo : null);
        setNextNoticeId(index < notices.length - 1 ? notices[index + 1].noticeNo : null);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!notice) return <div>공지사항을 찾을 수 없습니다.</div>;

  const handlePrevClick = () => {
    if (prevNoticeId) {
      navigate(`/support/notice/${prevNoticeId}`);
    }
  };

  const handleNextClick = () => {
    if (nextNoticeId) {
      navigate(`/support/notice/${nextNoticeId}`);
    }
  };

  return (
    <div className={styles.colsDetail}>
      <div className="custom-top">
        <h2>공지사항</h2>
        솔무비의 주요한 이슈 및 여러 가지 소식들을 확인할 수 있습니다.
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
          {notice.noticeImage && (
            <img src={`data:image/jpeg;base64,${notice.noticeImage}`} alt="Notice" className={styles.noticeImage} />
          )}
          <p>{notice.noticeContent}</p>
        </div>
        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            onClick={handlePrevClick}
            disabled={!prevNoticeId}
          >
            이전
          </button>
          <button
            className={styles.paginationButton}
            onClick={handleNextClick}
            disabled={!nextNoticeId}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticeDetail;