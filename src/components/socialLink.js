import React from 'react';
import Link from './betterLink';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby';


const SocialLink = ({icon, size, padding, url, color})=>{
    const Icon = icon;
    return(
        <Link to={url} blank padding={padding} color={color}>
            <Icon size={size} />
        </Link>
    );
};

export default SocialLink;