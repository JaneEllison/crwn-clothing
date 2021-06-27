import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ match }) => {
  const { collectionId } = match.params;

  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  const renderedCollectionsItemData = useMemo(
    () => items.map((item) => <CollectionItem key={item.id} item={item} />),
    [items]
  );
  
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {renderedCollectionsItemData}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
