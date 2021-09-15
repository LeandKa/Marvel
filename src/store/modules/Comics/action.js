export function requestComics() {
  return {
    type: '@comics/GET_COMICS',
  };
}

export function getComics(comics) {
  return {
    type: '@comics/GET_COMICS_SUCCESS',
    payload: { comics },
  };
}

export function getComicsFailed(message) {
  return {
    type: '@comics/GET_COMICS_FAILED',
    payload: { message },
  };
}

export function requestPagination(page) {
  return {
    type: '@comics/PAGINATION_COMICS',
    payload: { page },
  };
}

export function getComicsPagination(comics) {
  return {
    type: '@comics/GET_PAGINATION_SUCCESS',
    payload: { comics },
  };
}

export function requestSearch(keySearch) {
  return {
    type: '@comics/SEARCH_COMICS',
    payload: { keySearch },
  };
}

export function getComicsSearch(comics) {
  return {
    type: '@comics/GET_SEARCH_SUCCESS',
    payload: { comics },
  };
}
