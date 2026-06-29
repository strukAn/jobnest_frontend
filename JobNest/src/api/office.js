import api from "./axios";

export async function getOffices(companyId) {
    const response = await api.get(`/offices/${companyId}`);

    return response.data;
}

export async function addOffice(office) {
    const response = await api.post(`/offices`, office);

    return response.status;
}

export async function deleteOffice(officeId) {
    const response = await api.delete(`/offices/${officeId}`);

    return response.status;
}

export async function updateOffice(officeId, office) {
    const response = await api.put(`/offices/${officeId}`, office);

    return response.status;
}