import React from 'react';
import Helmet from 'react-helmet';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

const Widget = styled.div`
    min-width: 320px;
    height: 400px;
    ${breakpoint('tablet')`
        height: 580px;
    `}
`;

const Calendly = ({url})=>(
    <div>
        <Script />
        <Widget
            className="calendly-inline-widget" 
            data-url={url} 
        />
    </div>
);

const Script = ()=>(
    <Helmet>
        <script src='https://assets.calendly.com/assets/external/widget.js'></script>
    </Helmet>
);

export default Calendly;