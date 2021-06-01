import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, id }) => {
  const renderedFilteredPreviewItems = items
    .filter((item, idx) => idx < 4)
    .map(({ id, ...otherItemProps }) => (
      <CollectionItem key={id} {...otherItemProps} />
    ));
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{renderedFilteredPreviewItems}</div>
    </div>
  );
};

export default CollectionPreview;
