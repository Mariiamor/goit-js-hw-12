import axios from 'axios';

export default async function getImagesByQuery(query, page) {
  const options = {
    params: {
      key: '48678129-2163769dcaa82a491114adb07',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,  
    },
  };

  try {
    const response = await axios.get('https://pixabay.com/api/', options);
    return response.data;  
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
