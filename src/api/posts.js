import axios from 'axios';

export const getPosts = async () => {
    const response = await axios.get('/api/articles');
    return response.data;
};

export const getPostById = async id => {
    const response = await axios.get(`/api/articles/${id}`);
    return response.data;
};
