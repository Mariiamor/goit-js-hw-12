import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  showLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
  clearGallery,
  showMessage,
} from './js/render-functions';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');
let query = '';
let page = 1;  
let totalHits = 0;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  page = 1;  
  clearGallery();  
  showLoader();  
  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      showMessage();  
    } else {
      createGallery(data.hits);  
      showLoadMoreButton(); 
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});

document.querySelector('.load-more').addEventListener('click', async () => {
  page += 1;  
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'End of Results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
      smoothScroll();  
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});

function smoothScroll() {
  const cardHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,  
    behavior: 'smooth',
  });
}
