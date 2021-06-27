import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {
  const collectionsData = useSelector(selectCollectionsForPreview);

  const renderedCollectionsData = useMemo(
    () =>
      collectionsData.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      }),
    [collectionsData]
  );

  return (
    <CollectionsOverviewContainer>
      {renderedCollectionsData}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
