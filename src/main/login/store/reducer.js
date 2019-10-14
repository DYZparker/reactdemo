import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    register: false,
    login: false,
    username: null
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return state.merge({
                'login': true,
                'username': action.username
            });
        case constants.CHANGE_LOGOUT:
            return state.merge({
                'login': false,
                'username': null
            });
        case constants.CHANGE_REGISTER:
            return state.set('register', true)
        default:
            return state;
    }
}