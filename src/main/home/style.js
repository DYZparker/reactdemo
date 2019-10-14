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
    display: flex;
`;

export const Img = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    width: 50%;
    margin-left: 4em;
    border-radius: 1em;
    background: url(${logoPic}) center no-repeat;
    background-size: contain;
`;

export const Contant = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    width: 50%;
    h1 {
        color: #3d4449;
        font-size: 3em;
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

export const Summary = styled.div`
    border-top: solid 2px rgba(210, 215, 217, 0.75);
    header {
        margin-top: 5em;
        p{
            display: inline-block;
            color: #3d4449;
            font-size: 1.5em;
            font-weight: bolder;
            padding: 0 1em 1em 0;
            border-bottom: solid 5px #f56a6a;
        }
    }
`;

export const Sumbody = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3em;
`;

export const Sumarticle = styled.div`
    display: flex;
    width: 45%;
    align-items: center;
    margin: 5% 5% 2% 0;
    div {
        width: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        h3 {
            color: #3d4449;
            font-size: 1.3em;
            font-weight: bolder;
            margin-bottom: 1em;
        }
        p {
            color: #7f888f;
            font-size: .9em;
            line-height: 1.5em;
        }
    }
    span {
        flex-grow: 0;
        flex-shrink: 0;
        display: inline-block;
        width: 6em;
        height: 6em;
        text-align: center;
        line-height: 6em;
        margin: 0 3em;
        position: relative;
        i {
            color: #f56a6a;
            font-size: 4em;
            :before {
                content: '';
                width: 100%;
                height: 100%;
                margin-left: -.3em;
                border: solid 2px rgba(210, 215, 217, 0.75);
                position: absolute;
                transform-origin: center;
                transform: rotate(45deg);
        }
    }
`;

export const Picture = styled.div`
    border-top: solid 2px rgba(210, 215, 217, 0.75);
    header {
        margin-top: 5em;
        p{
            display: inline-block;
            color: #3d4449;
            font-size: 1.5em;
            font-weight: bolder;
            padding: 0 1em 1em 0;
            border-bottom: solid 5px #f56a6a;
        }
    }
`;

export const Picbody = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3em;
`;

export const Picarticle = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 25em;
    align-items: center;
    margin: 5% 5% 2% 0;
    div {
        width: 90%;
        flex-grow: 1;
        flex-shrink: 1;
        h3 {
            color: #3d4449;
            font-size: 1.3em;
            font-weight: bolder;
            margin-bottom: 1em;
        }
        p {
            color: #7f888f;
            font-size: .9em;
            line-height: 1.5em;
        }
    }
    span {
        flex-grow: 1;
        flex-shrink: 1;
        width: 90%;
        height: 70%;
        text-align: center;
        margin-bottom: 1em;
        position: relative;
        border: 1px solid rgba(210, 215, 217, 0.75);
        border-radius: .5em;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;