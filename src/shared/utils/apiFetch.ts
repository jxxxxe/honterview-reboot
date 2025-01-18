'use server';

import { headers } from 'next/headers';

const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiFetch = async (apiUrl: string, options?: RequestInit) => {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const fullUrl = new URL(apiUrl, `${protocol}://${host}/`).toString();
  console.log(fullUrl);

  const response = await fetch(fullUrl, options);

  return response.json();
};
