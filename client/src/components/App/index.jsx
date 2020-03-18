import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Wrapper from 'react-div-100vh';

import Lobby from '../Lobby';
import Playroom from '../Playroom';
import Error from '../Error';

import './index.css';

const App = () => {
    return (
        <Wrapper>
            <BrowserRouter>
                <Switch>
                    <Route path='/:room' exact component={Playroom} />
                    <Route path='/' exact component={Lobby} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </Wrapper>
    );
};

export default App;
