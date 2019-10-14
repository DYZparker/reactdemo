import React, { Component } from 'react';
import { Globalstyle, Wrapper, MainWrapper } from './style';
import { Globaliconfontstyle } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './sidebar'
import Login from './main/login'
import Register from './main/login/register'
import Home from './main/home'
import Detail from './main/detail'
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <Globaliconfontstyle/>
        <Provider store={store}>
          <Wrapper>
            <BrowserRouter>
              <MainWrapper>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/register' exact component={Register}></Route>
                <Route path='/detail' exact component={Detail}></Route>
              </MainWrapper>
                <Sidebar />
            </BrowserRouter>
          </Wrapper>
        </Provider>
      </div>
    );
  }
}

export default App;
