import React, { Component } from 'react';
import { 
    MainWrapper,
    Introduction,
    ContantWrap,
    Img,
    Contant,
    Summary,
    Sumbody,
    Sumarticle,
    Picture,
    Picbody,
    Picarticle
} from './style'
import logoPic from '../../statics/logo.png'

export default class Main extends Component {
    render() {
        return (
            <MainWrapper>
                <Introduction>
                    <header>react简介</header>
                    <ContantWrap>
                        <Contant>
                            <h1>前端框架<br/>react.js</h1>
                            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                        </Contant>
                        <Img></Img>
                    </ContantWrap>
                </Introduction>
                <Summary>
                    <header><p>重要模块</p></header>
                    <Sumbody>
                        <Sumarticle>
                            <span>
                                <i className="iconfont">&#xe799;</i>
                            </span>
                            <div>
                                <h3>create-react-app</h3>
                                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.</p>
                            </div>
                        </Sumarticle>
                        <Sumarticle>
                            <span>
                                <i className="iconfont">&#xe799;</i>
                            </span>
                            <div>
                                <h3>create-react-app</h3>
                                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.</p>
                            </div>
                        </Sumarticle>
                        <Sumarticle>
                            <span>
                                <i className="iconfont">&#xe799;</i>
                            </span>
                            <div>
                                <h3>create-react-app</h3>
                                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.</p>
                            </div>
                        </Sumarticle>
                    </Sumbody>
                </Summary>
                <Picture>
                    <header><p>逻辑图</p></header>
                    <Picbody>
                        <Picarticle>
                            <span>
                                <img src={logoPic} alt=''/>
                            </span>
                            <div>
                                <h3>create-react-app</h3>
                                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.</p>
                            </div>
                        </Picarticle>
                        <Picarticle>
                            <span>
                                <img src={logoPic} alt=''/>
                            </span>
                            <div>
                                <h3>create-react-app</h3>
                                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.</p>
                            </div>
                        </Picarticle>
                        <Picarticle>
                            <span>
                                <img src={logoPic} alt=''/>
                            </span>
                            <div>
                                <h3>create-react-app</h3>
                                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu.Aenean ornare velit lacus, ac varius enim ullamcorper eu.</p>
                            </div>
                        </Picarticle>
                    </Picbody>
                </Picture>
            </MainWrapper>
        )
    }
}