import { apiFetch, authHeaders } from "./clients"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL_DEV = import.meta.env.VITE_API_BASE_URL_DEV;

export const getSponsorshipInsight = async (employerName: string) => {

    const res = await apiFetch(`${API_BASE_URL_DEV}/api/sponsorship/${employerName}`,{
        method: "GET",
        headers: authHeaders()
    })

    if(!res.ok){
        throw new Error("Failed to fetch sponsorship insight")
    }

    return res.json();
}