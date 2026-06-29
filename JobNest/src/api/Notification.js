import {useState} from 'react';
import axios from './axios.js';

export const useReport = () => {
    const [error, setError] = useState(null);

    const fetchNotification = async () => {
        setError(null);
        try {
            const response = await axios.get('/api/Notification/GetNotification', {
                    params: {
                    PageNumber: pageNumber,
                    PageSize: pageSize
                }
            });
            return response.data;
        } catch (err) {
            setError(err.message || 'An error occurred while fetching notification data.');
            throw err;
        }
    };

    const createNotification = async (notificationData) => {
        try {
            const response = await axios.post('/api/Notification/PostNotification', notificationData);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while creating notification.');
            throw err;
        }
    };

    return {
        fetchNotification,
        createNotification
    }
}