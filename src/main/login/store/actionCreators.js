// import axios from 'axios';
import * as constants from './constants';
// import { fromJS } from 'immutable';
// import axios from 'axios';

// const changeList = (data) => ({
//     type: constants.CHANGE_LIST,
//     data: fromJS(data),
//     totalPage: Math.ceil(data.length /10)
// })

export const changeRegister = () => ({
    type: constants.CHANGE_REGISTER
});

export const changeLogin = (accout) => ({
    type: constants.CHANGE_LOGIN,
    username: accout
});

export const logout = () => ({
    type: constants.CHANGE_LOGOUT
});

export const register = (accout, password) => {
	return (dispatch) => {
        localStorage.setItem(accout,JSON.stringify(password))
        dispatch(changeRegister())
        alert('注册成功！请登录')
	}
}

export const login = (accout, password) => {
	return (dispatch) => {
        if(JSON.parse(localStorage.getItem(accout)) === password){
            dispatch(changeLogin(accout))
        }else {
            alert('登录失败')
        }
	}
}
