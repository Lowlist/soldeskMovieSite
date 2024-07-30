package com.team.cinema.support.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.cinema.support.dto.NoticeDTO;
import com.team.cinema.support.entity.NoticeEntity;
import com.team.cinema.support.repository.NoticeRepository;


@Service
public class NoticeSerivce {
    @Autowired
    private NoticeRepository noticeRepository; 

    public List<NoticeDTO> getList() {
        List<NoticeEntity> notices = noticeRepository.findAll();
        return notices.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<NoticeDTO> getSearchList(String keyword) {
        List<NoticeEntity> notices = noticeRepository.findByNoticeTitleContaining(keyword);
        return notices.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public NoticeDTO write(NoticeDTO noticeDTO) {
        NoticeEntity notice = convertToEntity(noticeDTO);
        NoticeEntity savedNotice = noticeRepository.save(notice);
        return convertToDTO(savedNotice);
    }

    public NoticeDTO read(int noticeNo) {
        NoticeEntity notice = noticeRepository.findById(noticeNo)
                .orElseThrow(() -> new RuntimeException("Notice not found"));
        return convertToDTO(notice);
    }

    public void delete(int noticeNo) {
        noticeRepository.deleteById(noticeNo);
    }

    public NoticeDTO modify(int noticeNo, NoticeDTO noticeDTO) {
        NoticeEntity notice = noticeRepository.findById(noticeNo)
                .orElseThrow(() -> new RuntimeException("Notice not found"));
        notice.setNoticeTitle(noticeDTO.getNoticeTitle());
        notice.setNoticeContent(noticeDTO.getNoticeContent());
        notice.setNoticeHit(noticeDTO.getNoticeHit());
        NoticeEntity updatedNotice = noticeRepository.save(notice); 
        return convertToDTO(updatedNotice);
    }

    private NoticeDTO convertToDTO(NoticeEntity notice) {
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setNoticeNo(notice.getNoticeNo());
        noticeDTO.setNoticeTitle(notice.getNoticeTitle());
        noticeDTO.setNoticeContent(notice.getNoticeContent());
        noticeDTO.setNoticeHit(notice.getNoticeHit());
        noticeDTO.setCreatedAt(notice.getCreatedAt());
        noticeDTO.setUpdatedAt(notice.getUpdatedAt());
        return noticeDTO;
    }

    private NoticeEntity convertToEntity(NoticeDTO noticeDTO) {
        NoticeEntity notice = new NoticeEntity();
        notice.setNoticeNo(noticeDTO.getNoticeNo());
        notice.setNoticeTitle(noticeDTO.getNoticeTitle());
        notice.setNoticeContent(noticeDTO.getNoticeContent());
        notice.setNoticeHit(noticeDTO.getNoticeHit());
        notice.setCreatedAt(noticeDTO.getCreatedAt());
        notice.setUpdatedAt(noticeDTO.getUpdatedAt());
        return notice;
    }
}
