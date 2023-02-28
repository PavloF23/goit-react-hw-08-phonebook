import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 70px;
    align-items: center;
`;

export const Label = styled.label`
    position: relative;
    display: block;
    margin-top: 15px;
    color: #000;
    font-size: 18px;

    & input:focus ~ span, 
    & input:not(:placeholder-shown) ~ span{
        transform: translateX(-10px) translateY(-25px);
        font-size: 10px;
        color: #000;
    }
`;

export const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 2px solid rgba(33, 33, 33, 0.2);
    color: #000;
    outline: none;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:not(:placeholder-shown) {
        border-color: #010101;
        outline-color: rgba(33, 33, 33, 0.5);
      }
`; 

export const Span = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 14px;
    transition: 0.6s;
    color: #5793aad2;
`;