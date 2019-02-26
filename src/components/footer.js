
import React from 'react';
import styled from 'styled-components';
import { Main, Secondary } from './text';
import { StaticQuery, graphql } from 'gatsby';
import Facebook from './facebook';
import Instagram from './instagram';
import Logo from './logo';
import Section from './section';
import EmailLink from '../components/emailLink';

const Background = styled(Section)`
    padding: 40px 0 60px 0;
`;

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
        <Background>
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
            <Text contrast>© {new Date().getFullYear()} by {title}</Text>
            
        </Background>
    )
};

const Footer = ()=>(
    <footer>
        <StaticQuery
            query={query}
            render={data=><Content data={data}/>}
        />
    </footer>
);

export default Footer;

const query = graphql`{
    site{
        siteMetadata{
            title
            subtitle
            email
            location
        }
    }
}`;