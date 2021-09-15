import { takeLatest, call, put, all, delay, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Api from '../../../services/Api';
import * as selectors from '../../selectors/selectors';
import {
  getComics,
  getComicsPagination,
  getComicsSearch,
  getComicsFailed,
} from './action';

export function* getComicsSaga() {
  try {
    const response = yield call(Api.get, 'comics', {
      params: {
        startYear: 2018,
        orderBy: 'title',
        limit: 12,
      },
    });
    yield delay(2000);
    yield put(getComics(response.data.data));
  } catch (error) {
    toast.error('Erro na solicitação', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(getComicsFailed(error.message));
  }
}

export function* getPaginationSaga({ payload }) {
  try {
    const { page } = payload;
    const comics = yield select(selectors.comics);
    if (comics.keySearch) {
      const response = yield call(Api.get, 'comics', {
        params: {
          startYear: 2018,
          offset: 12 * page - 12,
          orderBy: 'title',
          titleStartsWith: comics.keySearch,
        },
      });
      yield delay(2000);
      yield put(getComicsPagination(response.data.data));
    }
    const response = yield call(Api.get, 'comics', {
      params: {
        startYear: 2018,
        offset: 12 * page - 12,
        orderBy: 'title',
      },
    });
    yield delay(2000);
    yield put(getComicsPagination(response.data.data));
  } catch (error) {
    toast.error('Erro na solicitação', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(getComicsFailed(error.message));
  }
}

export function* getSearchSaga({ payload }) {
  try {
    const { keySearch } = payload;

    const response = yield call(Api.get, 'comics', {
      params: {
        startYear: 2018,
        orderBy: 'title',
        limit: 12,
        titleStartsWith: keySearch,
      },
    });
    yield delay(3000);
    yield put(getComicsSearch(response.data.data));
  } catch (error) {
    toast.error('Erro na solicitação', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(getComicsFailed(error.message));
  }
}

export default all([
  takeLatest('@comics/GET_COMICS', getComicsSaga),
  takeLatest('@comics/PAGINATION_COMICS', getPaginationSaga),
  takeLatest('@comics/SEARCH_COMICS', getSearchSaga),
]);
