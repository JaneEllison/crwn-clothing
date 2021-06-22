import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  CustomButtonContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;

  const addNewItem = useCallback(
    () => dispatch(addItem(item)),
    [dispatch, item]
  );

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={addNewItem} inverted>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
