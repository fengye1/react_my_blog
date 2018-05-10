import React, { Component } from 'react';
import { Paper } from "material-ui";
import AdminTabs from "../../CommonComponent/admin_tabs"

class Admin extends Component {
    render() {
        return (
            <div style={s_admin.main}>
                <AdminTabs></AdminTabs>
                <Paper style={s_admin.content}>
                    <p>ddddddd</p>
                    <p>用户</p>
                    <p>分类设置</p>
                    <p>作品设置</p>
                    <p>新建作品</p>
                    <p>作品详情</p>
                </Paper>
            </div>
        )

    }


}
const s_admin = {
    main:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        flex:1
    }
}
export default Admin