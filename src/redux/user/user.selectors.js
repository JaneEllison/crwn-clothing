import { createSelector } from 'reselect';

const selectUset = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUset],
  (user) => user.currentUser
);
