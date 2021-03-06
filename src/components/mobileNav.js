import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import Link from './betterLink';
import { Secondary } from './text';
import Facebook from './facebook';
import Instagram from './instagram';
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
    <LangLink url='https://cn.petalimn.com'>
        <Text>中文</Text>
    </LangLink>
);

const IconWrapper = styled.div`
    margin: 30px 40px 0 0;
`;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 100px 0 0 0;
    width: 200px;
    height: 100%;
    -webkit-tap-highlight-color: transparent;
`;

const StyledDrawer = styled(Drawer)`
    opacity: 0.85;
`;

const SocialWrapper = styled.div`
    margin: 30px 0 0 0;
`;

const Text = styled(Secondary)`
    font-size: 14px;
`;

const BasicOptions = options.map(({name,path},index)=>(
    <Link to={path} key={index}>
        <Text>{name}</Text>
    </Link>
));

const MobileNav = ()=>{
    const [visible,setVisible] = useState(false);
    return(
        <IconWrapper>
            <div onClick={()=>setVisible(true)}>
                <FaBars size ='30px' color='#DDD'/>
            </div>
            <StyledDrawer
                open={visible} 
                onClose={()=>setVisible(false)}
                anchor='right'
            >
                <NavWrapper onClick={()=>setVisible(false)}>
                    {BasicOptions}
                    <ChineseLink />
                    <SocialWrapper>
                        <Facebook size='20px' padding='0 20px 0  0' color='black'/>
                        <Instagram size='20px' color='black'/>
                    </SocialWrapper>
                </NavWrapper>
            </StyledDrawer>
        </IconWrapper>
    );
};

export default MobileNav;