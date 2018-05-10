import React, { Component } from 'react';
import AdminTabs from '../../CommonComponent/admin_tabs'
import { Paper, Avatar, FlatButton } from 'material-ui'
import Delete from 'material-ui/svg-icons/action/delete';
class UserAdmin extends Component{
    render(){
        return(
            <div style={s_user.main}>
                <AdminTabs/>
                <Paper style={s_user.content}>
                    <div style={s_user.middle}> 
                        <p>用户管理</p>
                        <div style={ s_user.user_item }>
                            <Avatar src={require('../../assets/image/circle.png')} />
                            <p style={s_user.item_text}>user</p> 
                            <p style={s_user.item_text}>2018-07-06</p>
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

const s_user = {
    main:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        width:'100%'
    },
    middle:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
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

    }
}

export default UserAdmin