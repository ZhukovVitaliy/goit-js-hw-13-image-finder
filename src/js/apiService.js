export default class ImageFilterApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const API_KEY = '20426626-1108d2b53bdb59840c18c2bd8';
    const BASE_URL = 'https://pixabay.com/api';

    return fetch(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    )
      .then(r => r.json())
      .then(data => {
        this.page += 1;
        return data.hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
