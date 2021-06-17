import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collecton/collection.component';

const ShopPage = ({match}) => {
  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);

  const dispatch = useDispatch();

  const isCollectionsFetching = useSelector(selectIsCollectionsFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  const fetchCollections = () => dispatch(fetchCollectionsStartAsync());

  useEffect(() => {
    fetchCollections()
  },[]);

  const renderCollectionsOverviews = (props) => (
    <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
  );

  const renderCollectionPage = (props) => (
    <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
  );

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`$match.path}`}
        render={renderCollectionsOverviews}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={renderCollectionPage}
      />
    </div>
  );
};

export default ShopPage;
