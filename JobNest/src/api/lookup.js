import api from './axios'

export const getCities = async () => {
   const response = await api.get(`/cities`);
   return response.data;
};

export const getSeniorities = async () => {
   const response = await api.get(`/seniorities`);
   return response.data;
};

export const getTechnologies = async () => {
   const response = await api.get(`/technologies`);
   return response.data;
};

export const getDomains = async () => {
   const response = await api.get(`/domains`);
   return response.data;
};

export const getApplicationStatuses = async () => {
   const response = await api.get(`/applicationStatus`);
   return response.data;
};