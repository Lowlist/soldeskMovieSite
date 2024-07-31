import axios from 'axios';

const API_URL = 'http://localhost:8080/support/question';

export const getQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const getQuestionById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching question:', error);
    throw error;
  }
};

export const createQuestion = async (question) => {
  try {
    const response = await axios.post(`${API_URL}/write`, question);
    return response.data;
  } catch (error) {
    console.error('Error creating question:', error);
    throw error;
  }
};

export const updateQuestion = async (id, question) => {
  try {
    const response = await axios.post(`${API_URL}/modify/${id}`, question);
    return response.data;
  } catch (error) {
    console.error('Error updating question:', error);
    throw error;
  }
};

export const deleteQuestion = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting question:', error);
    throw error;
  }
};

// 댓글 추가하기
export const addReply = async (questionNo, replyData) => {
  try {
    const response = await axios.post(`${API_URL}/${questionNo}/replies`, replyData);
    return response.data;
  } catch (error) {
    console.error('Error adding reply:', error);
    throw error;
  }
};