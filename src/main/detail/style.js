import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const MainWrapper = styled.div`
    margin: 5em;
`;

export const Introduction = styled.div`
    header {
        color: #3d4449;
        font-size: 1.5em;
        font-weight: bolder;
        padding-bottom: 1em;
        border-bottom: solid 5px #f56a6a;
    }
`;

export const ContantWrap = styled.div`
    margin: 5em 0;
    flex-direction: column;
    h1 {
        color: #3d4449;
        font-size: 2.5em;
        font-weight: bolder;
        line-height: 1.3em;
        margin-bottom: .5em;
    }
    p {
        color: rgb(127, 136, 143);
        font-size: .9em;
        line-height: 1.6em;
    }
`;

export const Img = styled.div`
    height: 15em;
    margin: 2em 0;
    border-radius: 1em;
    background: url(${logoPic}) center no-repeat;
    background-size: contain;
`;
