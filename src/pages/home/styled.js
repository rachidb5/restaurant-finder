import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Container = styled.aside`
    background-color: ${props => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const Carousell = styled(Slider)`
    .slick-slide{
        margin-right: 16px;
    }
`
export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 16px;
`