
import React from 'react';
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
            render={data=><Content data={data}/>}
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
    <Secondary
        size='16px'
        padding='15px'
    >
        {children}
    </Secondary>
);

const Content = ({data})=>{
    const {title, subtitle, email, location} = data.site.siteMetadata;

    return(
        <Section padding='40px 0 60px 0'>
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