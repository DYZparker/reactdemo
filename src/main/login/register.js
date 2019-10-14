import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { 
    LoginWrapper,
    Title,
    Input,
    Button,
    Icon
 } from './style'

class Register extends Component {
    render() {
        const { registerStatus, handleregister } = this.props;
        if(!registerStatus) {
            return (
                <LoginWrapper>
                    <Title>
                        <Link to='./login'>
                            <div>登录</div>
                        </Link>
                        <i className="iconfont">&#xec1e;</i>
                        <Link to='./register'>
                            <div className='action'>注册</div>
                        </Link>
                    </Title>
                    <div>
                            <Input className="iconfont" placeholder='&#xe618; 账号' ref={(input) => {this.account = input}} /><br />
                            <Input className="iconfont" placeholder='&#xe657; 密码' type='password' ref={(input) => {this.password = input}}/>
                    </div>
                    <Button onClick={() => handleregister(this.account, this.password)}>注册</Button>
                    <Icon>
                        <p>社交账号登录</p>
                        <i className="iconfont">&#xe65e;</i>
                        <i className="iconfont">&#xe60a;</i>
                        <i className="iconfont">&#xe62f;</i>
                        <i className="iconfont">&#xe628;</i>
                    </Icon>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/login'/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        registerStatus: state.getIn(['login', 'register'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleregister(accountElem, passwordElem) {
            dispatch(actionCreators.register(accountElem.value, passwordElem.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);