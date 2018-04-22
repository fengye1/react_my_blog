import React, {Component} from 'react';
import AppBar from './header_app_bar'
import {TextField, FontIcon} from 'material-ui'
import './header.css';
class Header extends Component{
    render(){
        return(
            
            <div  className="main_home">
                <AppBar/>
                <div>
                    <TextField
                        disabled={true}
                        underlineShow={false}
                        value={"个人小栈"}
                        inputStyle={s_home.host_title}
                        id={"0"}
                    />
                </div>
                <div className="top">
                    <div>
                        <FontIcon className="material-icons" style={s_home.icon}>home</FontIcon>
                        <TextField
                            disabled={false}
                            underlineShow={false}
                            value={"北京市"}
                            id={'1'}
                            
                        />
                    </div>
                    <div>
                        <FontIcon className="material-icons" style={s_home.icon}>email</FontIcon>
                        <TextField
                            disabled={false}
                            underlineShow={false}
                            value={"lv953301729@qq.com"}
                            id={'2'}
                        />
                    </div>
                    <div>
                        <FontIcon className="material-icons" style={s_home.icon}>add_alert</FontIcon>
                        <TextField
                            disabled={false}
                            underlineShow={false}
                            value={"abc"}
                            id={'3'}
                        />
                    </div>
                </div>
                 
            </div>
        )
    }
}
const s_home = {
    main:{
        height: 400
    },
    host_title:{
        color: '#fff',
        fontSize: 40,
    },
    icon:{
        fontSize:24,
        color:'red'
    }
}

export default Header

