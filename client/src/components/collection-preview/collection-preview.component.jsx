import React, { useMemo } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const QUANTITY_ITEMS_ON_PREVIEW = 4;

const CollectionPreview = ({ title, items, id }) => {
  const renderedFilteredPreviewItems = useMemo(
    () =>
      items
        .filter((item, idx) => idx < QUANTITY_ITEMS_ON_PREVIEW)
        .map((item) => <CollectionItem key={item.id} item={item} />),
    [items]
  );

  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>{renderedFilteredPreviewItems}</PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
