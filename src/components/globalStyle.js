import React from 'react';
import  { createGlobalStyle } from 'styled-components';
import NunitoLight from '../fonts/Nunito-Light.ttf';
import PlayFairDisplayRegular from '../fonts/PlayfairDisplay-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: rgba(0,0,0,0);
        margin: 0;
        padding: 0 !important; /* This !important is a solution for material ui, modal add padding to body bug*/
        overflow: auto !important; /* And this whole line too */
        font-family: sans-serif;
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