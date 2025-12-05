import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53429137-43b45d58ff46365b79c8d2911';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
