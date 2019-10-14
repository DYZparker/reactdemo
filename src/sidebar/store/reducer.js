import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    toggle: false,
    list: [
        {id:1, title:'第一页', show: false},
        {id:2, title:'第二页', show: false, child: [{id:1, title:'子项一'}, {id:2, title:'子项二'}, {id:3, title:'子项三'}]},
        {id:3, title:'第三页', show: false},
        {id:4, title:'第四页', show: false, child: [{id:1, title:'子项一'}, {id:2, title:'子项二'}, {id:3, title:'子项三'}]},
        {id:5, title:'第五页', show: false},
        {id:6, title:'第六页', show: false}
    ]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_TOGGLE:
            return state.set('toggle', action.toggle);
        case constants.CHANGE_SHOW:
            return state.set('list', action.list);
        default:
            return state;
    }
}