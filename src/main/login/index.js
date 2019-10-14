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

class Login extends Component {
    render() {
        const { handlelogin, loginStatus } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <Title>
                        <Link to='./login'>
                            <div className='action'>登录</div>
                        </Link>
                        <i className="iconfont">&#xec1e;</i>
                        <Link to='./register'>
                            <div>注册</div>
                        </Link>
                    </Title>
                    <div>
                        <Input className="iconfont" placeholder='&#xe618; 账号' ref={(input) => {this.account = input}} /><br />
                        <Input className="iconfont" placeholder='&#xe657; 密码' type='password' ref={(input) => {this.password = input}}/>
                    </div>
                    <Button onClick={() => handlelogin(this.account, this.password)}>登录</Button>
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
            return <Redirect to='/'/>
        }
    }
}


const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlelogin(accountElem, passwordElem) {
            dispatch(actionCreators.login(accountElem.value, passwordElem.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);