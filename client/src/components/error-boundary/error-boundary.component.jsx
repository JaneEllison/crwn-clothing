import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

const ErrorFallback = () => {
  const imageUrl = 'https://i.imgur.com/hkRuanu.png';

  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={imageUrl} />
      <ErrorImageText>Sorry. This Page is Not Real. :(</ErrorImageText>
    </ErrorImageOverlay>
  );
};

export default ErrorFallback;
