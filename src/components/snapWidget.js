
import React from 'react';
import Helmet from 'react-helmet';

const SnapWidget = ()=>(
    <div>
        <Script />
        <iframe 
            title='snapWidget'
            src="https://snapwidget.com/embed/623237" 
            className="snapwidget-widget" 
            allowtransparency="true" 
            frameBorder="0" 
            scrolling="no" 
            style={{border: 'none', overflow: 'hidden', width: '100%'}}
        >
        </iframe>
    </div>
);

const Script = ()=>(
    <Helmet>
        <script src='https://snapwidget.com/js/snapwidget.js'></script>
    </Helmet>
);

export default SnapWidget;

