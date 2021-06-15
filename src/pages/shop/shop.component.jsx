import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collecton/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = (props) => {
  const { match } = props;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const updateCollection = (collectionsMap) =>
    dispatch(updateCollections(collectionsMap));

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
      setLoading(false);
    });
  });

  const renderCollectionsOverviews = (props) => (
    <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
  );

  const renderCollectionPage = (props) => (
    <CollectionPageWithSpinner isLoading={loading} {...props} />
    );

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => renderCollectionsOverviews(props)} />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props)=>renderCollectionPage(props)}
      />
    </div>
  );
};

export default ShopPage;
