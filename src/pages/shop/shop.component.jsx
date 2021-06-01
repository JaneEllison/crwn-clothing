import React, { useState } from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

const ShopPage = () => {
  const [collectionsData] = useState({collections: SHOP_DATA});
  const {collections} = collectionsData;

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
