import SocialLink from './socialLink';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby';

const query = graphql`{
    site{
        siteMetadata{
            instagram
        }
    }
}`;

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

export default Instagram;