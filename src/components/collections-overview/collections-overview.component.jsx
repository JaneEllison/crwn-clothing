import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const collectionsData = useSelector(selectCollectionsForPreview);

  const renderedCollectionsData = collectionsData.map(
    ({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    }
  );

  return (
    <div className='collections-overview'>
      {renderedCollectionsData}
    </div>
  );
};

export default CollectionsOverview;
