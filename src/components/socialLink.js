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

const query = graphql`{
    site{
        siteMetadata{
            facebook
            instagram
        }
    }
}`;

const Facebook = ({...props})=> <StaticQuery
    query={query}
    render={data=>(
        <SocialLink 
            icon={FaFacebookF}
            {...props}
            url={data.site.siteMetadata.facebook}
        />
    )}
/>

const Instagram = ({...props})=> <StaticQuery
    query={query}
    render={data=>(
        <SocialLink 
            icon={FaInstagram}
            {...props}
            url={data.site.siteMetadata.instagram}
        />
    )}
/>

export default SocialLink;

export {Facebook, Instagram};