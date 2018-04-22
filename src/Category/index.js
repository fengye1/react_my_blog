import React, { Component } from 'react';
import Header from "../CommonComponent/header";
import { TextField } from 'material-ui';
class Category extends Component{
    render(){
        return(
            <div>
                <Header/>
                <TextField
                    value={"你好这个世界"}
                    id={"category"}
                />
            </div>
        )
    }
}
export default Category