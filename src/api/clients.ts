import { clearTokens, getAccessToken, getRefreshToken, setTokens } from "../lib/auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const authHeaders = () => {
  const token = getAccessToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    return null;
  }

  const res = await fetch(`${API_BASE_URL}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({refreshToken})
  })

  if (!res.ok){
    clearTokens();
    return null;
  }

  const data = await res.json();
  setTokens(data.accessToken, data.refreshToken);
  return data.accessToken;
}

export const apiFetch = async (url: string, options: RequestInit = {}) => {
  let res = await fetch(url, {...options, headers: authHeaders()})

  if (res.status === 401){
    const newAccessToken = await refreshAccessToken();
    if(newAccessToken){
      res = await fetch(url, {...options, headers: authHeaders()});
    }
  }

  return res;
}
