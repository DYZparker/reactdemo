import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../main/login/store'
import { 
    SideWrapper,
    Title,
    Login,
    Nav,
    NavItem,
    NavItemChild,
    Contact,
    Footer,
    Toggle
 } from './style';

class Sidebar extends Component {
    getList() {
        const {list, handleChangeShow } = this.props;
        const newList = list.toJS();
        return newList.map( (item) => {
            if (item.child) {
                return (
                    <Fragment key={item.id}>
                        <NavItem onClick={()=>handleChangeShow(item, newList)}>
                            <Link to='/detail' className='linkParent'>
                                {item.title}
                            </Link>
                            <CSSTransition
                                in={item.show}
                                timeout={300}
                                classNames='icon'
                            >
                                <i className={item.show ? 'iconfont reverse' : 'iconfont'}>&#xe600;</i>
                            </CSSTransition>
                        </NavItem>
                        {item.show && item.child.map( (i) => 
                            <NavItemChild key={i.id}>
                                <Link to='/detail' className='linkChild'>
                                    {i.title}
                                </Link>
                            </NavItemChild>
                        )}
                    </Fragment>
                )
            }
            return <NavItem onClick={()=>handleChangeShow(item, newList)} key={item.id}>
                        <Link to='/detail' className={item.show ? 'linkParent selected' : 'linkParent'}>
                            {item.title}
                        </Link>
                    </NavItem>
        })
    }

    render() {
        const {toggle, handleToggle, username, login, handlelogout} = this.props;
        return (
            <CSSTransition
                in={toggle}
                timeout={500}
                classNames='slide'
            >
                <SideWrapper className={toggle ? 'hidden' : ''}>
                    <Link to='/'>
                        <Title>
                            <i className="iconfont">&#xe799;</i>
                            <p>React Notes</p>
                        </Title>
                    </Link>
                    <Login>
                        {login ? 
                        <Fragment>
                        <p>Welcome~<i>{username}</i></p>
                        <Link to='/login'><div className='logout' onClick={handlelogout}>登出</div></Link>
                        </Fragment> : 
                        <Fragment>
                            <p>Hello!</p>
                            <Link to='/login'><div>登录</div></Link>
                            <Link to='/register'><div>注册</div></Link>
                        </Fragment>}
                    </Login>
                    <Nav>
                        <header><h2>Menu</h2></header>
                        { this.getList() }
                    </Nav>
                    <Contact>
                        <header><h2>Get in touch</h2></header>
                        <ul>
                            <li>
                                <i className="iconfont">&#xe615;</i>
                                <p>13880000000</p>
                            </li>
                            <li>
                                <i className="iconfont">&#xe65e;</i>
                                <p>182345999</p>
                            </li>
                            <li>
                                <i className="iconfont">&#xe628;</i>
                                <p>https://github.com/DYZparker</p>
                            </li>
                            <li>
                                <i className="iconfont">&#xe62f;</i>
                                <p>https://weibo.com/endzero</p>
                            </li>
                            <li>
                                <i className="iconfont">&#xe65b;</i>
                                <p>https://dyzparker.github.io</p>
                            </li>
                        </ul>
                    </Contact>
                    <Footer>Parker@2019</Footer>
                    <Toggle onClick={() => handleToggle(toggle)}><i className="iconfont">&#xe609;</i></Toggle>
                </SideWrapper>
            </CSSTransition>
        )
    }

    componentDidMount() {
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.changeResizeSideShow)
    }
    
    bindEvents() {
        window.addEventListener('resize', this.props.changeResizeSideShow)
    }
}

const mapStateToProps = (state) => {
    return {
        toggle: state.getIn(['sidebar', 'toggle']),
        list: state.getIn(['sidebar', 'list']),
        username: state.getIn(['login', 'username']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggle (toggle) {
            dispatch(actionCreators.changeToggle(!toggle))
        },
        changeResizeSideShow() {
            if(document.documentElement.clientWidth < 1200) {
                dispatch(actionCreators.changeToggle(true))
            }else {
                dispatch(actionCreators.changeToggle(false))
            }
        },
        handleChangeShow (item, newList) {
            const show = !item.show
            const list = [...newList]
            list.forEach((i) => i.show = false)
            list[newList.indexOf(item)].show = show
            dispatch(actionCreators.changeShow(list))
        },
        handlelogout (){
            dispatch(loginActionCreators.logout())
        }
    }
}

mapDispatchToProps()

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);