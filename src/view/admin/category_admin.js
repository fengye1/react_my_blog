import React, { Component } from 'react';
import AdminTabs from '../../CommonComponent/admin_tabs'
import { Paper, Avatar, FlatButton, Subheader } from 'material-ui'
import Delete from 'material-ui/svg-icons/action/delete';


class CategoryAdmin extends Component{
    render(){
        return(
            <div style={s_articles.main}>
                <AdminTabs/>
                <Paper style={s_articles.content}>
                    <div style={s_articles.middle}> 
                        <div style={s_articles.middle_left}>
                            <span>分类管理</span>
                            <span>新建分类</span>
                        </div>
                        <div style={ s_articles.user_item }>
                            <div>
                                <p style={s_articles.sub_title}>分类名称</p>
                                <span style={s_articles.item_date}>2018-07-06</span>
                            </div>
                            <FlatButton
                                target="_blank"
                                label="delete"
                                secondary={true}
                                icon={<Delete/>}
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

const s_articles = {
    main:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        width:'100%',
        minHeight:800
    },
    middle:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    middle_top:{
        display:'flex',
        flexDirection:'row'
    },
    user_item:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    item_text:{
        fontSize:22,
        pading:10,
        paddingLeft:15,
        paddingRight:15,
    },
    item_date:{
        fontSize:16,
        pading:10,
        paddingLeft:15,
        paddingRight:15,
    },
    sub_title:{
        fontSize:20,
    }
}
export default CategoryAdmin