
import React from 'react';
import styled from 'styled-components';
import { Main, Secondary } from './text';
import { StaticQuery, graphql } from 'gatsby';
import { Facebook, Instagram } from './socialLink';
import Logo from './logo';
import Section from './section';

const Footer = ()=>(
    <footer>
        <StaticQuery
            query={graphql`{
                site{
                    siteMetadata{
                        title
                        subtitle
                        email
                        location
                    }
                }
            }`}
            render={data=><Test data={data}/>}
        />
    </footer>
);

const Text = ({children})=>(
    <Secondary 
        size='16px'
        display='block'
    >
        {children}
    </Secondary>
);

const Title = ({children})=>(
    <Main
        size='22px'
    >
        {children}
    </Main>
);

const Subtitle = ({children})=>(
    <Main
        size='16px'
        padding='15px'
    >
        {children}
    </Main>
);

const Test = ({data})=>{
    const {title, subtitle, email, location, facebook, instagram} = data.site.siteMetadata;

    return(
        <Section>
            <div>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{title}</Title>
            </div>
            <Logo />
            <Text>{email}</Text>
            <Text>{location}</Text>
            <div>
                <Facebook size='22px' padding='20px' />
                <Instagram size='22px' padding='20px' />
            </div>
            <Text>© {new Date().getFullYear()} by {title}</Text>
            
        </Section>
    )
};

export default Footer;