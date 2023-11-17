import store from '../data/store';

export type AppDispatch = typeof store.dispatch;
export type OrNull<T> = T | null;
