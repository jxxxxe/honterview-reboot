const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiFetch = async (apiUrl: string, options?: RequestInit) => {
  const fullUrl = new URL(apiUrl, BASE_API_URL).toString();

  const response = await fetch(fullUrl, options);

  return response.json();
};
