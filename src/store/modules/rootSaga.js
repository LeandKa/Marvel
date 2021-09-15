import { all } from 'redux-saga/effects';
import comics from './Comics/saga';

export default function* rootSaga() {
  return yield all([comics]);
}
