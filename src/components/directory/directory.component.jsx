import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import SECTIONS_DATA from '../../mock/sections.data'

import './directory.styles.scss';

const Directory = () => {
  const [sections] = useState(SECTIONS_DATA);

  const renderedSections = sections.map(({ id, ...otherSectionProps }) => {
    return <MenuItem key={id} {...otherSectionProps} />
  });

  return (
    <div className='directory-menu'>
      {renderedSections}
    </div>
  );
};

export default Directory;
