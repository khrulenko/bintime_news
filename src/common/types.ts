import { CSSObject, Theme } from '@mui/material';
import store from '../data/store';

export type AppDispatch = typeof store.dispatch;
export type EmptyStrOr<T extends string> = T | '';
export type NullOr<T> = T | null;
export type StyleFunction<T> = (arg: { theme: Theme } & T) => CSSObject;
