
import React from 'react';
import styled from 'styled-components';
import { Main, Secondary } from './text';
import { StaticQuery, graphql } from 'gatsby';
import { Facebook, Instagram } from './socialLink';
import Logo from './logo';
import Section from './section';
import EmailLink from '../components/emailLink';

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

const Text = styled(Secondary)`
    display: block;
`;

const Title = styled(Main)``;

const Subtitle = styled(Secondary)`
    padding: 15px;
`;

const Content = ({data})=>{
    const {title, subtitle, email, location} = data.site.siteMetadata;

    return(
        <Section padding='40px 0 60px 0'>
            <div>
                <Subtitle contrast>{subtitle}</Subtitle>
                <Title contrast>{title}</Title>
            </div>
            <Logo />
            <EmailLink address={email}>
                <Text contrast>{email}</Text>
            </EmailLink>
            <Text contrast>{location}</Text>
            <div>
                <Facebook size='22px' padding='20px' />
                <Instagram size='22px' padding='20px' />
            </div>
            <Text>© {new Date().getFullYear()} by {title}</Text>
            
        </Section>
    )
};

export default Footer;