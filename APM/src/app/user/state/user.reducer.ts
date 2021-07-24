import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UserPageActions } from './actions';
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
  on(UserPageActions.maskUserName, state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
