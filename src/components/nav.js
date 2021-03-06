import React from 'react';
import styled from 'styled-components';
import Link from './betterLink';
import Facebook from './facebook';
import Instagram from './instagram';
import { graphql, StaticQuery } from 'gatsby';
import { Secondary } from './text';
import LangLink from './langLink';

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

const ChineseLink = ()=>(
    <ItemWrapper>
        <LangLink url='https://cn.petalimn.com'>
            <Text contrast>中文</Text>
        </LangLink>
    </ItemWrapper>
);

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

const Text = styled(Secondary)`
    font-size: 15px;
`;

const BasicOptions = options.map(({name, path},index)=>(
    <ItemWrapper key={index}>
        <Link to={path} key={index} >
            <Text contrast>{name}</Text>
        </Link>
    </ItemWrapper>
));

const Content = ({data})=>(
    <NavWrapper>
        {BasicOptions}
        <ChineseLink />
        <Facebook size='18px' padding='0 10px'/>
        <Instagram size='18px' padding='0 10px'/>
    </NavWrapper>
);

const Nav = ()=>(
    <StaticQuery 
        query={query}
        render={ data => <Content data={data}/>}
    />
);

export default Nav;

const query = graphql`{
    site{
        siteMetadata{
        facebook
        instagram
        }
    }
}`;