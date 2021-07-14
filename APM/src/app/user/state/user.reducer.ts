import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserState } from './user.state';

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const userReducer = createReducer(
  { maskUserName: true },
  on(UserActions.maskUserName, state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
