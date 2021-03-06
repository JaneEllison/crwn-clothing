import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  const renderedSections = useMemo(
    () =>
      sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      }),
    [sections]
  );

  return <DirectoryMenuContainer>{renderedSections}</DirectoryMenuContainer>;
};

export default Directory;
