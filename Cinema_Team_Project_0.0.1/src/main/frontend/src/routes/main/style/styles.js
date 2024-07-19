import styled from 'styled-components';
import arrow from '../../../images/right.png'

export const BodyContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

export const SliderContainer = styled.div`
    margin: 0px 20px;
    .slick-prev:before,
    .slick-next:before {
        display: none;
    }
    .slick-list{ 
        width: 200vw;
        justify-content: space-between;
    }
`

export const NextTo = styled.div`
    background-image: url(${arrow});
    background-size: contain;
    height: 20px;
    width: 20px;
`

export const Prev = styled.div`
    transform: rotate(180deg);
    background-image: url(${arrow});
    background-size: contain;
    height: 20px;
    width: 20px;
`