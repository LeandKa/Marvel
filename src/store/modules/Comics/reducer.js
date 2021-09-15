const initialState = {
  comics: [],
  loading: false,
  keySearch: '',
  limit: 0,
  offset: 0,
  total: 0,
  error: '',
};

export default function comics(state = initialState, action) {
  switch (action.type) {
    case '@comics/GET_COMICS':
      return {
        ...state,
        keySearch: '',
        loading: true,
      };
    case '@comics/PAGINATION_COMICS':
      return {
        ...state,
        loading: true,
      };
    case '@comics/SEARCH_COMICS':
      return {
        ...state,
        keySearch: action.payload.keySearch,
        loading: true,
      };
    case '@comics/GET_SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        limit: action.payload.comics.limit,
        offset: action.payload.comics.offset,
        count:
          Math.ceil(
            action.payload.comics.total / action.payload.comics.limit
          ) || 1,
        total: action.payload.comics.total,
        comics: action.payload.comics.results,
      };
    case '@comics/GET_PAGINATION_SUCCESS':
      return {
        ...state,
        loading: false,
        limit: action.payload.comics.limit,
        offset: action.payload.comics.offset,
        total: action.payload.comics.total,
        comics: action.payload.comics.results,
      };
    case '@comics/GET_COMICS_SUCCESS':
      return {
        ...state,
        loading: false,
        limit: action.payload.comics.limit,
        offset: action.payload.comics.offset,
        total: action.payload.comics.total,
        count:
          Math.ceil(
            action.payload.comics.total / action.payload.comics.limit
          ) || 1,
        comics: action.payload.comics.results,
      };
    case '@comics/GET_COMICS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
