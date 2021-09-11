import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from "@redux-saga/core/effects";
import { increment } from './counterSlice';

export default function* counterSaga() {
    // eslint-disable-next-line no-console
  console.log(increment.toString(), '<----');
  yield takeEvery(increment().type, function* (payload: PayloadAction) {
    console.log('counterSaga', payload)
    yield 1;
  })
}