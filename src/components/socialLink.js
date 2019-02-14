import React from 'react';
import Link from './betterLink';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby';


const SocialLink = ({icon, size, padding, url})=>{
    const Icon = icon;
    return(
        <Link to={url} blank padding={padding}>
            <Icon size={size} />
        </Link>
    );
};

const query = graphql`{
    site{
        siteMetadata{
            facebook
            instagram
        }
    }
}`;

const Facebook = ({size, padding})=> <StaticQuery
    query={query}
    render={data=>(
        <SocialLink 
            icon={FaFacebookF}
            size={size}
            padding={padding}
            url={data.site.siteMetadata.facebook}
        />
    )}
/>

const Instagram = ({size, padding})=> <StaticQuery
    query={query}
    render={data=>(
        <SocialLink 
            icon={FaInstagram}
            size={size}
            padding={padding}
            url={data.site.siteMetadata.instagram}
        />
    )}
/>

export default SocialLink;

export {Facebook, Instagram};