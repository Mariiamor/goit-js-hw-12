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

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;
const perPage = 40;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  query = input.value.trim();
  page = 1;
  totalHits = 0;

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      showMessage();
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / perPage);
    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    handleFetchError(error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    smoothScroll();

    const totalPages = Math.ceil(totalHits / perPage);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'End of Results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    handleFetchError(error);
  } finally {
    hideLoader();
  }
});

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');
  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

function handleFetchError(error) {
  console.error('Fetch error:', error);
  hideLoadMoreButton();
  iziToast.error({
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    position: 'topRight',
  });
}
