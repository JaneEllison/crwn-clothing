import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

import collectionId from '../../mock/collection-id.data';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === collectionId[collectionUrlParam]
    )
  )
);
