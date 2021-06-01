import React, { useState } from 'react';

import SHOP_DATA from '../../mock/shop.data';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

const ShopPage = () => {
  const [collectionsData] = useState(SHOP_DATA);

  return (
    <div className='shop-page'>
      {collectionsData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
