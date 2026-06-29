import api from "./axios";

export async function getUserTechnologies(userId) {
    const response = await api.get(`/technologies/users/${userId}`);

    return response.data;
}

export async function getListingTechnologies(listingId) {
    const response = await api.get(`/technologies/listings/${listingId}`);

    return response.data;
}

export async function addUserTechnologies(technologyIds) {
    const body = {
        technologyIds
    }
    const response = await api.post(`/technologies/users`, body);

    return response.status;
}

export async function addListingTechnologies(technologyIds) {
    const body = {
        technologyIds
    }
    const response = await api.post(`/technologies/users`, body);

    return response.status;
}

export async function addTechnology(technology) {
    const response = await api.post(`/technologies`, technology);

    return response.status;
}

export async function deleteTechnolgoy(technologyId) {
    const response = await api.delete(`/technologies/${technologyId}`);

    return response.status;
}

export const deleteUserTechnology = deleteTechnolgoy;

export async function deleteListingTechnolgoy(technologyId) {
    const response = await api.delete(`/technologies/listings/${technologyId}`);

    return response.status; 
}

export async function updateTechnology(technologyId, technology) {
    const response = await api.put(`/technologies/${technologyId}`, technology);

    return response.status; 
}