import React from 'react';

//공지 사항 컴포넌트
function NoticeData({ notices, onNoticeClick }) {
  return (
    <tbody>
      {notices.map(notice => (
        <tr key={notice.noticeNo}>
          <td>{notice.noticeNo}</td>
          <td
            onClick={() => onNoticeClick(notice.noticeNo)}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            {notice.noticeTitle}
          </td>
          <td>{new Date(notice.createdAt).toLocaleDateString()}</td>
          <td>{notice.noticeHit}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default NoticeData;