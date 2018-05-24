import React, { Component } from 'react';
import { TextField, FlatButton, Avatar} from 'material-ui';
import {push } from 'react-router-redux'
import { connect } from 'react-redux'
import { changeLoginStatus } from "../actions/CommonAction";


class Login extends Component{
    render(){
        return(
            <div style={s_login.main}>
                <div style={s_login.login_view}>
                    <Avatar
                        src={require("../assets/image/circle.png")}
                        size={100}
                    />

                    <TextField
                        hintText="请输入邮箱"
                        floatingLabelText="邮箱"
                    />
                    <TextField
                        hintText="请输入密码"
                        floatingLabelText="密码"
                        type="password"
                    />
                        <FlatButton 
                            label="登录"
                            primary={true} 
                            labelStyle={s_login.login_label_btn}
                            backgroundColor="#a4c639"
                            hoverColor="#8AA62F"
                            style={s_login.login_btn}
                            onClick={this._linkIndex}
                        />
                </div>
            </div>
        )
    }

    _linkIndex=()=>{
        this.props.change_login_status(true)
        this.props.push_index()
    }
}

const s_login = {
    main:{
        width:'100%',
        height: "100%",
    },
    login_view: {
        marginTop:150,
        display:"flex",
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    
    },
    login_btn:{
        marginTop:20
    },
    login_label_btn:{
        color: '#fff'
    }
}
const mapStateToProps =(state)=>{
    return state
    
}


const mapDispatchToProps = dispatch => ({
    // 更改登录状态
    change_login_status: (status)=>{
        dispatch(changeLoginStatus(status))
    },
    push_index:()=>{
       dispatch(push('/'))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)