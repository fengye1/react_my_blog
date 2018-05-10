import React, { Component } from 'react';
import { Route } from "react-router";
import Home from '../view/home';
import Category from "../view/category";
import Detail from "../view/detail";
import Login from "../view/login"
import Admin from "../view/admin"
import UserAdmin from "../view/admin/user_admin"
import ArticlesAdmin from "../view/admin/articles_admin"
import CategoryAdmin from "../view/admin/category_admin"

class Routes extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/category" component={Category} />
                <Route path="/detail" component={Detail} />
                <Route path="/login" component={Login} />
                <Route exact path="/admin" component={Admin} />
                <Route path="/admin/users" component={UserAdmin} />
                <Route path="/admin/articles" component={ArticlesAdmin} />
                <Route path="/admin/categorys" component={CategoryAdmin} />
            </div>
        )
    }
}

export default Routes