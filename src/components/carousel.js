import React from 'react';
import styled from 'styled-components';
import Slider from 'nuka-carousel';
import Img from 'gatsby-image';

const Image = styled(Img)`
    cursor: grab;
    width: 100%;
    height: 400px;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    height: 400px;
    max-width: 800px;
    width: 100vw;
`;

const SlideButton = styled.div`
    cursor: pointer;
    background-image: linear-gradient(
        ${({left})=> left ? `to left`: `to right`}, 
        rgba(0,0,0,0) , rgba(0,0,0,0.5)
    );
    height: 400px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
`;

const ButtonIcon = styled.div`
    color: #DDD;
    font-size: 35px;
    transform: scaleY(2);
`;

const Carousel = ({images})=>{
    return(
        <Wrapper>
            <Slider
                renderCenterLeftControls={({previousSlide})=>(
                    <SlideButton left onClick={previousSlide}><ButtonIcon>{`<`}</ButtonIcon></SlideButton>
                )}
                renderCenterRightControls={({nextSlide})=>(
                    <SlideButton onClick={nextSlide}><ButtonIcon>{`>`}</ButtonIcon></SlideButton>
                )}
                autoplay 
                autoplayInterval={8 * 1000} 
                pauseOnHover 
                swiping 
                cellSpacing={5} 
                wrapAround
            >
                {
                    images.map(({node},index)=>
                        <ImageWrapper key={index}>
                            <Image fluid={node.childImageSharp.fluid} />
                        </ImageWrapper>
                    )
                }
            </Slider>
        </Wrapper>
    );
}

export default Carousel;