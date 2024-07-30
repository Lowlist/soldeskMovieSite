import styled from 'styled-components';
import arrow from '../../../images/right.png'

export const SliderContainer = styled.div`
    width: 1344px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .slick-prev:before,
    .slick-next:before {
        display: none;
    }
    .slick-initialized {
        width: 90%;
    }
    .slick-slide {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    }
    .slick-list{ 
        width: 100%;
    }
`

export const NextTo = styled.div`
    background-image: url(${arrow});
    background-size: contain;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: ${props => props.hidden ? 'none' : 'block'};
`

export const Prev = styled.div`
    transform: rotate(180deg);
    background-image: url(${arrow});
    background-size: contain;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: ${props => props.hidden ? 'none' : 'block'};
`