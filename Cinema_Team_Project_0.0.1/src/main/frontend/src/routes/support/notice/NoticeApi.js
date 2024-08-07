import axios from 'axios';

const API_URL = 'http://localhost:7080/support/notice';

// 공지사항 목록을 가져오는 함수
export const getNotices = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch notices. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching notices:', error);
    throw error;
  }
};

// 특정 공지사항을 ID로 가져오는 함수
export const getNoticeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch notice. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching notice:', error);
    throw error;
  }
};

// 공지사항을 생성하는 함수
export const createNotice = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/write`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Failed to create notice. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error creating notice:', error);
    throw error;
  }
};

// 공지사항을 수정하는 함수
export const updateNotice = async (id, formData) => {
  try {
    const response = await axios.post(`${API_URL}/modify/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to update notice. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error updating notice:', error);
    throw error;
  }
};

// 공지사항을 삭제하는 함수
export const deleteNotice = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to delete notice. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error deleting notice:', error);
    throw error;
  }
};