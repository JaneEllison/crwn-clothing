import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, id }) => (
  <div className='collection-previewv'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <div key={id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
