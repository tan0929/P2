import styled from 'styled-components';

const Main = styled.p`
    font-family: PlayfairDisplay-Regular;
    display: inline-block;
    color: ${({contrast})=>contrast? '#DDD' : '#2A2C30'};
    font-size: 22px;
    font-weight: 200;
`;

const Secondary = styled.p`
    font-family: Nunito-Light;
    display: inline-block;
    color: ${({contrast})=>contrast? '#DDD' : '#2A2C30'};
    font-size: 16px;
    font-weight: 200;
`;

const HtmlTextWrapper = styled.div`
    font-family: Nunito-Light;
    display: inline-block;
    color: ${({contrast})=>contrast? '#DDD' : '#2A2C30'};
    font-size: 16px;
    font-weight: 200;
`;

export {Main, Secondary, HtmlTextWrapper};
