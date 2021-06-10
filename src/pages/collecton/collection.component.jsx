import React from 'react';
import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const { collectionId } = match.params;
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  const renderedCollectionsItemData = items.map((item) => (
    <CollectionItem key={item.id} item={item} />
  ));
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {renderedCollectionsItemData}
      </div>
    </div>
  );
};

export default CollectionPage;
