import React, { useCallback } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const addRoutesToHistory = useCallback(() => {
    history.push(`${match.url}${linkUrl}`);
  }, [history, linkUrl, match.url]);

  return (
    <MenuItemContainer onClick={addRoutesToHistory}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
