import {useState} from 'react';
import axios from './axios.js';

export const useUser = () => {
    const [error, setError] = useState(null);


    const fetchUser = async () => {
        setError(null);

        try{
            const response = await axios.get('/api/User', {
                params: {
                    PageNumber: pageNumber,
                    PageSize: pageSize
                }
            });
            return response.data;
        } catch (err) {
            setError(err.message || 'An error occurred while fetching user data.');
            throw err; 
        }
    };


        const fetchUserId = async (userId) => {
        setError(null);

        try{
            const response = await axios.get(`/api/User/${userId}`);
            return response.data;
        }catch (err) {
            setError(err.message || 'An error occurred while fetching user data.');
            throw err; 
        }
    };

    const createUser = async (userData) => {
        try{
            const response = await axios.post('/api/User/register', userData);
            return response.data;
        }catch (err) {
            setError(err.message || 'An error occurred while creating user.');
            throw err; 
        }
    };

    const userLogin = async (userData) => {
        try{
            const response = await axios.post('/api/User/login', userData);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while logging in.');
            throw err; 
        }
    };


    const logoutUser = async () => {
        try{
            const response = await axios.post('/api/User/logout');
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while logging out.');
            throw err; 
        }
    };

    const updateUser = async (userId, userData) => {
        try{
            const response = await axios.put(`/api/User/update/${userId}`, userData);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while updating user.');
            throw err; 
        }
    };

    const deleteUser = async (userId) => {
        try{
            const response = await axios.delete(`/api/User/delete/${userId}`);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while deleting user.');
            throw err; 
        }
    };

    const registerCompany = async (companyData) => {
        try{
            const response = await axios.post('/api/register/company', companyData);
            return response.data;
        }
        catch (err) {
            setError(err.message || 'An error occurred while registering company.');
            throw err; 
        }
    };

    return { 
        registerCompany,
        fetchUser,
        fetchUserId,
        createUser,
        userLogin,
        logoutUser,
        updateUser,
        deleteUser,
        error
  };

}
    