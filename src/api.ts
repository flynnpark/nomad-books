import axios from 'axios';

import { API_BASE_URL } from './constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export async function getBookLists() {
  const { data } = await apiClient.get<GetBookListsResponse>('/lists');
  return data;
}

export async function getBookListDetail(name: string) {
  const { data } = await apiClient.get<GetBookListDetailResponse>('/list', {
    params: {
      name,
    },
  });

  return data;
}
