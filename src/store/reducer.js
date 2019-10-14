import { combineReducers } from 'redux-immutable';
import { reducer as sidebarReducer } from '../sidebar/store';
import { reducer as loginReducer } from '../main/login/store';
// import { reducer as detailReducer } from '../pages/detail/store';
// import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
    sidebar: sidebarReducer,
    login: loginReducer,
    // detail: detailReducer,
    // login: loginReducer
})

export default reducer;