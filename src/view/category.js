import React, { Component } from 'react';
import Header from "../CommonComponent/header";
import {  List, ListItem,Subheader } from 'material-ui';
class Category extends Component{

    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div style={s_category.main}>
                <Header/>
                <List style={s_category.list}>
                    <Subheader>分类列表</Subheader>
                    <ListItem
                        primaryText="文件夹名称"
                        initiallyOpen={true}
                     
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={3}
                                primaryText="文章标题"
                            />,
                        ]}
                    />
                         <ListItem
                        primaryText="文件夹名称"
                        initiallyOpen={true}
                           // open={this.state.open}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={3}
                                primaryText="文章标题"
                                onNestedListToggle={this.handleNestedListToggle}
                            />,
                        ]}
                    />
                </List>
            </div>
        )
    }
}
const s_category = {
    main:{
        display: "flex",
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        width:'70%'
    }
}
export default Category