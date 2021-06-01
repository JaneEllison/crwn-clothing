import React, { useState } from 'react';

import SHOP_DATA from '../../mock/shop.data';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

const ShopPage = () => {
  const [collectionsData] = useState(SHOP_DATA);
  const renderedCollectionsData = collectionsData.map(({ id, ...otherCollectionProps }) => {
    return <CollectionPreview key={id} {...otherCollectionProps} />
  })

  return (
    <div className='shop-page'>
      {renderedCollectionsData}
    </div>
  );
};

export default ShopPage;
