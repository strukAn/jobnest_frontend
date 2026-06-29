import api from './axios'

export const getApplications = async (pageSize, pageNumber) => {
   const response = await api.get(`/applications?pageSize=${pageSize}&pageNumber=${pageNumber}`);
   return response.data;
};

export const getApplication = async (id) => {
   const response = await api.get(`/applications/${id}`);
   return response.data;
};

export const getApplicationsByListing = async (pageSize, pageNumber, listingId) => {
   const response = await api.get(`/applications/listings/${listingId}?pageSize=${pageSize}&pageNumber=${pageNumber}`);
   return response.data;
};

export const postApplication = async (listingId, applicationPostDto) => {
    const response =  await api.post(`/applications/listings/${listingId}`, applicationPostDto);
    return response.status;
}


export const putWithdrawApplication = async (id) => { 
    const response =  await api.put(`/applications/${id}/withdraw`);
    return response.status;
};

export const putApplicationStatus = async (id, applicationStatusPutDto) => { 
    const response =  await api.put(`/applications/${id}/status`, applicationStatusPutDto);
    return response.status;
};