import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collecton/collection.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  const updateCollection = (collectionsMap) =>
    dispatch(updateCollections(collectionsMap));

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
    });
  });

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
