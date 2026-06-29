import api from './axios'

export const getListings = async (pageSize, pageNumber) => {
   const response = await api.get(`/listings?pageSize=${pageSize}&pageNumber=${pageNumber}`);
   return response.data;
};

export const postListing = async (listingPostDto) => {
    const response =  await api.post(`/listings`, listingPostDto);
    return response.status;
}


export const getListing = async (id) => {
   const response = await api.get(`/listings/${id}`);
   return response.data;
};

export const getCompanyListings = async (companyId, pageSize, pageNumber) => {
   const response = await api.get(`/listings/company/${companyId}?pageSize=${pageSize}&pageNumber=${pageNumber}`);
   return response.data;
};

export const putListing = async (id, listingPutDto) => { 
    const response =  await api.put(`/listings/${id}`, listingPutDto);
    return response.status;
};

export const putListingClose = async (id) => { 
    const response =  await api.put(`/listings/${id}/close`);
    return response.status;
};

