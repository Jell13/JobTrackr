import { authHeaders } from "./clients";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const getAllApplications = async () => {

    const res = await fetch(`${API_BASE_URL}/api/applications`, {
        headers: authHeaders()
    })

    if(!res.ok) throw new Error("Failed to fetch applications");
    console.log(res);
    return res.json();
}

export const createApplication = async (data: {
    company: string,
    role: string,
    status: string,
    description: string,
    appliedDate: string
}) => {

    const res = await fetch(`${API_BASE_URL}/api/applications`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(data)
    })

    if(!res.ok) throw new Error("Failed to create application");
    console.log(res);
    return res.json()
}

export const updateApplicationStatus = async (id: number, status: string) => {
     
    const res = await fetch(`${API_BASE_URL}/api/applications/${id}`,{
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({status})
    })

    if(!res.ok) throw new Error("Failed to update application status");
}

export const deleteApplication = async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/api/applications/${id}`,{
        method: "DELETE",
        headers: authHeaders()
    })

    if (!res.ok) throw new Error("Failed to delete the application");
}