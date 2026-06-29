import api from "./axios";

export async function getAllCompanies(pageNumber = 1, pageSize = 10, searchQuery = "") {
    const body = {
        pageNumber,
        pageSize,
        searchQuery
    }

    const response = await api.get("/companies", body);

    return response.data;
}

export async function getCompany(id) {
    const response = await api.get(`/companies/${id}`);

    return response.data;
}

export async function deleteCompany(id) {
    const response = await api.delete(`/companies/${id}`);

    return response.status;
}

export async function updateCompany(id, company) {
    const body = {
        id,
        ...company
    }
    const response = await api.put(`/companies/${id}`, body);

    return response.status;
}

export async function favoriteCompany(id) {
    const response = await api.post(`/companies/${id}/favorite`);

    return response.status;
}

export async function unfavoriteCompany(id) {
    const response = await api.delete(`/companies/${id}/favorite`);

    return response.status;
}