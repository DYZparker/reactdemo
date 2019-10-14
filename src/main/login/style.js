import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    width: 25em;
    height: 30em;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 5em auto;
    background-color: #f5f6f7;
    border: 1px solid #eff1f2;
    border-radius: .5em;
    box-shadow: 0.2em 0.2em 0.5em #ccc;
    text-align: center;
`;

export const Title = styled.div`
    margin: 3em auto;
    font-size: 1.2em;
    font-weight: bolder;
    div {
        display: inline-block;
        padding: .5em;
        margin: 0 1em;
        color: #9fa3a6;
        &.action {
            color: #f56a6a;
            border-bottom: 3px solid #f56a6a;
        }
        : hover {
            border-bottom: 3px solid #f56a6a;
        }
    }
`

export const Input = styled.input`
    display: inline-block;
    font-size: 1em;
    width: 18em;
    height: 2em;
    :first-of-type {
        border: 1px solid #ccc;
        border-bottom-style: none;
        border-top-left-radius: .5em;
        border-top-right-radius: .5em;
    }
    :last-of-type {
        border: 1px solid #ccc;
        border-bottom-left-radius: .5em;
        border-bottom-right-radius: .5em;
    }
`

export const Button = styled.div`
    display: inline-block;
    width: 18em;
    height: 2em;
    line-height: 2em;
    margin: 3em 0;
    border-radius: 1em;
    color: #fff;
    font-weight: bolder;
    background-color: #3194d0
    cursor: pointer;
`

export const Icon = styled.div`
    position: relative;
    display: inline-block;
    width: 16em;
    p {
        color: #b5b5b5;
        font-size: .8em;
        margin-bottom: 2em;
        :before {
            content: '';
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            width: 5em;
            top: .6em;
        }
        :after {
            content: '';
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            width: 5em;
            top: .6em;
            right: 0;
        }
    }
    i {
        font-size: 1.5em;
        margin: .5em;
        :nth-of-type(1) {
            color: #498ad5;
        }
        :nth-of-type(2) {
            color: #00bb29;
        }
        :nth-of-type(3) {
            color: #e05244;
        }
    }
`