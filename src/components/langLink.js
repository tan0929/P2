import React from 'react';
import Link from '../components/betterLink';

const LangLink = ({url, children})=>(
    <Link to={url+window.location.pathname}>
        {children}
    </Link>
);


export default LangLink;