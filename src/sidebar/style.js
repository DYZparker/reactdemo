import styled from 'styled-components';

export const SideWrapper = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 0.9em;
    width: 22em;
    background-color: #f5f6f7;
    position: relative;
    &.hidden {
        margin-left: -22em;
    }
    &.slide-enter, &.slide-exit {
        transition: all .5s ease;
    }
    &.slide-enter-active {
        margin-left: -22em;
    }
    &.slide-exit-active {
    }
`;

export const Title = styled.div`
    width: 100%;
    background-size: contain;
    background-color: #eff1f2;
    text-align: center;
    i {
        display: inline-block;
        color: #61dafb;
        font-size: 3em;
        line-height: 2em;
    }
    p {
        display: inline-block;
        margin-left: o.5em;
        font-weight: bold;
        font-family: "Roboto Slab", serif;
        color: #3d4449;
        font-size: 3em;
        line-height: 2em;
        font-style: italic;
    }
`;

export const Login = styled.div`
    border-bottom: solid 2px rgba(210, 215, 217, 0.75);
    margin: .5em 2em;
    padding: 0 0 1em 0;
    font-size: 100%;
    vertical-align: baseline;
    position: relative;
    p {
        display: inline-block;
        font-weight: bold;
        font-family: "Roboto Slab", serif;
        color: #3d4449;
        font-style: italic;
        i {
            color: #f56a6a;
            font-weight: bolder;
        }
    }
    div {
        display: inline-block;
        width: 5em;
        height: 2em;
        margin-left: 2em;
        border: 1px solid #f56a6a;
        border-radius: 1em;
        color: #f56a6a;
        text-align: center;
        line-height: 2em;
        &.logout {
            position: absolute;
            right: .5em;
            bottom: .5em;
        }
    }
`

export const Nav = styled.div`
    border-bottom: solid 2px rgba(210, 215, 217, 0.75);
    margin: 2em;
    padding: 0 0 3.5em 0;
    font-size: 100%;
    vertical-align: baseline;
    header {
        color: #3d4449;
        margin-bottom: 1em;
        h2 {
            font-size: 1.5em;
            font-weight: bold;
            font-family: "Roboto Slab", serif;
            display: inline-block;
            padding-bottom: 0.5em;
            border-bottom: solid 3px #f56a6a;
        }
    }
`;

export const NavItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    border-top: solid 1px rgba(210, 215, 217, 0.75);
    transition: all 0.4s ease;
    .linkParent {
        display: block;
        flex-grow: 9;
        color: #3d4449;
        text-decoration: none;
        &:hover {
            color: #f56a6a;
            text-shadow: 0.5px 0 1px #f56a6a;
        }
    }
    :first-of-type {
        border-style: none;
    }
    i {
        display: inline-block;
        flex-grow: 1;
        text-align: center;
        transform-origin: center;
        &.reverse {
            transform:rotate(-180deg);
        }
        &.icon-enter, &.icon-exit {
            transition: all .3s ease;
        }
        &.icon-enter-active {
            transform:rotate(-180deg);
        }
        &.icon-exit-active {
        }
    }
`

export const NavItemChild = styled.div`
    font-size: 0.9em;
    margin: 0 0 1.2em 2em;
    cursor: pointer;
    transition: all 1s ease;
    .linkChild {
        display: block;
        color: #9fa3a6;
        text-decoration: none;
        &:hover {
            color: #f56a6a;
            text-shadow: 0.5px 0.5px 1px #f56a6a;
        }
    }
`

export const Contact = styled.div`
    border-bottom: solid 2px rgba(210, 215, 217, 0.75);
    margin: 2em;
    padding: 0 0 3.5em 0;
    font-size: 100%;
    vertical-align: baseline;
    header {
        color: #3d4449;
        margin-bottom: 1em;
        h2 {
            font-size: 1.4em;
            font-weight: bold;
            font-family: "Roboto Slab", serif;
            display: inline-block;
            padding-bottom: 0.5em;
            border-bottom: solid 3px #f56a6a;
        }
    }
    ul {
        color: #9fa3a6;
        li {
            padding: 1.5em 0;
            border-bottom: solid 1px rgba(210, 215, 217, 0.75);
            cursor: pointer;
            transition: all 0.5s ease;
            :last-child {
                border-style: none;
            }
            i {
                color: #f56a6a;
            }
            p {
                display: inline-block;
                margin-left: 1em;
            }
        }
    }
`;

export const Footer = styled.div`
    color: #9fa3a6
    margin: 2em;
    padding: 0 0 3.5em 0;
    font-size: 100%;
    vertical-align: baseline;
`

export const Toggle = styled.div`
    position: absolute;
    top: 0;
    right: -5em;
    cursor: pointer;
    width: 5em;
    height: 5em;
    text-align: center;
    line-height: 5em;
    i {
        font-size: 2em;
        color: #f56a6a;
    }
`