import api from './axios'

export const getReviews = async (companyId, pageSize, pageNumber) => {
   const response = await api.get(`/reviews/companies/${companyId}?pageSize=${pageSize}&pageNumber=${pageNumber}`);
   return response.data;
};


export const getReview = async (id) => {
   const response = await api.get(`/reviews/${id}`);
   return response.data;
};


export const postReview = async (reviewPostDto, companyId) => {
    const response =  await api.post(`/reviews/companies/${companyId}`, reviewPostDto);
    return response.status;
}


export const putReview = async (id, reviewPostDto) => { 
    const response =  await api.put(`/reviews/${id}`);
    return response.status;
};

export const putReviewRemove = async (id) => { 
    const response =  await api.put(`/reviews/${id}/remove`);
    return response.status;
};

exports 

