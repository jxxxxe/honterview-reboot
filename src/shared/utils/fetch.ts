const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetch = async (apiUrl: string, options: RequestInit) => {
  const response = await fetch(`${BASE_API_URL}${apiUrl}`, options);

  return response.json();
};
