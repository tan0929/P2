import * as React from 'react';

const EmailLink = ({address, children})=>(
    <div onClick={e=>sendTo(address)} style={{cursor: 'pointer'}}>
        {children}
    </div>
);

function sendTo(address) {
    var link = `mailto:${address}`;
    window.location.href = link;
}

export default EmailLink;