import fetchImages from './js/pixabay-api';
import {
  hideLoader,
  renderImages,
  showLoader,
  showMessage,
  clearGallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = input.value.trim();

  if (!searchText) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();     
  showLoader();       
  input.value = '';   

  iziToast.info({
    message: 'Loading images, please wait...',
    position: 'topRight',
    timeout: 2000,
  });

  fetchImages(searchText)
    .then(response => {
      const images = response.data.hits;

      if (!images.length) {
        showMessage(); 
        return;
      }

      renderImages(images);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Oops! Something went wrong. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
}
