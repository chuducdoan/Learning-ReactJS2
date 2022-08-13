import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 3px solid ${props => props.theme.borderColor}
`