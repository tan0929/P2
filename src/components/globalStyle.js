import React from 'react';
import  { createGlobalStyle } from 'styled-components';
import NunitoLight from '../fonts/Nunito-Light.ttf';
import PlayFairDisplayRegular from '../fonts/PlayfairDisplay-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #DAC6BD;
        margin: auto;
    }
    @font-face {
      font-family: Nunito-Light;
      src: url(${NunitoLight});
    }
    @font-face {
      font-family: PlayFairDisplay-Regular;
      src: url(${PlayFairDisplayRegular});
    }
`;

export default ()=><GlobalStyle />;