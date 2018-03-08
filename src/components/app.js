import React, { Component } from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from "redux-promise";

import reducers from "../reducers";
import PostsIndex from "./posts_index";
import PostsNew from "./posts_new";
import PostsShow from "./posts_show";
import PostsEdit from "./posts_edit";

import Header from "./layouts/header";
import Footer from "./layouts/footer";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class App extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <BrowserRouter>
                    <div>
                        <Header/>

                        <Switch>
                            <Route path="/" component={PostsIndex} />
                            <Route path="/posts/new" component={PostsNew}/>
                            <Route path="/posts/:id/edit" component={PostsEdit}/>
                            <Route path="/posts/:id" component={PostsShow}/>
                        </Switch>

                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}