import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, id }) => {
  const QUANTITY_ITEMS_ON_PREVIEW = 4;

  const renderedFilteredPreviewItems = items
    .filter((item, idx) => idx < QUANTITY_ITEMS_ON_PREVIEW)
    .map((item) => <CollectionItem key={item.id} item={item} />);
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>{renderedFilteredPreviewItems}</PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
