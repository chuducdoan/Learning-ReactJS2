import styled from 'styled-components';

export const Button = styled.button`
    background: linear-gradient(#f74c0b, #ec4736);
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 1;
        &:hover {
            opacity: 0.7;
            transition: all 0.5s;
        }
`

export const SmallButton = styled(Button)`
        background: blue;
        font-size: 0.7rem;
        padding: 0.5rem;
`