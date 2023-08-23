import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export const store = configureStore({
  reducer: reducer, //updateStore, {xx,xx,xx}
  //preloadedState: 0,

});
