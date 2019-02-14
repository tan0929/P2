import React from 'react';
import styled from 'styled-components';
import Link from './betterLink';
import { Facebook, Instagram } from './socialLink';
import { graphql, StaticQuery } from 'gatsby';

const options = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Classes',
        path: '/classes',
    },
    {
        name: 'Gallery',
        path: '/gallery',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

const ItemWrapper = styled.div`
    display: inline-block;
    padding: 10px;
`;

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
`;

const BasicOptions = options.map(({name,path},index)=>(
    <ItemWrapper key={index}>
        <Link to={path} key={index}>
            {name}
        </Link>
    </ItemWrapper>
));


const Nav = ()=>(
    <StaticQuery 
        query={graphql`{
          site{
            siteMetadata{
              facebook
              instagram
            }
          }
        }`}
        render={ data =>(
            <NavWrapper>
                {BasicOptions}
                <Facebook size='20px' padding='0 10px'/>
                <Instagram size='20px' padding='0 10px'/>
            </NavWrapper>
        )}
    />
);

export default Nav;