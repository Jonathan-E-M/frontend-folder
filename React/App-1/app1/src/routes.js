import React, { Component } from 'react';

import Component1 from './functional/component1';

import reduxContainer from './containers/reduxContainer';

//import { Router, Route } from 'react-router';
import Header from './containers/header';
import history from './utils/history';
import { BrowserRouter, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter history={history}>
                    <div>
                        <Header />
                        
                            <Route exact path='/' component={reduxContainer} />
                            <Route path="/component/:id" render={(props) => <Component1 {...props}/>} />
                            
                        

                    </ div>
                </BrowserRouter>
            </div>
        );
    }
}
export default Routes;