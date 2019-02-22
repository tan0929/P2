import React from 'react';
import styled from 'styled-components';

const Border = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: inherit;
    background-color: #DAC6BD;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all .5s ease;
`;

const Label = styled.span`
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 16px;
    color: #BBB;
    font-weight: 500;
    transition: all .2s ease;
`;

const StyledInput = styled.input`
    -webkit-appearance: none;
    width: 100%;
    font-family: Nunito-Light;
    padding: 2px 0;
    height: 40px;
    font-size: 20px;
    font-weight: 500;
    border: 0;
    border-bottom: 1px solid #DDD;
    background: none;
    border-radius: 0;
    color: #DDD;
    transition: all .15s ease;
    :hover{
        background-color: rgba(100,100,100,0.3);
    }
    :not(:placeholder-shown){
        + span{
            transform: translateY(-26px) translateX(-5px) scale(.80);
        }
    }
    :focus{
        background: none;
        outline: none;
        + span{
            color #DAC6BD;
            transform: translateY(-26px) translateX(-5px) scale(.80);
            + span{
                transform: scaleX(1);
            }
        }
    }
`;

const StyledTextarea = styled.textarea`
    -webkit-appearance: none;
    width: 100%;
    min-height: 40px;
    padding: 0;
    margin: 0 0 -4px 0;
    font-family: Nunito-Light;
    font-size: 20px;
    font-weight: 500;
    border: 0;
    border-bottom: 1px solid #DDD;
    background: none;
    border-radius: 0;
    color: #DDD;
    transition: all .15s ease;
    :hover{
        background-color: rgba(100,100,100,0.3);
    }
    :not(:placeholder-shown){
        + span{
            transform: translateY(-30px) translateX(-5px) scale(.80);
        }
    }
    :focus{
        background: none;
        outline: none;
        + span{
            color #DAC6BD;
            transform: translateY(-30px) translateX(-5px) scale(.80);
            + span{
                transform: scaleX(1);
            }
        }
    }
`;

const Wrapper = styled.div`
    position: relative;
    margin: 30px auto;
    width: 100%;
    ${({width})=>width? `max-width: ${width};` : ''}
`;

const Input = ({type, label, required, width, ...props})=>(
    <Wrapper width={width}>
        <StyledInput type={type}  placeholder="&nbsp;" required={required} {...props}/>
        <Label>{label}</Label>
        <Border />
    </Wrapper>
);

const Textarea = ({label, required, cols, rows, maxLength, width, ...props})=>(
    <Wrapper width={width}>
        <StyledTextarea
            maxLength={maxLength}
            cols={cols} 
            rows={rows} 
            placeholder="&nbsp;" 
            required={required}
            {...props}
        />
        <Label>{label}</Label>
        <Border />
    </Wrapper>
);

export { Textarea };

export default Input;