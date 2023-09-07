import React from 'react';
import { FacebookProvider } from 'react-facebook';

const SetupFacebookProvider = ({ children }) => (
  <FacebookProvider appId="536292400544593">
    {children}
  </FacebookProvider>
);

export default SetupFacebookProvider;
