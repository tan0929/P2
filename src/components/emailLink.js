import * as React from 'react';

const EmailLink = props=>(
    <div onClick={e=>sendTo(props.address)} style={{cursor: 'pointer'}}>
        {props.children}
    </div>
);

function sendTo(address) {
    var link = `mailto:${address}`;
    window.location.href = link;
}

export default EmailLink;