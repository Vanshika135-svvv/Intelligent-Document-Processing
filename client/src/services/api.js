import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadDocument = async (file) => {
  try {
    const formData = new FormData();
    formData.append('document', file);

    const response = await apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading document:', error);
    throw error.response?.data || error.message;
  }
};

export const getExtractedData = async (documentId) => {
  try {
    const response = await apiClient.get(`/documents/${documentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching document data:', error);
    throw error.response?.data || error.message;
  }
};

export const askQuestion = async (documentId, question) => {
  try {
    const response = await apiClient.post('/chat', {
      documentId,
      question,
    });
    return response.data;
  } catch (error) {
    console.error('Error querying document:', error);
    throw error.response?.data || error.message;
  }
};

// Fix ESLint import/no-anonymous-default-export warning
const apiService = {
  uploadDocument,
  getExtractedData,
  askQuestion,
};

export default apiService;