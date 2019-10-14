import React, { Component } from 'react';
import { 
    MainWrapper,
    Introduction,
    ContantWrap,
    Img
} from './style'
// import logoPic from '../../statics/logo.png'

export default class Detail extends Component {
    render() {
        return (
            <MainWrapper>
                <Introduction>
                    <header>react简介</header>
                    <ContantWrap>
                        <h1>前端框架react.js</h1>
                        <Img></Img>
                        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                    </ContantWrap>
                </Introduction>
            </MainWrapper>
        )
    }
}