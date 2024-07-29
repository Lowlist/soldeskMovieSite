import axios from 'axios';

const API_URL = '/support/notice';

export const getNotices = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching notices:', error);
    throw error;
  }
};

export const getNoticeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notice:', error);
    throw error;
  }
};

export const createNotice = async (notice) => {
  try {
    const response = await axios.post(`${API_URL}/write`, notice);
    return response.data;
  } catch (error) {
    console.error('Error creating notice:', error);
    throw error;
  }
};

export const updateNotice = async (id, notice) => {
  try {
    const response = await axios.post(`${API_URL}/modify/${id}`, notice);
    return response.data;
  } catch (error) {
    console.error('Error updating notice:', error);
    throw error;
  }
};

export const deleteNotice = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting notice:', error);
    throw error;
  }
};