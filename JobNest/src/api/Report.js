import {useState} from 'react';
import axios from './axios.js';

export const useReport = () => {
    const [error, setError] = useState(null);

const fetchReport = async (pageNumber = 1, pageSize = 10) => {
    setError(null);

    try {
        const response = await axios.get('/api/Report/AllTickets', {
            params: {
                PageNumber: pageNumber,
                PageSize: pageSize
            }
        });
        return response.data;
    } catch (err) {
        setError(err.message || 'An error occurred while fetching report data.');
        throw err;
    }
};

    const createReport = async (reportData) => {
        try {
            const response = await axios.post('/api/Report/CreateTicket', reportData);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while creating report.');
            throw err;
        }
    };

    const declineReport = async (reportId) => {
        try {
            const response = await axios.delete(`/api/Report/Declined/${reportId}`);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while declining report.');
            throw err;
        }
    };

    const approveReport = async (reportId) => {
        try {
            const response = await axios.delete(`/api/Report/Accepted/${reportId}`);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while approving report.');
            throw err;
        }
    };





    return {
        fetchReport,
        createReport,
        declineReport,
        approveReport,
        error
    };
};
